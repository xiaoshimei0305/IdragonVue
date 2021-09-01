import idrBanner from './idrBanner/index.vue'
import idrInput from './idrInput/index.vue'

const components = [
  idrBanner,idrInput
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
  idrBanner,
  idrInput
}