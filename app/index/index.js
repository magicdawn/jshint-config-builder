/**
 * module dependencies
 */
var router = module.exports = require('impress-router')();
var render = require('predator-kit').getRender(__dirname);

router.get('/', function * () {
  this.type = 'html';
  this.body = yield render('index');
});