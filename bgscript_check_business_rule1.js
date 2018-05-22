//^bgscript to check	
(function() {
	var gr = new GlideRecord('incident'),
		caller = '46d44a23a9fe19810012d100cca80666';
	
	gr.addQuery('caller_id', caller); //инциденты, созданные коллером текущего инцидента
	gr.orderBy('opened_at'); //сортируем по времени
	gr.query();
	while (gr.next()) {
		gs.print(gr.getDisplayValue('caller_id'));//выводим колера
		gs.print(gr.getValue('opened_at'));// выводим время создания
		
		var inc = GlideRecord('incident');
		inc.orderBy('opened_at'); //сортируем по времени
		inc.query();
		if (inc.next()) {
			gs.print(inc.getValue('opened_at'));// выводим время создания
			gs.print(inc.getValue('number'));// выводим время создания
		};
		gr
	//gr.update();
	};
})();
