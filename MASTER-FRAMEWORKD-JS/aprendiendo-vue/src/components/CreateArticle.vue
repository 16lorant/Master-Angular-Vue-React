<template src="./CreateArticle.html"></template>

<script>
import { useVuelidate } from '@vuelidate/core';
import SiderbarComponent from './SiderbarComponent.vue';
import Article from '@/models/Article';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Global from '@/Global';
import swal from 'sweetalert';


export default {
    name:'CreateArticle',
    setup () {
        return { v$: useVuelidate() }
    },
    components:{
        SiderbarComponent
    },
    data() {
        return {
            url: Global.url,
            file: null,
            article: new Article('','',null,''),
            submitted:false
        }
    },
    validations:{
        article:{
            title:{
                required
            },
            content:{
                required
            }
        }
    },
    mounted(){
        //console.log(this.article);
    },
    methods:{
        fileChange(){
            this.file = this.$refs.file.files[0];
            console.log('file',this.file);
        },
        save(){
            this.submitted=true;
            this.v$.$touch();
            if (this.v$.$invalid) {
                return false;
            }

            axios.post(this.url+'save',this.article)
            .then(res=>{
                //subida del archivo
                if (this.file !== null && this.file != undefined && this.file != '') {
                    const formData = new FormData();
                    formData.append(
                        'file0',
                        this.file,
                        this.file.name
                    );
                    var articleId=res.data.articleStored._id;
                    axios.post(this.url+'upload-image/'+articleId,formData).then(res=>{
                        if (res.data.status === "success") {
                            swal(
                                    'Articulo creado',
                                    'El articulo se ha creado correctamente',
                                    'success'
                                );
                            this.article= res.data.article;
                            this.$router.push('/blog');
                        }else{
                            swal(
                                'Creacion fallida',
                                'El articulo no se ha creado bien',
                                'error'
                            );
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                }else{
                    if (res.data.status === "success") {
                        swal(
                                'Articulo creado',
                                'El articulo se ha creado correctamente',
                                'success'
                            );
                        this.article= res.data.articleStored;
                        this.$router.push('/blog');
                    }else{
                        swal(
                                'Creacion fallida',
                                'El articulo no se ha creado bien',
                                'error'
                            );
                    }
                }
                
                //console.log(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>