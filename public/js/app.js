require.config({
	paths: {
		extjs: '//cdn.sencha.io/ext-3.4.0/ext-all',
		'ext-base': '//cdn.sencha.io/ext-3.4.0/adapter/ext/ext-base'
	},
	shim: {
		extjs: {
			deps: ['ext-base'],
			exports: 'Ext'
		}
	}
});

require(['extjs', 'lib/lscache', 'nav', 'add', 'entries', 'admin', 'lib/domReady!'],
function (Ext, lscache, nav, add, entries, admin, domReady) {
	Ext.BLANK_IMAGE_URL = '//cdn.sencha.io/ext-3.4.0/resources/images/default/s.gif';

	new Ext.Viewport({
		layout:'border',
		items:[
			{
				region: 'north',
				margins: '0 0 0 0',
				contentEl: 'topContent',
				border: false,
				split: false,
				height: 54,
				collapsible: false
			},
			{
				region: 'west',
				margins: '3 3 3 3',
				split: false,
				width: 205,
				autoScroll: true,
				items: nav.links
			},
			{
				id: 'bodyPanel',
				region: 'center',
				margins: '3 3 3 0',
				bodyStyle: 'padding: 3px 3px 3px 3px',
				contentEl: 'mainContent',
				autoScroll: true,
				layout: 'card',
				activeItem: 0,
				items: [add.form, entries.view, admin.resetStore]
			}
		]
	});

});