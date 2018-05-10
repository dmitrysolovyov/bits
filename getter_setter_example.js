function User() {
	var firstName, surname;
	
	//sets firstname
	this.setFirstName = function(newFirstName) {
		firstName = newFirstName;
	};
	//sets surname
	this.setSurname = function(newSurname) {
		surname = newSurname;
	};
	//gets full name
	this.getFullName = function(){
		return firstName + ' ' + surname;
	};
}

var user = new User();
user.setFirstName("Karl");
user.setSurname("Franz");

alert( user.getFullName() ); // Karl Franz
