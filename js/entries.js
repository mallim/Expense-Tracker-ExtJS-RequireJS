define(['extjs'], function(Ext) {
	var that = this;

	var entries = {
		load: function () {
			var data = [];
			var d = that.lscache.get('data');
			if (d !== null && d.length) {
				data = d;
			}
			else {
				data = [];
			}
			return data;
		},
		view: new Ext.Panel({
			title: 'Entries',
			margins: '3 3 3 3',
			bodyStyle: 'padding: 5px 5px 5px 5px',
			items: [
				new Ext.DataView({
					store: new Ext.data.ArrayStore({
						idProperty: 'expenseID',
						idIndex: 0,
						fields: [
							{name: 'expenseID', mapping: 0},
							{name: 'expenseType', mapping: 1},
							{name: 'expenseAmount', mapping: 2},
							{name: 'expenseDate', type: 'date', mapping: 3}
						]
					}),
					tpl: new Ext.XTemplate(
						'<table cellspacing="0" id="entriesTable"><thead><tr style="background:#eeeeee;"><td>Type</td><td>Amount</td><td>Date</td></tr></thead><tbody>',
						'<tpl for=".">',
							'<tr><td>{expenseType}</td><td>{expenseAmount}</td><td>{expenseDate}</td></tr>',
						'</tpl>',
						'</tbody></table>'
					),
					emptyText: 'No entries'
				})
			]
		})
	};
	return entries;
});