<template>
  <h1>Регистрация!</h1>
  <input type="text" v-model="userName" placeholder="email">
  <input type="text" v-model="UserPass" placeholder="password">
  <button>Регистрация</button>
  <button @click="sendData()"></button>
  <p>{{ userName }}</p>
  <p>{{ userPass }}</p>
</template>
  
<script>
  export default{
    data(){
      return{
        userName:'',
        userPass:''
      }
    },
    methods:{
      sendData(){
        
      }
    }
  }
</script>

<style>

</style>
