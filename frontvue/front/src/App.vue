<template>
  <div class="screen">
    <div class="login-form-origin" v-bind:class="{'login-form': regActive}">
    <form>
      <h1>Login</h1>
      <div class="inpt1">
        <h3>Username</h3>
        <input type="text" v-model="Login.username" placeholder="Username">
      </div>
      <div class="inpt1">
        <h3>Password</h3>
        <input type="text" v-model="Login.password" placeholder="Password">
      </div>
    </form>
    </div>
    <div class="reg-form-origin" v-bind:class="{'reg-form':regActive}">
      <form>
        <h1>Register</h1>
      <div class="inpt1">
        <h3>Username</h3>
        <input type="text" v-model="Reg.username" placeholder="Username">
      </div>
      <div class="inpt1">
        <h3>Password</h3>
        <input type="text" v-model="Reg.password" placeholder="Password">
      </div>
      <div class="inpt1">
        <h3>Email</h3>
        <input type="text" v-model="Reg.email" placeholder="Email">
      </div>
      </form>
    </div>
    <div class="buttons">
      <button v-on:click="regActive = true">Sing up</button>
      <button v-on:click="regActive = false">LOGIN</button>
    </div>
    <div class="buttons1">
      <button class="button1">Send</button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      tempApi: "",
      extension: ".json",
      regActive: false,
      Login:{
        username: '',
        password: ''
      },
      Reg: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods:{
    Regist(){
      this.$http.post(this.tempApi + 'logindata' + this.extension, this.Login).then(
        res =>{
          console.log(res)
        },
        error => {
          console.log(error)
        }
      )
    },
    Logins(){
      this.$http.post(this.tempApi + 'registrationdata' + this.extension, this.Reg).then(
        res =>{
          console.log(res)
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
</script>

<style>
  .login-form-origin {
    transition: all 0.2s linear;
  }

  .reg-form-origin {
    visibility: hidden;
    display: none;
    transition: all 0.2s linear;
  }

  .login-form {
    visibility: hidden;
    display: none;
  }

  .reg-form {
    visibility: visible;
    display: inline;
  }

  .screen{
    height: 570px;
    width: 400px;
    background-color: rgba(255,255,255,0.13);
    position: flex;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    text-align: center;
  }

  .screen h1{
    color: #fff;
    text-align: center;
    font-weight: bolder;
    text-shadow: 2px 4px black;
    font-size: 60px;
    padding-bottom: 20px;
  }

  .screen h3{
    padding-top: 10px;
    font-weight: bold;
    color: #fff;
    text-align:center;
    font-size: 35px;
    text-shadow: 2px 4px black;
  }

  .screen input{
    max-width:400px;
    width: 80%;
    line-height:3em;
    font-family: 'Ubuntu', sans-serif;
    margin:1em 2em;
    border-radius:5px;
    border:2px solid #f2f2f2;
    outline:none;
    padding-left:10px;
  }
  .buttons{
    margin-top: 15px;
  }
  .button1{
    height: 40px;
    width: 100px;
  }
  button{
    height:40px;
    width: 120px;
    background:#fff;
    border:1px solid #f2f2f2;
    border-radius:20px;
    color: black;
    text-transform:uppercase;
    font-family: 'Ubuntu', sans-serif;
    cursor:pointer;
    font-size: 15px;
    margin: 15px;
  }
</style>
