<template>
  <div>
    <div v-for="(item,index) in itemList" v-bind:key="index">
      <span>url:{{item.url}}</span>
      <idr-input/>     
    </div>
  </div>
</template>
<script>
import idrInput from "../idrInput/index.vue";
export default({
  name:'idr-banner',
  props:{
    itemList:{
          required: true,
          type: Array
    }
  },
  components:{
    idrInput
  }
})
</script>
<style>
</style>