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
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 30; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
var sys_id = makeID();
var firstname = "Dmitry";
var lastname = "Azgarat";
var email = 'azgarat@example.com';
var usr = class{
    getUserID(){ 
       return sys_id;
    };
    getFirstName(){
        return firstname;
    };
    getLastName(){
        return lastname;
    };
    getFullName(){
        return firstname+' '+lastname;
    };
    getEmail(){
        return email;
    }
}
function createUserRecord() {
    var o = new Object();
    o.sys_id = makeID();
    if(input){
        
    }
}
var user_info = new Object();
user_info.sys_id = new usr().getUserID();
user_info.name = new usr().getFullName();
user_info.email = new usr().getEmail();
log('user id: '+ user_info.sys_id +" "+ user_info.name +" "+ user_info.email );
