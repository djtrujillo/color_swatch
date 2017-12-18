import {postTopColor} from "../response-handlers/color-responses.js"
var $ = require('jQuery');

const requestUrl = "https://color-swatch-api.herokuapp.com"

const topColor = () => {
  $.get(`${requestUrl}/api/v1/top_color`, function(data) {
    postTopColor(data)
  })
}

const postColors = (colors) => {
  let colorObjects = []
  colors.forEach(function(element) {
    let obj = {color: { value: `${element}`} }
    colorObjects.push(obj)
  })
  console.log(colorObjects)
  // colors.forEach(
  //   $.post(`${requestUrl}/api/v1/colors`, function( data ) {
  //     $( ".result" ).html( data );
  //   });
  // )
}

module.exports = {topColor, postColors}
