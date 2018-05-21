//background script  1.	необходимо вывести количество ченджей заасайненых на меня
(function() {
	var grChangeRequest = new GlideRecord('change_request'),
		number = 1,
		callerValue = '6816f79cc0a8016401c5a33be04be441';
	
	grChangeRequest.addQuery('assigned_to',callerValue);
	grChangeRequest.query();
	while (grChangeRequest.next()) {
		gs.print('Change request found: '+grChangeRequest.number);
		gs.print('Total amount of founded change requests:' + number++);
	}
})();
