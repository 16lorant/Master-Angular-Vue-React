<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <div class="center">
      <LastArticlesComponent></LastArticlesComponent>
      <SiderbarComponent></SiderbarComponent>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SliderComponent from './components/SliderComponent.vue';
import SiderbarComponent from './components/SiderbarComponent.vue';
import LastArticlesComponent from './components/LastArticlesComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    SiderbarComponent,
    LastArticlesComponent,
    FooterComponent
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import './assets/css/styles.css';
</style>
