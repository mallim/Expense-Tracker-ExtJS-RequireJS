define(['extjs', 'entries'], function(Ext, entries) {
	var nav = {
		change: function (item) {
			Ext.getCmp('bodyPanel').getLayout().setActiveItem(item);
		},
		links: [
			new Ext.Button({
				text: 'Add Expense',
				cls: 'nav-button',
				minWidth: 209,
				scale: 'medium',
				handler: function () {
					nav.change(0);
				}
			}),
			new Ext.Button({
				text: 'Entries',
				cls: 'nav-button',
				minWidth: 209,
				scale: 'medium',
				handler: function () {
					nav.change(1);
					var data = entries.load();
					entries.view.items.items[0].store.loadData(data);
				}
			}),
			new Ext.Button({
				text: 'Admin',
				cls: 'nav-button',
				minWidth: 209,
				scale: 'medium',
				handler: function () {
					nav.change(2);
				}
			})
		]
	};
	return nav;
});