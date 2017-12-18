import {postTopColor} from "../response-handlers/color-responses.js"

var $ = require('jQuery');

const requestUrl = "https://color-swatch-api.herokuapp.com"

const topColor = () => {
  $.get(`${requestUrl}/api/v1/top_color`, function(data) {
    postTopColor(data)
  })
}

const postColors = (colors) => {
  let colorObjects = createColorObjects(colors)
  colorObjects.forEach(function(data) {
    $.post(`${requestUrl}/api/v1/colors`, data, function(data, status) {
    })
  })
}

const createColorObjects = (colors) => {
  let colorObjects = []
  colors.forEach(function(element) {
    let obj = {color: { value: `${element}`} }
    colorObjects.push(obj)
  })
  return colorObjects
}

module.exports = {topColor, postColors}
