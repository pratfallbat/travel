// var $ = require("jquery");
// var dummy = require("./dummy");

// var person = require("./person");
// now that o ur project supports es6
import Person from "./person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + "now have paid taxes");
  }
}

var john = new Person("John doe ", "blue");
john.greet();
var jane = new Adult("Jane smith ", "orange");
jane.greet();
jane.payTaxes();

// dummy.funcexample();
// console.log(dummy.examplefunc);
// $("h1").remove();
