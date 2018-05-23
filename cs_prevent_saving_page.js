//Prevent saving page if assigned to is empty and description contains 'Details are at assignee side'

function onSubmit() {
   //Type appropriate comment here, and begin script below
   if(g_form.getValue('assigned_to') == '' && g_form.getValue('descriprion').indexOf('Details are at assignee side')){
	   g_form.setMandatory('assigned_to', true);
	   g_form.addErrorMessage('"' + g_form.getLabelOf('assigned_to') + '" field should be populated');
	   return false;
   }
}
