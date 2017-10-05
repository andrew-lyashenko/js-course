/**
 * TIMING
 *
 * senior - 30min
 * middle - 45-60min
 * junior - infinity
 * you    - ?
 *
 * RUNTIME
 *
 * create index.html: include that script to page
 * or use (cli): node events.js
 */

'use strict';

var events = (function () {

  // public methods
  var api = {};

  // helper
  var classof = function (object) {
    return Object.prototype.toString.call(object).slice(8,-1).toLowerCase();
  }

  /**
   * add event listeners
   * @param  {String}               eventName
   * @param  {Function}             callback
   * @param  {null|Object|Function} context
   */
  api.on = function (eventName, callback, context) {

  };

  /**
   * call event listeners
   * @param  {String} eventName
   * @arguments 1...n
   */
  api.trigger = function (eventName) {

  };

  /**
   * remove event listeners
   * @param  {String} eventName
   */
  api.off = function (eventName) {

  };

  // fire!
  return api;

}());


// TEST 1
events.on('summ', function () {
  var args = Array.prototype.slice.call(arguments);
  var summ = args.reduce(function (a, b) {
    return a + b
  });
  console.log(summ);
});
console.log('-- TEST 1 --');
events.trigger('summ', 1, 2, 3, 4); // ...and more arguments
// => 10


// TEST 2
for (let i = 3; i--;) {
  events.on('secondEvent', function () {
    console.log('secondEvent', i);
  });
}
console.log('\n-- TEST 2 --');
events.trigger('secondEvent');
// => secondEvent 2
// => secondEvent 1
// => secondEvent 0


// SOME TEST OBJECT
var MyObject = function () {
  this.pi = 3.14;
  this.foo = function () {
    console.log('MyObject.foo -> ' + Math.round(Math.random() * 9))
  }
}
var tmp = new MyObject();


// TEST 3
events.on('thirdEvent', function () {
  console.log('pi', this.pi)
}, tmp);
console.log('\n-- TEST 3 --');
events.trigger('thirdEvent');
tmp.pi = Math.PI;
events.trigger('thirdEvent');
// => pi 3.14
// => pi 3.141592653589793


// TEST 4
events.on('fourthEvent', 'foo', tmp);
console.log('\n-- TEST 4 --');
events.trigger('fourthEvent');
events.off('fourthEvent');
events.trigger('fourthEvent');
// => MyObject.foo -> [0-9]
// Nothing happened (because we use events.off)


// TEST 5
// - remove 'use strict' and find error
// - found?
// - fix it now!
// - thinking fixed? =(o_O)=