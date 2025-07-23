<template>
    <div class="general">
        <SliderComponent
            texto="blog"
        ></SliderComponent>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Blog</h2>
                <div id="articles" v-if="articles">
                    <ArticlesComponent :articles="articles"></ArticlesComponent>
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
    name: 'BlogComponent',
    components: {
        SiderbarComponent,
        SliderComponent,
        ArticlesComponent
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return {
            url:Global.url,
            articles: null
        }
    },
    methods:{
        getArticles(){
            axios.get(`${Global.url}articles`)
            .then(
                res =>{
                    if (res.data.status == 'success') {
                        this.articles = res.data.articles;
                    }
                }
            )
        }
    }
}
</script> 