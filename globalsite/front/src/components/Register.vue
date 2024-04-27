<!-- <template>
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
</script> -->