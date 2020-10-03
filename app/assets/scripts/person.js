class Person {
  constructor(fname, fcolor) {
    this.name = fname;
    this.color = fcolor;
  }
  // only in es6

  greet() {
    console.log(
      "Hello: " + this.name + "   and your fav color is  " + this.color
    );
  }
}

// module.exports = Person; // es5 way
export default Person;
