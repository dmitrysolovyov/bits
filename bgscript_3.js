//background script  3.	для всех активных чендж тасков ченджа заасайненго на меня, номер которого заканчивается на 5, в шорт дескрипшн написать Скоро Лето!
(function() {
	
	var gr = new GlideRecord('change_request'),
		currentUser = '6816f79cc0a8016401c5a33be04be441';
	
	gr.addQuery('assigned_to', currentUser);//проверяем что заасайнен на меня
	gr.addQuery('number', 'ENDSWITH', '5');//проверяем что номер заканчивается на 5
	gr.query();
	if (gr.next()){
		gs.print('Total amount of change requests:' + gr.getRowCount());//для проверки выводим количество чейнджей
		gs.print(gr.getValue('number'));//выводим номер чейнджа 
		
		var chngTask = GlideRecord('change_task');
		chngTask.addQuery('active', true);//активные чендж таски
		chngTask.query();

		if (chngTask.next()) {
			chngTask.short_description += 'Скоро лето! ';

			chngTask.update();
			gs.print(chngTask.getValue('number'));//выводиncz номер таска
			gs.print(chngTask.getValue('short_description'));
		};
		
	};
})();
