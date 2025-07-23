<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Crear articulo</h2>
                <!--Formulario-->
                <form class="mid-form" v-on:submit.prevent="save()">
                    <div class="form-group">
                        <label for="title">Titulo</label>
                        <input type="text" name="title" v-model="article.title"/>
                    </div>
                    <div class="form-group">
                        <label for="content">Contenido</label>
                        <textarea name="content" v-model="article.content"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image">Imagen</label>
                        <input type="file" name="image" />
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
import SiderbarComponent from './SiderbarComponent.vue';
import Article from '@/models/Article';


export default {
    name:'CreateArticle',
    components:{
        SiderbarComponent
    },
    data() {
        return {
            article: new Article('','',null,'')
        }
    },
    mounted(){
        console.log(this.article);
    },
    methods:{
        save(){

        }
    }
}
</script>