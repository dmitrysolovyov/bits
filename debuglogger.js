const DEBUG = true; // Enable or Disable logging
const LOG_PREFIX = "[DEBUG]";
var log = function(){
    if(DEBUG){
        //console.log.apply(console, arguments);
        var args = Array.prototype.slice.call(arguments);           // 1. Convert args to a normal array
        args.unshift(LOG_PREFIX + " ");                             // 2. Add a log prefix
        console.log.apply(console, args);                           // 3. Pass arguments to console.log
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
