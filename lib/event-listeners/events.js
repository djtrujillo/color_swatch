import {topColor} from '../requests/color-requests'
var $ = require('jQuery');

const onLoad = $(document).ready(function() {
  topColor()
})

module.exports = {onLoad}
