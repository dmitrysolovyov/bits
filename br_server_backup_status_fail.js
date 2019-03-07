(function executeRule(current, previous /*null when async*/ ) {

    var ci;
    var n;
    var chreq = new GlideRecord('task');
    //query for active tasks, assigned to backup group, which starts with 'CHG'
    chreq.addEncodedQuery('assignment_group=eee8777a0fa213009faf409ce1050ef7^active=true^numberSTARTSWITHCHG');
    chreq.query();
    while (chreq.next()) {
        n = chreq.number;
        ci = chreq.cmdb_ci;

        var changeTask = new GlideRecord('change_task');
        changeTask.addQuery('change_request', chreq.sys_id);
        changeTask.addQuery('ci_item', ci);
        changeTask.query();
        if (changeTask.next()) {

            changeTask.cmdb_ci = ci;
            changeTask.short_description = 'Affected Configuration Item: ' + ci.getDisplayValue();
            changeTask.description = 'Affected Configuration Item: ' + ci.getDisplayValue();
            changeTask.update();

        } else {

            changeTask.initialize();
            changeTask.change_request = chreq.sys_id;
            changeTask.cmdb_ci = ci;
            changeTask.short_description = 'Affected Configuration Item: ' + ci.getDisplayValue();
            changeTask.description = 'Affected Configuration Item: ' + ci.getDisplayValue();
            changeTask.insert();

        }
    }

})(current, previous);
