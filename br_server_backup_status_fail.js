новое поле на таблице server  +
поле backup_status +
если на сервере в поле статус содержится fail +
нужно найти все чейнджи в которых affected CI есть этот сервер
и создать task в описании сnатус fail и название сервера

ищем по серверам фэйл -> глайд рекорд -> ищем таблицу аффктед -> третим создать таск

//background script
var gr = new GlideRecord('cmdb_ci_server');
	gr.addQuery('backup_status', 'fail'); 
	gr.query();
	while(gr.next()){
		var serverID = gr.sys_id;
		var name = gr.name;
		var bs =  gr.u_backup_status;
		if(bs.indexOf('fail')> -1){ //lookup for all servers wich bs contains 'fail'
		
			//optional: tracing
			gs.print('@@@ server ' + name + ' (' + serverID + ') ' + 'backup status: ' +  bs); 
			
			var chreq = new GlideRecord('task_ci');
				chreq.addQuery('ci_item', serverID);
				chreq.query();
				while(chreq.next()){
					var n = chreq.task; //Change Request ID for related task
					var reqnum = chreq.task.number; //Change Request number
					
					//optional: tracing Change Request ID 
					gs.print('Change ID: ' + n); 
					//optional: tracing Change Request number
					gs.print('Change number: ' + reqnum);

					var task = new GlideRecord('change_task');
						task.initialize();
						task.change_request = n
						task.short_description = 'backup status: ' +  bs + ' @ ' + name;
						task.description = 'backup status: ' +  bs + ' @ ' + name;
						task.insert();
						gs.print('task created ' + task.number + '. backup status: ' +  bs + ' @ ' + name);

				}
		}
	}

теперь нужно переделать это в бизнес руль с некоторыми дополнениями: 
когда в бекап статус проставляется fail, 
мы должны найти все активные ченджи на команде бекап с этим сервером, и если там есть таск, то обновить его с информацией о сервере, а если таска нет - создать.	

//background script
var ci;
var n;
var chreq = new GlideRecord('task');
	//query for active tasks, assigned to backup grpoup, which starts with 'CHG'
chreq.addEncodedQuery('assignment_group=eee8777a0fa213009faf409ce1050ef7^active=true^numberSTARTSWITHCHG');
chreq.query();
while(chreq.next()){
	n = chreq.number;
	ci = chreq.cmdb_ci;
	
	gs.log('@@@ Related Change Request number ' + n);
	
	var changeTask = new GlideRecord('change_task');
	changeTask.addQuery('change_request', chreq.sys_id);
	changeTask.addQuery('ci_item', ci);
	changeTask.query();
	if (changeTask.next()){
		
		changeTask.cmdb_ci = ci;
		changeTask.short_description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.update();
		
		gs.log('Task updated: ' + changeTask.number + ' Affected Configuration Item: ' +  ci.getDisplayValue());	
	} else 
	{
		
		changeTask.initialize();
		changeTask.change_request = chreq.sys_id;
		changeTask.cmdb_ci = ci;
		changeTask.short_description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.insert();
		
		gs.log('Task created: ' + changeTask.number + ' Affected Configuration Item: ' + ci.getDisplayValue());
	}
}

//business rule
(function executeRule(current, previous /*null when async*/) {
	
var ci;
var n;
var chreq = new GlideRecord('task');
	//query for active tasks, assigned to backup grpoup, which starts with 'CHG'
chreq.addEncodedQuery('assignment_group=eee8777a0fa213009faf409ce1050ef7^active=true^numberSTARTSWITHCHG');
chreq.query();
while(chreq.next()){
	n = chreq.number;
	ci = chreq.cmdb_ci;
	
	var changeTask = new GlideRecord('change_task');
	changeTask.addQuery('change_request', chreq.sys_id);
	changeTask.addQuery('ci_item', ci);
	changeTask.query();
	if (changeTask.next()){
		
		changeTask.cmdb_ci = ci;
		changeTask.short_description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.update();
			
	} else 
	{
		
		changeTask.initialize();
		changeTask.change_request = chreq.sys_id;
		changeTask.cmdb_ci = ci;
		changeTask.short_description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.description = 'Affected Configuration Item: ' +  ci.getDisplayValue();
		changeTask.insert();
		
	}
}
	
})(current, previous);
