function setElementStyle(objectID, propertyObject){
    var elem = document.getElementById(objectID);
    for (var property in propertyObject){
        elem.style[property] = propertyObject[property];
    }
}
// call example:
// setElementStyle('newLink', {
//     'color':'greenyellow',
//     'background':'rgba(0,0,0,0.75)'}
// );
