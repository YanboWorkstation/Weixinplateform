/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('weixin.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
	//refs:[{ref:'appMain', autoCreate: true, selector: 'form'}],
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?'+this.lookupReference('panelOneImg').action, 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
	OnImgClick: function(sender, ele ){
		var compEl = this.lookupReference(ele.id) || Ext.getCmp(ele.id);
Ext.getCmp('homePage').getLayout().setActiveItem(compEl.alt);
//Ext.getCmp(ele.id).reference
		 console.log(compEl.alt);
		//Ext.Msg.alert('Status'+ele.alt, 'Changes saved successfully.'+ele.data);
	}
});
