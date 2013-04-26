define(['extjs', 'nav'], function(Ext, nav) {
	var that = this;
	Ext.QuickTips.init();

	var admin = {
		resetStore: new Ext.Button({
			text: 'Reset Data',
			scale: 'large',
			boxMaxHeight: 50,
			boxMaxWidth: 100,
			handler: function () {
				that.lscache.flush();
				nav.change(0);
			}
		})
	};

	return admin;
});