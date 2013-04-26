define(['extjs'], function(Ext) {
	var that = this;
	Ext.QuickTips.init();

	var add = {
		submitForm: function (expenseType, expenseAmount, expenseDate) {
			var data = [];
			var d = that.lscache.get('data');
			if (d !== null && d.length) {
				data = d;
			}
			else {
				data = [];
			}
			data.push([add.guid(), expenseType, expenseAmount, expenseDate]);
			that.lscache.set('data', data);
			add.toast.msg('', '<p>Expense added</p>');
			add.form.form.reset();
		},
		guid: function () {
			var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
			return guid;
		},
		toast: function () {
			var msgCt;
			function createBox (t, s) {
				return [
					'<div class="msg">',
					'<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
					'<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
					'<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
					'</div>'
				].join('');
			}
			return {
				msg : function (title, format) {
					if(!msgCt){
						msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div',style:'position:absolute;z-index:10000'}, true);
					}
					msgCt.alignTo(document, 't-t');
					var s = String.format.apply(String, Array.prototype.slice.call(arguments, 1));
					var m = Ext.DomHelper.append(msgCt, {html:createBox(title, s)}, true);
					m.slideIn('t').pause(2).ghost("t", {remove:true});
				}
			};
		}(),
		form: new Ext.form.FormPanel({
			title: 'New Expense',
			margins: '3 3 3 3',
			bodyStyle: 'padding: 5px 5px 5px 5px',
			buttonAlign: 'left',
			boxMaxHeight: 165,
			boxMaxWidth: 280,
			items: [
				this.expenseType = new Ext.form.ComboBox({
					id: 'expenseType',
					name: 'expenseType',
					fieldLabel: 'Type',
					store: new Ext.data.ArrayStore({
						id: 0,
						fields: [
							'expenseID',
							'expenseText'
						],
						data: [['Food', 'Food'], ['Gas', 'Gas'], ['Misc', 'Misc']]
					}),
					valueField: 'expenseID',
					displayField: 'expenseText',
					typeAhead: false,
					mode: 'local',
					forceSelection: true,
					allowBlank: false
				}),
				this.expenseAmount = new Ext.form.NumberField({
					id: 'expenseAmount',
					name: 'expenseAmount',
					type: 'number',
					fieldLabel: 'Amount',
					allowBlank: false,
					width: 165
				}),
				this.expenseDate = new Ext.form.DateField({
					id: 'expenseDate',
					name: 'expenseDate',
					fieldLabel: 'Date',
					allowBlank: false,
					width: 165
				})
			],
			buttons: [
				new Ext.Button({
					text: 'Save Expense',
					scale: 'large',
					handler: function () {
						var et = add.form.items.get('expenseType');
						var ea = add.form.items.get('expenseAmount');
						var ed = add.form.items.get('expenseDate');
						if (et.isValid() && ea.isValid() && ed.isValid()) {
							add.submitForm(et.getValue(), ea.getValue(), ed.getValue());
						}
						else {
							Ext.Msg.alert('Error', 'Please correct the errors.');
						}
					}
				}),
				new Ext.Button({
					text: 'Reset',
					scale: 'large',
					handler: function () {
						add.form.form.reset();
					}
				})
			]
		})
	};

	return add;
});