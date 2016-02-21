/**
 * Person
 * Базовый прототип
 * Будем его испольовать в качестве прототипа для других объектов
 */
var Person = {
  constructor: function (name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  me: function () {
    return "My name is " + this.name + ", i'm " + this.age + ' years old';
  }
}
// console.log(Person.constructor('John', 30).me())
// console.log(Person.constructor('Kate', 25).me())



/**
 * WebDeveloper
 * Создаем новый объект используя Object.create
 * В качестве прототипа задаем Person
 */
var WebDeveloper = Object.create(Person);

/**
 * Расширяем конструктор
 * Сначала вызываем конструктор Person
 * Делаем это для того чтобы не потерять часть функционала
 * А также чтобы не дублировать его в конструкторе WebDeveloper
 */
WebDeveloper.constructor = function (name, age, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills;
  return this;
}

/**
 * Добавляем тестовый метод
 * Который будет принадлежать только объекту WebDeveloper
 */
WebDeveloper.develop = function () {
  return this.skills;
}



/**
 * Тестируем
 */
var developer = Object.create(WebDeveloper).constructor('Mike', 29, ['php','node.js', 'css3']);

console.log(developer)
console.log(developer.name)
console.log(developer.me());
console.log(developer.develop());