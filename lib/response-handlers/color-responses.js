var $ = require('jQuery')

const postTopColor = (data) => {
  let color = data["value"]
  $(".top-color").text(color)
}

module.exports = {postTopColor}
