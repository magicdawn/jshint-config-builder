'use strict';

var $ = require('jquery');
var Ractive = require('ractive');

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
        steps: require('../steps')
      }
    });
  },
};

// ok
global.Page.run();