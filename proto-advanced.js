var Person = function (name) {
  this.name = name;
};

Person.prototype.me = function () {
  return "My name is " + this.name;
}



var Developer = function (name, skills) {
  Person.apply(this, arguments);
  this.skills = skills || [];
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;



var developer = new Developer('Andrew', ['php', 'node.js']);
console.log(developer.name);
console.log(developer.skills);
console.log(developer.me())
console.log(developer instanceof Developer);
console.log(developer instanceof Person);



/**
 * classof
 */
var classof = function (object) {
  return Object.prototype.toString.call(object).slice(8,-1);
}

console.log(classof( 123 ));
console.log(classof( 'some string' ));
console.log(classof( function(){} ));
console.log(classof( {} ));
console.log(classof( [] ));
console.log(classof( /w/ ));
console.log(classof( null ));
console.log(classof( undefined ));
