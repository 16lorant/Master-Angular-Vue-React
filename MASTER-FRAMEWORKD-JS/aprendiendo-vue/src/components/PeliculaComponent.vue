<template>
    <article class="article-item" >
        <div class="images-wrap">
            <img :src="pelicula.image" :alt="pelicula.title" />
        </div>

        <h2>{{pelicula.title}}</h2>
        <span class="date" :class="{
            yeargreen:pelicula.year >= 2020,
            yearred:pelicula.year <= 2020
        }">
            {{pelicula.year}}
        </span>
        <a href="#">Leer mas</a>

        <input type="button" value="Marcar como favorita"
            v-on:click="pasarFavoritaAlPadre(pelicula)"
        />

        <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
    name: 'PeliculaComponent',
    props: ['pelicula'],
    methods:{
        pasarFavoritaAlPadre(pelicula){
            this.$emit('favorita',pelicula);
        }
    }
}
</script> 