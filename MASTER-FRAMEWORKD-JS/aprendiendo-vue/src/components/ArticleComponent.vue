<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <div id="articles">
                    <article class="article-item article-details" v-if="article">
                        <div class="images-wrap">
                            <img 
                                :src="url+'get-image/'+article.image"
                                :alt="article.title" 
                                v-if="article.image"
                            />
                            <img src="../assets/image/default.png"  :alt="article.title" 
                                v-else/>
                        </div>

                        <h1 class="subheader">{{ article.title }}</h1>
                        <span class="date">
                            {{ convertMoment(article.date) }}
                        </span>
                        <p>
                            {{article.content}}
                        </p>
                        <div class="clearfix"></div>
                        <router-link :to="'/editar/'+article._id" class="btn btn-warning">Editar</router-link>
                        <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
                    </article>

                </div>
            </section>
        </div>
        <SiderbarComponent></SiderbarComponent>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import SiderbarComponent from './SiderbarComponent.vue';
import Global from '../Global';
import axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert';

export default {
    name: 'ArticleComponent',
    components:{
        SiderbarComponent
    },
    data(){
        return {
            url: Global.url,
            article: null
        }
    },
    mounted(){
        var articleId= this.$route.params.id;
        this.getArticle(articleId);
    },
    methods:{
        getArticle(articleId){
            axios.get(this.url+'article/'+articleId).then( res =>{
                if (res.data.status === 'success') {
                    this.article = res.data.article;
                }
            });
        },
        convertMoment(date){
            return moment(date).format("ll");
        },
        deleteArticle(articleId){
            swal({
                title: "Estas seguro?",
                text: "Borrarás permanentemente tu articulo",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        axios.delete(this.url+'article/'+articleId)
                        .then(res => {
                            if(res.data.status=='success'){
                                swal(
                                    'Articulo borrado',
                                    'El articulo ha sido borrado correctamente',
                                    'success'
                                );  
                                this.$router.push('/blog');  
                            }  
                        });
                    } else {
                        swal(
                            'Tranquilo',
                            'No se ha borrado nada',
                            'info'
                        );
                    }
            });
        }
    }

}
</script>
