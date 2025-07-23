<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h1 class="subheader">Formulario</h1>
                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre" />
                        <div class="input-errors" v-if="submitted && v$.user.nombre.required.$invalid">
                            Este campo es requerido
                        </div>
                        <div class="input-errors" v-if="submitted && v$.user.nombre.minLength.$invalid">
                            Este campo debe tener mas caracteres
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" v-model="user.apellidos"/>
                        <div class="input-errors" v-if="submitted && v$.user.apellidos.required.$invalid">
                            Este campo es requerido
                        </div>
                        <div class="input-errors" v-if="submitted && v$.user.apellidos.minLength.$invalid">
                            Este campo debe tener mas caracteres
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="bio">Biografia</label>
                        <textarea name="bio" v-model="user.bio"></textarea>
                        <div class="input-errors" v-if="submitted && v$.user.bio.required.$invalid">
                            Este campo es requerido
                        </div>
                        <div class="input-errors" v-if="submitted && v$.user.bio.minLength.$invalid">
                            Este campo debe tener mas caracteres
                        </div>
                    </div>
                    <div class="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" v-model="user.genero"/> Hombre
                        <input type="radio" name="genero" value="mujer" v-model="user.genero"/> Mujer
                        <input type="radio" name="genero" value="otro" v-model="user.genero"/> Otro
                    </div>
                    <div class="clearfix"></div>
                    <input type="submit" value="Enviar" class="btn btn-success"/>
                </form>
            </section>
        </div>
        <SiderbarComponent></SiderbarComponent>
        <div class="clearfix"></div>
    </div> 
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import SiderbarComponent from './SiderbarComponent.vue';

export default {
    name: 'FormularioComponent',
    setup () {
        return { v$: useVuelidate() }
    },
    components:{
        SiderbarComponent
    },
    validations:{
        user: {
            nombre:{
                required,
                minLength: minLength(2)
            },
            apellidos:{
                required,
                minLength: minLength(2)
            },
            bio:{
                required,
                minLength: minLength(10)
            }
        }
    },
    data(){
        return {
            submitted:false,
            user: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            }
        }
    },
    methods:{
        mostrarUsuario(){
            console.log(this.user);
            this.submitted = true;
            this.v$.$touch();
            if (this.v$.$invalid) {
                return false;
            }
            alert('Validacion pasada');
        }
    }

}
</script> 