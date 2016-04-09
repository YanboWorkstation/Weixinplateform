var port = Ext.create('Ext.container.Viewport', {
    layout: 'fit',
	items:[{xtype:'app-main'}]
});

/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 Ext.define('weixin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'weixinBase',
    stores: [
        // TODO: add global / shared stores here
    ],
	controllers:[],
    launch: function () {
        // TODO - Launch the application
		//port.show(Ext.getBody());
		//Ext.Msg.alert('Status', 'Changes saved successfully.');
    },
});
