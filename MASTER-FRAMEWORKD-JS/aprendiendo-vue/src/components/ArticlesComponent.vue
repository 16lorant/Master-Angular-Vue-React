<template>
    <section>
        <div id="articles-list" v-if="articles && articles.length >=1">
            <article class="article-item" v-for="article in articles" :key="article._id">
                <div class="images-wrap">
                    <img   
                        :src="url+'get-image/'+article.image"  
                        alt="article.title" 
                        v-if="article.image"
                    />
                    <img   
                        src="../assets/image/default.png"  
                        alt="article.title" 
                        v-if="!article.image"
                    />
                </div>
               
                <h2> 
                    <router-link :to="{name:'article',params:{id:article._id}}">                        
                        {{article.title}} 
                    </router-link>
                </h2>
               
                <span class="date">
                    {{ convertMoment(article.date) }}
                </span>
                <a href="#">Leer mas</a>
                <div class="clearfix"></div>
            </article>
        </div>
        <div v-else-if="articles && articles.length < 1">
            No hay articulos para mostrar
        </div>
        <div v-else>
            Cargando....
        </div>
    </section>
</template>

<script>
import Global from '../Global';
import moment from 'moment';

export default {
    name: 'BlogComponent',
    props: ['articles'],
    data(){
        return {
            url:Global.url
        }
    },
    methods:{
        convertMoment(date){
            return moment(date).format("ll");
        }
    }
}

</script>