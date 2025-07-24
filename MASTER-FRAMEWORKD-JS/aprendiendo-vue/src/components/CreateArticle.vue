<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Crear articulo</h2>
                <!--Formulario-->
                <form class="mid-form" v-on:submit.prevent="save()">
                    <div class="form-group">
                        <label for="title">Titulo</label>
                        <input type="text" name="title" v-model="article.title" required/>
                        <div class="input-errors" v-if="submitted && v$.article.title.required.$invalid">
                            Este campo es requerido
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="content">Contenido</label>
                        <textarea name="content" v-model="article.content" required></textarea>
                        <div class="input-errors" v-if="submitted && v$.article.content.required.$invalid">
                            Este campo es requerido
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="image">Imagen</label>
                        <input type="file" id="file" ref="file" name="file0" v-on:change="fileChange()" />
                    </div>
                    <input type="submit" value="Guardar" class="btn btn-success">
                </form>

            </section> 
        </div>
        <SiderbarComponent></SiderbarComponent>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import SiderbarComponent from './SiderbarComponent.vue';
import Article from '@/models/Article';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Global from '@/Global';


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
                            this.article= res.data.article;
                            this.$router.push('/blog');
                        }else{
                            //mostrar alerta de error;
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                }else{
                    if (res.data.status === "success") {
                        this.article= res.data.articleStored;
                        this.$router.push('/blog');
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