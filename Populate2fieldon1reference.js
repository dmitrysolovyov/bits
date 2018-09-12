/*
Populate Category and Subcategory fields on Category/Subcategory Search selection change
*/
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	
	
	var gr = new GlideRecord("incident");
	gr.addQuery("sys_id",g_form.getValue("u_category_search"));
	alert("the sysid is" +  g_form.getValue("u_category_search"));
	alert("Line 13");	  
	gr.query(setResponse);
	
	function setResponse(set){
		alert("Line 17");	
		while(set.next()){
			alert("Line 19");	
			g_form.setValue("category",set.category);
			g_form.setValue("subcategory",set.subcategory);
			g_form.setValue("u_category_search",set.sysid,"test");
		}
	}

}
