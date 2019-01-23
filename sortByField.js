var users = [
    {
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
    }
];
  
function sortByField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}
var a = [];
users.sort(sortByField('name'));
users.forEach(function(user) {
    a.push(user.name.toString());
	return a;
});

// //sort By age
// users.sort(sortByField('age'));
// users.forEach(function(user) {
//   console.log( user.name );
// });

var o = Object.assign({}, a);
console.warn(o);
