<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Peliculas</h2>

                <div class="favorita" v-if="favorita">
                    <h2>{{ $filters.mayusculas(favorita.title)}}</h2>
                </div>
                <!--Lista de articulos-->
                <div id="articles">
                    <!-- v-for="pelicula in peliculas" v-bind:key="pelicula.title"-->            
                    <div v-for="pelicula in peliculaMayuscula" v-bind:key="pelicula.title">
                        <PeliculaComponent 
                            :pelicula="pelicula"
                            @favorita="haLlegadoLaPeliculaFavorita"
                        ></PeliculaComponent>
                    </div>
                </div>
                <!--Añadir  articulos nuevos-->
            
            </section>
            <SiderbarComponent></SiderbarComponent>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import PeliculaComponent from './PeliculaComponent.vue';
import SiderbarComponent from './SiderbarComponent.vue';

export default {
    name: 'PeliculasComponent',
    components:{
        PeliculaComponent,
        SiderbarComponent
    },
    methods:{
        haLlegadoLaPeliculaFavorita(favorita){
            this.favorita=favorita;
        }
    },
    computed:{
        peliculaMayuscula(){
            let peliculaMod = this.peliculas;
            for (let i = 0; i < peliculaMod.length; i++) {
                peliculaMod[i].title = peliculaMod[i].title.toUpperCase()  
            }
            
            return peliculaMod;
        }
    },
    data(){
        return {
            favorita:null,
            peliculas:[
                {title: "Batman vs Superman", year: 2017, image:"https://tse1.mm.bing.net/th/id/OIP.WO-ndaPgfggEDtOEXVjS7AHaEE?rs=1&pid=ImgDetMain&o=7&rm=3"},
                {title: "Black Clover", year: 2018, image:"https://th.bing.com/th/id/R.8cffb7986621a73564fea3b69996fdb8?rik=ZH4YN8QnEWcyzw&pid=ImgRaw&r=0"},
                {title: "The Flash", year: 2022, image:"https://th.bing.com/th/id/R.7e3223ead28276bffd813477ee3a5563?rik=me6MMjaPVWHMJA&pid=ImgRaw&r=0"}
            ]
        }
    }
}
</script> 