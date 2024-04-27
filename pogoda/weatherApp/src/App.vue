<template>
  <div class="screen" >
    <h1>Погода в мире</h1>
    <p>Узнать погоду в {{ city == "" ? "вашем городе" : cityName }}</p>
    <div class="buttons">
      <input type="text" v-model="city" placeholder="Укажите город">
      <button v-show="city !=''" @click="getWeather()">Узнать погоду</button> 
    </div>

    <p class="err">{{ error }}</p>

    <div v-if="info !=null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeel }}</p>
      <p>{{ showPress}}</p>
      <p>{{ showVis }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    data(){
      return{
        city:'',
        error: '',
        info: null
      }
    },
    methods:{
      getWeather(){
        if(this.city.trim().length < 2){
          this.error = "Введите больше букв"
          return false
        }
        this.error = ''

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=ca0668e3e20bc7b88a3ea41226cf167e`)
                .then(res => (this.info = res.data))
      }
    },
    computed:{
      cityName(){
        return '"' + this.city + '"'
      },
      showTemp(){
        return "Температура :" + this.info.main.temp + " C"
      },
      showFeel(){
        return "Чуствуется :" + this.info.main.feels_like + " C"
      },
      showPress(){
        return "Давление :" + this.info.main.pressure + ""
      },
      showVis(){
        return " В:" + this.info.main.visibility + ""
      },
    }
}
</script>

<style>
  .screen{
    width: 600px;
    height: 400px;
    border-radius: 50px;
    background: rgb(16,165,159);
    background: linear-gradient(37deg, rgba(16,165,159,1) 30%, rgba(167,0,255,1) 70%); ;
  }
  .screen h1, p{
    margin-top: 20px;
    text-align: center;
  }
  .screen h1{
    font-size: 40px;
  }
  
  .screen p{
    font-size: 25px;
  }

  .buttons{
    display: flex;
    justify-content: center;
    margin-top: 20px ;
  }

  .buttons input{
    background: transparent;
    border: 0;
    border-bottom: 2px solid black;
    color: black;
    font-size: 25px;
    padding: 5px 8px;
    outline: none;
  }
  .err{
    color: red;
  }


</style>
