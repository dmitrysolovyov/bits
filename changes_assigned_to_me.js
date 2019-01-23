//background script  1.	необходимо вывести количество ченджей заасайненых на меня
var gr = new GlideRecord('change_request');
gr.addQuery('assigned_to',gs.getUserID());
gr.query();
var a = [];
while(gr.next()) {
    a.push(gr.number.toString());
}
gs.print('Total amount of founded change requests: ' + gr.getRowCount());
if(a.length != 0){
    gs.print(a);
}
