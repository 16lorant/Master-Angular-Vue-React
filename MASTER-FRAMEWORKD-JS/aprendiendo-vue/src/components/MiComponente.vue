<template>
    <section id="content">
        <h2 class="subheader">{{ titulo }}</h2>
        <div id="mi-componente">
            <hr/>
            <h1>Este es MI COMPONENTE</h1>
            <h2>{{ subtitulo }}</h2>
            <hr/>
            <h2>Reactividad</h2>
            <input type="text" v-model="nombre" />
            Mi nombre es: <strong>{{nombre}}</strong>
            
            <h2>Directivas condicionales </h2>
            <input type="number" v-model="edad"/>
            Mi edad es: <strong>{{edad}}</strong>

            <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
                !! ERES MAYOR DE EDAD !!
            </p>

            <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
                !! ERES DE AVANZADA DE EDAD !!
            </p>

            <p class="alert-danger-provisional" v-else>
                !! ERES MENOR DE EDAD !!
            </p>

            <h2>Directiva interactiva</h2>
            <ol>
                <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
            </ol>
            <!--pre>
                {{ $data }}
            </pre-->
        </div>
    </section>
</template>

<script>

export default {
    name: 'MiComponente',
    data() {
        return{
            titulo: 'Este es MI COMPONENTE',
            subtitulo: 'Soy el sustitulo de mi componente',
            nombre: '',
            edad:18,
            peliculas: ['Batman vs Superman','Harry Potter','Spiderman lejos de casa']
        }
    }
}
</script>