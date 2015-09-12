'use strict';

/**
 * 自定义的
 * 如 maxerr indent
 * options = [ {defaultValue}, { value: defaultValue, input = true } ]
 *
 *
 * true or false
 * options = [ true, false ]
 *
 * 多选一
 * quote
 * options = [ true, false, single, double ]
 *
 *
 * 然后多选的
 * Environments multiselect
 * options
 *
 * options = [
 * 	{
 * 		value: 值,
 * 		isDefault: 是否是默认
 * 		input: 是否应输入
 * 		desc: 描述
 * 	}
 * ]
 */


module.exports = [{
  name: 'maxerr',
  options: [{
    value: 50,
    isDefault: true,
    desc: 'hello'
  }, {
    value: 50,
    input: true
  }]
}, {
  name: 'bitwise',
  options: [{
    value: true,
    isDefault: true,
    desc: 'true: Prohibit bitwise operators (&, |, ^, etc.)'
  }, {
    value: false
  }]
}, {
  name: 'camelcase',
  options: [{
    value: true,
    desc: 'true: Identifiers must be in camelCase'
  }, {
    value: false,
    isDefault: true
  }]
}, {
  name: 'curly',
  options: [{
    value: true,
    desc: 'true: Require {} for every new block or scope',
    isDefault: true
  }, {
    value: false
  }]
}, {
  name: 'eqeqeq',
  options: [{
    value: true,
    desc: 'true: Require triple equals (===) for comparison',
    isDefault: true
  }, {
    value: false
  }]
}];