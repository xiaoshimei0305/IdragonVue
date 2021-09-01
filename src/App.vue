<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <idr-banner :itemList="itemList"></idr-banner>
  </div>
</template>

<script>
import {idrBanner} from './plugins';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemList:[{url:'http://www.baidu.com/wwww'},{url:'fasfdsa'}]
    }
  },  
  components:{ //注册插件
    idrBanner
  }
}
</script>