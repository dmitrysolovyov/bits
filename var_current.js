var current=new GlideRecord('sc_req_item');

if (current.get('8b97a8a94f9a87c0ff0c119f0310c70b')) {
    gs.print(current.variables.u_manager_name.email);
} 
