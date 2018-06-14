//================================================
//BGscript: delete worknotes / comments
//================================================

var sjfGR = new GlideRecord('sys_journal_field')
var queStr = 'element_id=89b362560f1213009faf409ce1050ea0'; //sys_id записи (например инцидента)
sjfGR.addEncodedQuery(queStr);
sjfGR.query();
while(sjfGR.next()){
	sjfGR.deleteRecord();
}
gs.print(sjfGR.getRowCount() + ' related record(s) was deleted in sys_journal_field')

var saGR = new GlideRecord('sys_audit')
var queStr = 'documentkey=89b362560f1213009faf409ce1050ea0';
saGR.addEncodedQuery(queStr);
saGR.query();
while(saGR.next()){
	saGR.deleteRecord();
}
gs.print(saGR.getRowCount() + ' related record(s) was deleted in sys_audit')

var shGR = new GlideRecord('sys_history_set')
var queStr = 'id=89b362560f1213009faf409ce1050ea0';
shGR.addEncodedQuery(queStr);
shGR.query();
while(shGR.next()){
	shGR.deleteRecord();
}
gs.print(shGR.getRowCount() + ' related record(s) was deleted in sys_history_set')
