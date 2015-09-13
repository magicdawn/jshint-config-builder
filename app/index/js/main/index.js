'use strict';

var $ = require('jquery');
var Ractive = require('ractive');
require('../ractive_ext');
require('bootstrap/js/modal');

// steps
var steps = require('../steps').map(function(s) {
  s.options.forEach(function(o, index) {
    if (s.multiselect) {
      s.selected = s.selected || [];
      if (o.value) {
        s.selected.push(index);
      }
    } else if (o.isDefault) {
      s.selected = index;
    }
  });
  return s;
});

// Ractive
Ractive.DEBUG = false;

/**
 * the page object
 */
global.Page = {
  run: function() {
    this._initQuery();
    this._initRact();
    this._initModalRact();
  },

  /**
   * query some el
   */
  _initQuery: function() {
    this.$modal = $('.main-modal');
  },

  /**
   * init the Ractive instance
   */
  _initRact: function() {
    var self = this;
    var ract = this.ract = global.ract = new Ractive({
      el: '.ractive-wrapper',
      template: require('app/index/view/client/jshint.html'),
      data: {
        currentStep: 0,
        steps: steps
      },

      computed: {
        config: function() {
          var steps = this.get('steps');
          var ret = {
            full: {},
            min: {}
          };

          steps.forEach(function(s) {
            // not multiselect
            if (!s.multiselect) {
              var selected = s.selected;
              var selectedOption = s.options[selected];
              var name = s.name;

              // input string to number
              if (selectedOption.input) {
                selectedOption.value = Number(selectedOption.value);
              }

              ret.full[name] = selectedOption.value;

              // since the default was selected
              // we ignore in `min`
              if (!selectedOption.isDefault) {
                ret.min[name] = selectedOption.value;
              }
              return;
            }

            s.options.forEach(function(o) {

              var name = o.name;
              var value = o.value;
              ret.full[name] = value;

              // o -> min

              // 有默认值, 还跟默认值不一样的
              if (typeof o.defaultValue !== 'undefined') {
                if (o.defaultValue !== o.value) {
                  ret.min[name] = value;
                }
              } else if (o.value) { // 没有默认值, true -> min
                ret.min[name] = o.value;
              }
            });
          });

          return ret;
        }
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
      var config = this.get('config');
      self._initModalRact();

      self.modalRact.set({
        configFull: JSON.stringify(config.full, null, '  '),
        configMin: JSON.stringify(config.min, null, '  ')
      });

      self.$modal.modal();
    });
  },

  /**
   * modal ract
   */
  _initModalRact: function() {

    // already have
    if (this.modalRact) {
      return;
    }

    // init
    this.modalRact = new Ractive({
      el: '.main-modal',
      template: require('app/index/view/client/modal.html')
    });
  }
};

// ok
global.Page.run();