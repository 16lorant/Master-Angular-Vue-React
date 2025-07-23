<template>
    <div class="general">
        <SliderComponent
            :texto='"Busqueda: "+searchString'
        ></SliderComponent>
        <div class="center">
            <section id="content">
                <h2 class="subheader" v-if="articles">Articulos encontrados</h2>
                <h2 class="subheader" v-else>Sin resultados</h2>
                <div id="articles" v-if="articles">
                    <ArticlesComponent :articles="articles"></ArticlesComponent>
                </div>
                <div v-else>
                    <h2>No hay articulos que coincidan con tu busqueda</h2>
                </div>
            </section> 
        </div>
        <SiderbarComponent></SiderbarComponent>
        <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';
import SliderComponent from './SliderComponent.vue';
import ArticlesComponent from './ArticlesComponent.vue';
import SiderbarComponent from './SiderbarComponent.vue';

export default {
    name: 'SearchComponent',
    components: {
        SiderbarComponent,
        SliderComponent,
        ArticlesComponent
    },
    mounted(){
        this.searchString = this.$route.params.searchString;
        this.getArticlesBySearch(this.searchString);
    },
    data(){
        return {
            url:Global.url,
            articles: null,
            searchString : null
        }
    },
    methods:{
        getArticlesBySearch(searchString){
            axios.get(`${Global.url}search/`+searchString)
            .then(
                res =>{
                    if (res.data.status == 'success') {
                        this.articles = res.data.article;
                    }
                }
            )
            .catch(
                () =>{
                    this.articles = null;
                }
            )
        }
    }
}
</script> 