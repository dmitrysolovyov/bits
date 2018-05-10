function User(firstName, lastName) {
  // additional variable
  var phrase = "Nice to meet you";

  // additional nested(вложенная) function
  function getFullName() {
      return firstName + " " + lastName;
    }

  this.sayHi = function() {
    alert( phrase + ", " + getFullName() ); // usage
  };
}

var vasya = new User("Pepe", "Frog");
vasya.sayHi(); // Nice to meet you, Pepe Frog
