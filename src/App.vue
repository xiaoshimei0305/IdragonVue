<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <idr-suggest />
  </div>
</template>

<script>
import {idrSuggest} from './plugins';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemList:[{url:'http://www.baidu.com/wwww',name:'陈新俊'},{url:'fasfdsa',name:'merry'}]
    }
  },  
  components:{ //注册插件
    idrSuggest
  }
}
</script>