<template>
  <div>
    <h1>Films</h1>
    <small>data, methods, computed</small>
    <br>
    <hr>
    <br>
    <p>Название : <strong> {{ name }} </strong></p>
    <p>ГОд выпуска : <strong> {{ year }} </strong></p>
    <br>
    <br>
    <button @click="changeFilm()">Изменить</button>

  </div>
</template>

<script>
import { ref } from "vue"

export default{
  setup(){
    const name = ref ('Призрак в доспехах');
    const year = ref (1995)

    function changeFilm (){
      name.value = 'Моанна'
      year.value = '2020'
    }

    return{
      name, year, changeFilm
    }
  }



  // data (){
  //   return{
  //     name: 'Призрак в доспехах',
  //     year: '1995',
  //   }
  // },
  // methods:{
  //   changeFilm(){
  //     this.name = "Моана"
  //     this.year = "2020"
  //   }
    
  // }
}
</script>
