var categories = {
	sys_id: ["f9d2966fdbc22f007db49785ca9619c8", "009e30c8dba9e700ccd1b29a68961947"],
	counter: 0,
	createQuery: function createQuery() {
		var _this = this;

		this.sys_id.forEach(function (sys_id) {
			return console.log(_this.counter++ + '. Encoded query is: kb_knowledge_base=3c1a39680fde42004c9cfe6362050e4f' + '^kb_category=' + sys_id + '^workflow_state=published^active=true');
		});
	}
};
categories.createQuery();
