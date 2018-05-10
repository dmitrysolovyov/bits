var users = [{
  name: "Melgorzata",
  surname: 'Sulikowski',
  age: 25
}, {
  name: "Christian",
  surname: 'Marnell',
  age: 45
}, {
  name: "Pepe",
  surname: 'Frog',
  age: 20
}];

function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
});
