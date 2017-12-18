import {postTopColor} from "../response-handlers/color-responses.js"

const requestUrl = "https://color-swatch-api.herokuapp.com"

const topColors = () => {
  $.get(`${requestUrl}/api/v1/top_color`, function(data) {
    postTopColor(data)
  })
}
