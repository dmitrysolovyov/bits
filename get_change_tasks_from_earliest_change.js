//background script  2.	необходимо у ченджа самого молодого проверить, сколько чендж тасков
var gr = new GlideRecord('change_request');
gr.addQuery('requested_by',gs.getUserId());
gr.addQuery('active', true);
gr.orderByDesc('opened_at'); //Descending Order
gr.query();
if (gr.next()) {
    gs.print('Number of change request :' + gr.number);
    
    var chtsk = GlideRecord('change_task');
    chtsk.addQuery('change_request', gr.number);
    chtsk.query(); 
    gs.print(chtsk.getRowCount());
};
