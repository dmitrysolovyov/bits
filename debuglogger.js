var DEBUG = true; // true or false to Enable/Disable logging
var LOG_PREFIX = "[DEBUG]";
var log = function(){
    if(DEBUG){
        var args = Array.prototype.slice.call(arguments);// 1. Convert args to a normal array
        args.unshift(LOG_PREFIX + " ");// 2. Add a log prefix to the beginning of the array
        console.log.apply(console, args);// 3. Pass arguments to console.log
    }
}

//E.G.
// function getMultipliedValue(p1, p2) {
//     return p1 * p2;
// }
// var digit = 4;
// var fieldValue = getMultipliedValue(digit, 3);
// log('fieldValue : '+ fieldValue);

//if DEBUG == true, 
//will return the following 
//"[DEBUG]  fieldValue : 12";


//For server side
var DEBUG = true;
var LOG_PREFIX = "[DEBUG]";
var log = function(f){
    if(DEBUG){
        var info = LOG_PREFIX + " "+ f;
        gs.addInfoMessage(info);
    }
};
