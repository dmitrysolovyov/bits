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
    'userEmail':'dmitry.azgarat@email.com',
    'userFirstname':'Dmitry',
    'userLastname':'Azgarat'
};
var current = createUserRecord(myInput);
var usr = class{
    getUserID(){ 
       return current.sys_id;
    };
    getFirstName(){
        return current.firstname;
    };
    getLastName(){
        return current.lastname;
    };
    getFullName(){
        return current.firstname+' '+current.lastname;
    };
    getEmail(){
        return current.email;
    }
}
log('user id: '+ new usr().getUserID() +" "+ new usr().getFullName() +" "+ new usr().getEmail() );
