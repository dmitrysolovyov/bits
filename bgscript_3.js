//background script  3.	для всех активных чендж тасков ченджа заасайненго на меня, 
//номер которого заканчивается на 5, в шорт дескрипшн написать Скоро Лето!
var gr = new GlideRecord('change_request');
gr.addQuery('assigned_to', gs.getUserID());
gr.addQuery('number', 'ENDSWITH', '5');
gr.query();
while (gr.next()){
    gs.print('total: '+ gr.getRowCount());
    var ch = GlideRecord('change_task');
    ch.addQuery('change_request', gr.sys_id);
    ch.addQuery('active', true);
    ch.query();
    while (ch.next()) {
        ch.short_description += 'Скоро лето! ';
        ch.update();
        gs.print('ch.short_description: '+ch.short_description);
    };
};
