import {topColor} from '../requests/color-requests'
import {findUniqueColors} from '../event-handlers/color-handlers'
const $ = require('jQuery');

const onLoad = $(document).ready(function() {
  topColor()
})

const clickColorize = $("button").on('click', function() {
  let text = $("textarea").val().split(" ")
  findUniqueColors(text)
})


module.exports = {onLoad, clickColorize}
