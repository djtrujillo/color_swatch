import COLORS from '../data/colors'
import postColors from '../requests/color-requests'
var $ = require('jQuery')

const findUniqueColors = (colors) => {
  let uniqueColors = []
  $.each(colors, function(i, el){
    if($.inArray(el, uniqueColors) === -1) uniqueColors.push(el);
  });
  return uniqueColors
}

const findColors = (text) => {
  let colors = []
  text.forEach(function(element) {
    if (element in COLORS) {
      colors.push(element)
    }
  })
  return colors
}

const createSwatches = (uniqueColors) => {
  uniqueColors.forEach(function(element) {
    $(".colorized-text").append(`<div class="swatch" style="background-color:${COLORS[element]}"></div>`)
  })
}

module.exports = {findUniqueColors, createSwatches, findColors}
