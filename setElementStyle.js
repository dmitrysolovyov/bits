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


//Servicenow g_form adapted looks similar:
function setElementStyle(field_name, propertyObject) {
    var c = g_form.getControl(field_name);
    for (var property in propertyObject) {
        c.style[property] = propertyObject[property];
    }
}
// call example:
// setElementStyle("description", {
//     "background":"#2c2c39",
//     "color":"greenyellow",
//     "font-size":"larger"
// });
