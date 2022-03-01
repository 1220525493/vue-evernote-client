<template>
  <div id ="login">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      msg:'This is login page'
    }
  }
}

</script>

<style scoped>
h1{
  color: red;
}

</style>
