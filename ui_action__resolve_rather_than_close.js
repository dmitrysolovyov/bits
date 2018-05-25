//the default process was to close the incidents when the problem was closed, but we also wanted to have them resolved rather than closed.
//Here is the UI action we created to accomplish that.
	var incident = new GlideRecord('incident');
	incident.addQuery('problem_id', "=", current.sys_id);
	incident.addQuery('incident_state', "=", 3);
	
	incident.query();
	while(incident.next()){
		incident.incident_state.setValue(6);
		incident.active.setValue(false);
		//adding code to write a work note to resolved ticket
		incident.work_notes = 'Incident ' + incident.number + ' resolved based on closure of problem ' + current.number;
		incident.close_notes = current.close_notes;
		incident.update()
		gs.print('Incident ' + incident.number + ' resolved based on closure of problem ' + current.number);
	}
