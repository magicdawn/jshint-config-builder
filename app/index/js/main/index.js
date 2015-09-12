'use strict';

var $ = require('jquery');
var Ractive = require('ractive');
require('../ractive_ext');

// steps
var steps = require('../steps').map(x => {
  x.options.forEach((o, index) => {
    if (o.isDefault) {
      x.selected = index;
    }
  });
  return x;
});

/**
 * the page object
 */
global.Page = {
  run: function() {
    this._initRact();
  },

  /**
   * init the Ractive instance
   */
  _initRact: function() {
    this.ract = global.ract = new Ractive({
      el: '.ractive-wrapper',
      template: require('app/index/view/client/jshint.html'),
      data: {
        currentStep: 0,
        steps: steps
      }
    });
  },
};

// ok
global.Page.run();