import {topColor, postColors} from '../requests/color-requests'
import {findUniqueColors, createSwatches, findColors} from '../event-handlers/color-handlers'
const $ = require('jQuery');

const onLoad = $(document).ready(function() {
  topColor()
})

const clickColorize = $("button").on('click', function() {
  let text = $("textarea").val().split(" ")
  let colors = findColors(text)
  postColors(colors)
  let uniqueColors = findUniqueColors(colors)
  createSwatches(uniqueColors)
})


module.exports = {onLoad, clickColorize}
