<template>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  created(){
    var array = ["create","edit"]
    localStorage.setItem('permissions',JSON.stringify(array))
  },
  mounted(){
  }
}
</script>
