import {topColor, postColors} from '../requests/color-requests'
import {findUniqueColors, createSwatches, findColors, removePunctuation} from '../event-handlers/color-handlers'
const $ = require('jQuery');

const onLoad = $(document).ready(function() {
  topColor()
})

const clickColorize = $("button").on('click', function() {
  let string = removePunctuation($("textarea").val())
  let text = string.split(" ")
  let colors = findColors(text)
  postColors(colors)
  let uniqueColors = findUniqueColors(colors)
  createSwatches(uniqueColors)
})


module.exports = {onLoad, clickColorize}
