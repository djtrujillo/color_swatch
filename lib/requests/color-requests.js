import {postTopColor} from "../response-handlers/color-responses.js"
var $ = require('jQuery');

const requestUrl = "https://color-swatch-api.herokuapp.com"

const topColor = () => {
  $.get(`${requestUrl}/api/v1/top_color`, function(data) {
    postTopColor(data)
  })
}

module.exports = {topColor}
