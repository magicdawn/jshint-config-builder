'use strict';

var Ractive = require('ractive');
var $ = global.$ = global.jQuery = require('jquery');
require('bootstrap/js/tooltip');

Ractive.decorators.bsTooltip = function(node) {
  $(node).tooltip();
  return {
    teardown: function() {
      $(node).off('mouseenter.tooltip');
      $(node).off('mouseleave.tooltip');
    }
  };
};