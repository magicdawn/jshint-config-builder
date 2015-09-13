'use strict';

var Ractive = require('ractive');
global.$ = global.jQuery = require('jquery');
require('bootstrap/js/tooltip');

/* globals $ */

Ractive.decorators.bsTooltip = function(node) {
  $(node).tooltip();
  return {
    teardown: function() {
      $(node).off('mouseenter.tooltip');
      $(node).off('mouseleave.tooltip');
    }
  };
};