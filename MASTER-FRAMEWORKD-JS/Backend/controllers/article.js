'use string'

var validator = require('validator');
var Article = require('../models/article');
var fs = require('fs');
var path = require('path');
const article = require('../models/article');


var controller ={

    datosCurso: (req,res) => {
        let hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Ramon Oronel',
            hola
        })
    },

    test: (req,res) =>{
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        })
    },

    save: (req,res)=>{
        //recoger los parametros por post
        let params = req.body;
        
        //validar datos(validator)
        try {
            var validator_title = !validator.isEmpty(params.title);
            var validator_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(200).send({
                message: 'Falta datos por enviar!!!'
            }) 
        }

        if (validator_title && validator_content) {
            //crear el objeto a guardar
            var article = new Article();

            //asignar valores
            article.title = params.title;
            article.content = params.content;
            
            if (params.image) {
                article.image = params.image;
            }else{
                article.image = null;
            }

            //guardar el articulo
            article.save().then((articleStored)=>{
                console.log(articleStored);
                //deolver una respuesta
                return res.status(200).send({
                    status:'success',
                    articleStored
                });
            }).catch((err)=>{
                
                return res.status(404).send({
                    status:'error',
                    message: 'El articulo no se ha guardado !!!'
                });
            })

           
        }else{
            return res.status(200).send({
                'status': 'error',
                message: 'Los datos no son validos'
            })
        }

    },

    getArticles:(req,res)=>{

        let query = Article.find({});

        let last= req.params.last;
        console.log(last);
        if (last || last!=undefined) {
            query.limit(5);
        }

        //find
        query.sort('_id').then((articles)=>{
            if (!articles) {
                return res.status(404).send({
                    'status': 'error',
                    message: 'No hay articulos para mostrar !!!'
                })
            }
            return res.status(200).send({
                'status': 'success',
                articles
            })
        }).catch((err)=>{  
            return res.status(500).send({
                'status': 'error',
                message: 'Error al devolver los articulos'
            });
        });
    },

    getArticle:(req,res)=>{

        // Recoger el id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if (!articleId || articleId==null) {
            return res.status(404).send({
                'status': 'error',
                message: 'No existe el articulo !!!'
            });
        }

        //Buscar el articulo
        Article.findById(articleId).then((article)=>{
            if (!article) {
                return res.status(500).send({
                    'status': 'error',
                    message: 'Error al devolver los datos !!!'
                });
            }
            return res.status(200).send({
                'status': 'success',
                article
            })
        }).catch((err)=>{  
            return res.status(404).send({
                'status': 'error',
                message: 'No existe el articulo !!!'
            });
        });
    },
    update: (req, res) =>{
        // Recoger el id del articlo por la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        //Validar datos
        try {
            var validate_title = ! validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(404).send({
                status:'error',
                message: 'Faltan datos por enviar!!!'
            })
        }

        if (validate_title && validate_content) {
            //Find and update
            Article.findOneAndUpdate({_id:articleId},params,{new:true}).then((articleUpdate)=>{
                    if(!articleUpdate){
                        return res.status(500).send({
                            'status': 'error',
                            message: 'Error al devolver los datos !!!'
                        });
                    }
                    return res.status(200).send({
                        status:'success',
                        article: articleUpdate
                    })
            }).catch((err)=>{  
                return res.status(404).send({
                    'status': 'error',
                    message: 'No existe el articulo !!!'
                });
            });
        } else {
            //Devolver respuesta
            return res.status(200).send({
                'status': 'error',
                message: 'Los datos no son validos'
            })
        }

    },
    delete: (req, res) =>{
        // Recoger el id del articlo por la url
        var articleId = req.params.id;
        //Find and delete
        Article.findOneAndDelete({_id:articleId}).then((articleDelete)=>{
            if(!articleDelete){
                return res.status(500).send({
                    'status': 'error',
                    message: 'Error al borrar !!!'
                });
            }
            return res.status(200).send({
                status:'success',
                article: articleDelete
            })
        }).catch((err)=>{  
            return res.status(404).send({
                'status': 'error',
                message: 'No existe el articulo !!!'
            });
        });
    },
    upload: (req,res) =>{
        // Configurar el modulo connect multioarty router/article.js (hecho)

        // Recoger el fichero de la peticion
        var file_name = 'Imagen no subida....';
        console.log(req.files);
        if (!req.files) {
            return res.status(404).send({
                'status': 'error',
                message: file_name
            });
        }
        
        // Conseguir nombre y la extensio del archivo
        var file_path = (req.files.file?req.files.file.path:req.files.file0.path);
        var file_split = file_path.split('\\');

        // * ADVERTENCIA * EN LINUX O MAC
        // var file_split = file_path.split('/');

        // Nombre del archivo

        var file_name = file_split[2];
        //Extension del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
            //borrar el archivo  
            fs.unlink(file_path,(err)=>{
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida'
                });
            });
            

        }else{
            // Si todo es valido
            var articleId = req.params.id;
            if (articleId) {
                // Buscar el articulo, asidnarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({_id:articleId},{image:file_name},{new:true}).then((articleUpdate)=>{
                    if (!articleUpdate) {
                        return res.status(500).send({
                            'status': 'error',
                            message: 'Error al guardar la direccion de la imagen !!!'
                        });  
                    }
                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdate
                    });
                }).catch((error)=>{
                    return res.status(404).send({
                        'status': 'error',
                        message: 'No existe el articulo !!!'
                    });
                });
            }else{
                return res.status(200).send({
                    status: 'success',
                    image:file_name
                });
            }
            

            
        }

    },
    getImage: async (req,res) =>{
        var file = req.params.image;
        var path_file = './upload/articles/'+file;
        fs.exists(path_file, (exists) =>{
            console.log(exists);
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    'status': 'error',
                    message: 'La imagen no existe!!!'
                });
            }
        })
    },
    search: (req,res) =>{
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({ "$or": [
            {"title": {"$regex":searchString, "$options":"i"}},
            {"content": {"$regex":searchString, "$options":"i"}}
        ]})
        .sort([['date','descending']])
        .then((article)=>{
            if (!article || article.length <= 0) {
                return res.status(400).send({
                    'status': 'error',
                    message: 'No hay articulos en la petición !!!'
                });
            }
            return res.status(200).send({
                'status': 'success',
                article
            });
        }).catch((err)=>{
            return res.status(500).send({
                'status': 'error',
                message: 'Error en la peticion !!!'
            });
        });
    }

};

module.exports = controller;