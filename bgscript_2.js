//background script  2.	необходимо у ченджа самого молодого проверить, сколько чендж тасков
(function() {
	
	var gr = new GlideRecord('change_request'),
		callerValue = '6816f79cc0a8016401c5a33be04be441';
		
	gr.addQuery('active', true);
	gr.orderByDesc('opened_at'); //Descending Order
	gr.query();
	if (gr.next()) {
		gs.print('Number of change request (this):' + gr.number);
		
		var chngTask = GlideRecord('change_task');
		chngTask.addQuery('change_request', gr.number);
		chngTask.query(); 
		gs.print(chngTask.getRowCount());
	};
})();
