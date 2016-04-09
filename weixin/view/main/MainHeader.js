/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('weixin.view.main.MainHeader', {
	 extend: 'Ext.Panel',
	 xtype:'app-view-Header',
	 //layout: 'fit',
	 items: /*{xtype:'panel',border:0, title:'header here 200'}*/
	 {xtype:'image', src:'images/header_banner.gif', alt:'panel1 link', reference:'panelOneImg', resizeable:true,
								listeners: {el: { click: 'OnImgClick'}}
	 }
 });
 
 
  Ext.define('weixin.view.main.CorpLogo', {
	 extend: 'Ext.Panel',
	 xtype:'app-view-CorpLogo',
	 //layout: 'fit',
	 items: {
			xtype:"panel",
			header:false,
			layout:'hbox',bodyStyle:'background-color:#f6f6f6;',border:0,
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0em 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
				{xtype:'header', glyph:'xf090@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;',
					listeners: {el: { click: function(){Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');}}}
				}
			]	
		  }
 });