<template>
    <div id="mi-componente">
        <hr/>
        <h1>Este es MI COMPONENTE</h1>
        <h2>{{ subtitulo }}</h2>
        <hr/>
    </div>
</template>

<script>

export default {
    name: 'MiComponente',
    data() {
        return{
            subtitulo: 'Soy el sustitulo de mi componente'
        }
    }
}
</script>