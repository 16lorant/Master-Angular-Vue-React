import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from "../Global";
import Siderbar from "./Siderbar";

//Validacion formularios y alertas

class CreateArticle extends Component{
    url=Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article : {},
        status: null,
        selectedFile: null
    };

    componentWillMount(){
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido',
                alpha_num_space: 'Solo son validos letras y números'
            }
        });
    }

    changeState = () => {
        this.setState({
            article:{
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) =>{
        e.preventDefault();

        //Rellenar state con formulario
        this.changeState();
        if (this.validator.allValid()) {
            
            //Hacer una peticion http por post para guardar el articulo
            axios.post(this.url+'save',this.state.article)
            .then(res => {
                if (res.data.articleStored) {
                    
                    this.setState({
                        article:res.data.articleStored,
                        status: 'waiting'
                    });

                    swal(
                        'Articulo creado',
                        'El articulo ha sido creado correctamente',
                        'success'
                    );

                    console.log(res.data.articleStored);
                    //Subir la imagen
                    if (this.state.selectedFile !== null) {
                        console.log(this.state);
                        //Sacar el id del artculo guardado
                        var articleId = res.data.articleStored._id;

                        //Crear form data y anadir fichero
                        const formData = new FormData();
                        formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                        );

                        //Peticion ajax
                        axios.post(this.url+'upload-image/'+articleId,formData)
                        .then(res => {
                            if (res.data.article) {
                                this.setState({
                                    article:res.data.articleStored,
                                    status: 'success'
                                });
                            }else{
                                this.setState({
                                    article:res.data.articleStored,
                                    status: 'failed'
                                });
                            }
                        })

                    } else {
                        this.setState({
                            status: 'success'
                        });
                    }

                }else{
                    
                    this.setState({
                        status:'failed'
                    });

                }
            });
        }else{
            this.setState({
                status:'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    fileChange = (event) => {
        
        this.setState({
            selectedFile: event.target.files[0]
        });  


    }

    render(){
        if (this.state.status === 'success') {
            return <Redirect to="/blog"/>;
        }

        return(
            <div className="center">
                <section  id="content">
                    <h1 className="subheader">Crear articulo</h1>
                    <form className="mid-form" onSubmit={this.saveArticle} >

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>
                        
                            {this.validator.message('title',this.state.article.title,'required|alpha_num_space')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                        
                            {this.validator.message('content',this.state.article.title,'required')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <input type="submit" value='Guardar' className="btn btn-success"/>
                    
                    </form>
                </section>

                <Siderbar />
            </div>
        );
    }

}

export default CreateArticle;