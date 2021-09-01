import Vue from 'vue'
import ElementUI from 'element-ui'
import idrSuggest from './idrSuggest/suggest.vue'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
const components = [
  idrSuggest
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
      Vue.component(component.name, component);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  install,
  idrSuggest
}