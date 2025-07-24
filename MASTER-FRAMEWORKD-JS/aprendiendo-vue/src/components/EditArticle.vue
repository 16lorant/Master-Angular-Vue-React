<template src="./CreateArticle.html"></template>

<script>
import { useVuelidate } from '@vuelidate/core';
import SiderbarComponent from './SiderbarComponent.vue';
import Article from '@/models/Article';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import Global from '@/Global';
import swal from 'sweetalert';


export default {
    name:'EditArticle',
    setup () {
        return { v$: useVuelidate() }
    },
    components:{
        SiderbarComponent
    },
    data() {
        return {
            url: Global.url,
            file: null,
            article: new Article('','',null,''),
            submitted:false,
            isEdit:true
        }
    },
    validations:{
        article:{
            title:{
                required
            },
            content:{
                required
            }
        }
    },
    mounted(){
        var articleId = this.$route.params.id; 
        console.log('articleId',articleId);
        if(articleId){
            this.getArticle(articleId);
        }
    },
    methods:{
        fileChange(){
            this.file = this.$refs.file.files[0];
            console.log('file',this.file);
        },
        getArticle(articleId){
            axios.get(this.url+'article/'+articleId).then( res =>{
                if (res.data.status === 'success') {
                    this.article = res.data.article;
                }
            });
        },
        save(){
            this.submitted=true;
            this.v$.$touch();
            if (this.v$.$invalid) {
                return false;
            }
            var articleId = this.$route.params.id;
            axios.put(this.url+'article/'+articleId,this.article)
            .then(res=>{
                //subida del archivo
                var articleId=res.data.article._id;
                if (this.file !== null && this.file != undefined && this.file != '') {
                    const formData = new FormData();
                    formData.append(
                        'file0',
                        this.file,
                        this.file.name
                    );
                    axios.post(this.url+'upload-image/'+articleId,formData).then(res=>{
                        if (res.data.status === "success") {
                            swal(
                                    'Articulo editado',
                                    'El articulo se ha editado correctamente',
                                    'success'
                                );
                            this.article= res.data.article;
                            this.$router.push('/articulo/'+articleId);
                        }else{
                            swal(
                                'Edicion fallida',
                                'El articulo no se ha editado bien',
                                'error'
                            );
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                    });
                }else{
                    if (res.data.status === "success") {
                        swal(
                                'Articulo editado',
                                'El articulo se ha editado correctamente',
                                'success'
                            );
                        this.article= res.data.article;
                        this.$router.push('/articulo/'+articleId);
                    }else{
                        swal(
                                'Editado fallida',
                                'El articulo no se ha editado bien',
                                'error'
                            );
                    }
                }
                
                //console.log(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>