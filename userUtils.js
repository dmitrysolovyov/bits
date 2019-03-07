var DEBUG = true;
var LOG_PREFIX = "[userUtils]";
var log = function(){
    if(DEBUG){
        var args = Array.prototype.slice.call(arguments);
        args.unshift(LOG_PREFIX + " ");
        console.warn.apply(console, args);
    }
}
function makeID(){
    var id = "";
    var possibleChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 30; i++){
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return id;
}

function User(firstName, lastName, email) {
    this.sys_id = makeID();

    this.getUserID = function(){
        return this.sys_id
    };
    this.getFirstName = function(){
        var f;
        f = firstName || "";
        return f
    };
    this.getLastName = function(){
        var l;
        l = lastName || "";
        return l
    };
    this.getFullName = function(){
        return this.getFirstName() +' '+ this.getLastName();
    };
    this.getEmail = function(){
        var e;
        e = email || "";
        return e
    };
    //for test case
    this.getInfo = function(){
        log('Name: ' + this.getFullName() +'; sys_id: '+ this.getUserID() +'; email: '+ this.getEmail());
    }
  }
  //usage
  var frog = new User("Pepe", "Frog", "pepe.frog@email.com");
  frog.getInfo();//[userUtils]  Name: Pepe Frog; sys_id: h2fe9apwds7nr0c8pcmxwt327kfqz3; email: pepe.frog@email.com
