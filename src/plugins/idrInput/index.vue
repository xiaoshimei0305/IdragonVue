<template>
  <div>
      <input :v-model="name"/>
      <span>{{name}}</span>
  </div>
</template>
<script>
  export default({
    name:'idr-input',
    props:{
      name:{
            type:String,
            default(){
              return 'Cherry!!'
            }
      }
    }
  })
</script>
<style>
</style>