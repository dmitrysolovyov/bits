var DEBUG = true;
var LOG_PREFIX = "[DEBUG]";
var log = function(){
    if(DEBUG){
        var args = Array.prototype.slice.call(arguments);
        args.unshift(LOG_PREFIX + " ");
        console.warn.apply(console, args);
    }
}
function makeID() {
    var id = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 30; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}
function createUserRecord(input) {
    var o = new Object();
    o.sys_id = makeID();
    if(input.userEmail){
        log('userEmail : '+input.userEmail);
        o.email = input.userEmail.toString();
    }
    if(input.userFirstname){
        log('userFirstname : '+input.userFirstname);
        o.firstname = input.userFirstname.toString();
    }
    if(input.userLastname){
        log('userLastname : '+input.userLastname);
        o.lastname = input.userLastname.toString();
    }
    return o;
}
var myInput = {
    'userEmail':'dmitry.solovyov@email.com',
    'userFirstname':'Dmitry',
    'userLastname':'Solovyov'
};
var the_input = createUserRecord(myInput);
var usr = class{
    getUserID(){ 
       return the_input.sys_id;
    };
    getFirstName(){
        return the_input.firstname;
    };
    getLastName(){
        return the_input.lastname;
    };
    getFullName(){
        return the_input.firstname+' '+the_input.lastname;
    };
    getEmail(){
        return the_input.email;
    }
}
var u = new usr();
log('user id: '+ u.getUserID() +" "+ u.getFullName() +" "+ u.getEmail() );
