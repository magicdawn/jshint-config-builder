'use strict';

module.exports = [{
  name: 'maxerr',
  defaultValue: 50,
}, {
  name: 'bitwise',
  defaultValue: true
}].map(x => {
  x.value = x.defaultValue;
  return x;
});