'use strict';

var $ = require('jquery');
var Ractive = require('ractive');
require('../ractive_ext');

// steps
var steps = require('../steps').map(function(x) {
  x.options.forEach(function(o, index) {
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
    var ract = this.ract = global.ract = new Ractive({
      el: '.ractive-wrapper',
      template: require('app/index/view/client/jshint.html'),
      data: {
        currentStep: 0,
        steps: steps
      }
    });

    ract.on('previous', function() {
      var currentStep = this.get('currentStep');
      currentStep -= 1;
      if (currentStep >= 0) {
        this.subtract('currentStep', 1);
      }
    });

    ract.on('next', function() {
      var currentStep = this.get('currentStep');
      var len = this.get('steps').length;
      currentStep += 1;
      if (currentStep >= len) {
        this.fire('submit');
      } else {
        this.add('currentStep', 1);
      }
    });

    ract.on('submit', function() {
      var steps = this.get('steps');
      var ret = {
        full: {},
        min: {}
      };

      steps.forEach(function(s) {
        var selected = s.selected;
        var selectedOption = s.options[selected];
        var name = s.name;

        ret.full[name] = selectedOption.value;

        // since the default was selected
        // we ignore in `min`
        if (!selectedOption.isDefault) {
          ret.min[name] = selectedOption.value;
        }
      });

      console.log(ret);
      return ret;
    });
  },
};

// ok
global.Page.run();