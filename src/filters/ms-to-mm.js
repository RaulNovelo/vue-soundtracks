/**
 * Created by @RaulNovelo
 * Custom filter to convert ms to mm
 */

const msToMm = {}

/**
 * Converts miliseconds to minutes
 * @param {Number} ms time in miliseconds
 */
function convertMsToMm (ms) {
  // modify the given value
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)

  return `${min}:${sec < 10 ? '00' : sec} min`
}

// inject filter as plugin
msToMm.install = function (Vue) {
  Vue.filter('msToMm', val => {
    return convertMsToMm(val)
  })
}

export default msToMm
