<template>
    <div class="general">
        <SliderComponent
            texto="Pagina de pruebas"
        ></SliderComponent>
        <div class="center">
            <section id="content">
                <h2 class="subheader">{{nombre}}</h2>
                <h3>{{id_desde_url}}</h3>
                <button @click="actualizarNombre()">Actualizar Nombre</button>
                <button @click="redirigirAlBlog()">redirigir Al Blog</button>
            </section> 
        </div>
        <SiderbarComponent></SiderbarComponent>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import SiderbarComponent from './SiderbarComponent.vue';
import SliderComponent from './SliderComponent.vue';

export default {
    name: 'PaginaComponent',
    created(){
        console.log('Componente creado!!');
    },
    mounted(){
        this.id_desde_url = this.$route.params.id;
        console.log('Componente montado!!');
    },
    updated(){
        console.log('Componente actualizado!!');
    },
    unmounted() {
        console.log('Componente eliminado!!');
    },
    data(){
        return{
            id_desde_url:null,
            nombre:'Pagina de pruebas'
        }
    },
    components:{
        SiderbarComponent,
        SliderComponent
    },
    methods:{
        actualizarNombre(){
            this.nombre = 'Ramon Oronel WEB';
            console.log(this.nombre);
        },
        redirigirAlBlog(){
            this.$router.push('/blog');
        }
    },
}
</script> 