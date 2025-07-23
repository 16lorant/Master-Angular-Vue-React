<template>
  <div class="general">
    <SliderComponent
      texto="Ultimos articulos"
      home="true"
    ></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>
        <!--Lista de articulos-->
        <div id="articles">
          <ArticlesComponent :articles="articles"></ArticlesComponent> 
        </div>
        <!--Añadir  articulos nuevos-->
      </section>
      <SiderbarComponent></SiderbarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from '../Global';
import SliderComponent from "./SliderComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
import SiderbarComponent from "./SiderbarComponent.vue";


export default {
  name: "LastArticlesComponent",
  components: {
    SiderbarComponent,
    SliderComponent,    
    ArticlesComponent
    },
    mounted(){
        this.getLastArticles();
    },
    data(){
        return {
            url:Global.url,
            articles: null
        }
    },
    methods:{
        getLastArticles(){
            axios.get(`${Global.url}articles/last`)
            .then(
                res =>{
                    if (res.data.status == 'success') {
                        this.articles = res.data.articles;
                    }
                }
            )
        }
    }
};
</script> 