<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>

    <!-- 在组件home、search中显示 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  mounted() {
    //通知vuex发送请求
    this.$store.dispatch('CategoryList')
  }
}
</script>

<style>

</style>
