import {topColor} from '../requests/color-requests'
import {findUniqueColors, createSwatches} from '../event-handlers/color-handlers'
const $ = require('jQuery');

const onLoad = $(document).ready(function() {
  topColor()
})

const clickColorize = $("button").on('click', function() {
  let text = $("textarea").val().split(" ")
  let uniqueColors = findUniqueColors(text)
  createSwatches(uniqueColors)
})


module.exports = {onLoad, clickColorize}
