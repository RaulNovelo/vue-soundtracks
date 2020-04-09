/**
 * Created by @RaulNovelo
 * Custom directive to apply blur to element
 */
const blur = {}

/**
 * Set blur to element
 * @param {*} el HTML element
 * @param {*} binding Binding value
 */
function setBlur (el, binding) {
  // DOM manipulation
  el.style.filter = !binding.value ? 'blur(3px)' : '(none)'
  el.style.filter = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('a').forEach(element => {
    if (!binding.value) {
      element.setAttribute('disabled', true)
    } else {
      element.removeAttribute('disabled')
    }
  })
}

// Inject directive as plugin
blur.install = function (Vue) {
  Vue.directive('blur', { // use as v-blur
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
