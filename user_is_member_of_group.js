III.3.	Создать client script, который выводит фразу ‘You are a member of group (имя группы, если пользователь – член одной из групп из пункта I.2) and you are located in (имя локации)’ . В случае, если пользователь не является членом одной из групп из пункта I.2, сообщение должно гласить ‘you are located in (имя локации)’. Скрипт отрабатывает при загрузке страницы

=======================================
//client script
=======================================

function onLoad() {

	//var groups = []; // array to store group names
	// new GlideAjax object referencing name of AJAX script include 
	var ga = new GlideAjax('Ajax_GetUserGroups');
	ga.addParam('sysparm_name','getUserGroups');//sysparm_name is reserved for the name of the script include function to call
	ga.addParam('sysparm_group', g_user.userID);//This is a parameter that is passed through the URL of the AJAX call. 
	ga.getXML(ajaxResponse); //This is the function that asynchronously waits for a response. 
	
	var uLocation = new GlideAjax('ajax_getUserLocation');
	uLocation.addParam('sysparm_name','getUserLoc');
	uLocation.addParam('sysparm_user', g_user.userID);//This is a parameter that is passed through the URL of the AJAX call. 
	uLocation.getXML(ajaxCallback); 
	
}
function ajaxResponse(response) {
	var answer = response.responseXML.documentElement.getAttribute("answer"); //Get answer from server
   //g_form.setValue('short_description', answer);
	if(answer != null){
		g_form.addInfoMessage('You are a member of group ' + answer + '. ');
	}
}
function ajaxCallback(response) {
	var answer = response.responseXML.documentElement.getAttribute("answer"); //Get answer from server
   //g_form.setValue('short_description', answer);
	g_form.addInfoMessage('You are located in: ' + answer + '.');
}
	
	
=======================================	
//Script include: Ajax_GetUserGroups
=======================================
var Ajax_GetUserGroups = Class.create();
Ajax_GetUserGroups.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	
	getUserGroups: function() { // Declare a function inside our class.
		var grp = this.getParameter('sysparm_group'); //Get the parameter we passed in from the client script
		//var groups = [];
		var groups;
		
		var gr = new GlideRecord('sys_user_grmember');	
			gr.addEncodedQuery('group=1528e1780f5213009faf409ce1050ef5^ORgroup=4e68a9b00f5213009faf409ce1050e06^ORgroup=2a88e1780f5213009faf409ce1050ef9');
			gr.addQuery('user', grp); // query for current user
			gr.query();

			while(gr.next()){
				//groups.push(gr.group.name.toString()); //returns org.mozilla.javascript.NativeArray@2a6fa3 wtf?
				groups = groups + ', ' + gr.group.name;
			}	
		
		return groups; //return an answer from server
	},
    type: 'Ajax_GetUserGroups'
});

=======================================
//Script include: ajax_getUserLocation
=======================================
var ajax_getUserLocation = Class.create();
ajax_getUserLocation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	getUserLoc: function() { 
		var sysUser = this.getParameter('sysparm_user'); 
		var uLoc;
		var gr = new GlideRecord('sys_user');
			gr.addQuery('sys_id', sysUser); // query for current user using parameter from client
			gr.query();
			if(gr.next()){
				//gs.log('@@@Test NAME:' + sysUser);//tracing parameter that passed using ajax OK
				uLoc = gr.location.name; //here we go: some location
				//gs.log('@@@Test LOCATION:' + uLoc);//tracing uLoc OK
			}
		return uLoc; //return an answer from server
	},
    type: 'ajax_getUserLocation'
});
