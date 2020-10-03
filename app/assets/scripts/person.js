function Person(fname, fcolor) {
  this.name = fname;
  this.color = fcolor;
  this.greet = function () {
    console.log("Hlo" + this.name + "and " + this.color);
  };
}
// console.log("hello from peron js");

module.exports = Person;
