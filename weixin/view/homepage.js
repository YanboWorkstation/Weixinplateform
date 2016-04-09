/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('weixin.view.main.MainHome', {
	 extend: 'Ext.Panel',
	 xtype:'app-view-Home',
	 layout: 'fit',
	 controller: 'main',
	 requires: [
        //'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'weixin.view.main.MainController' /*,
       'weixin.view.main.MainModel',
        'weixin.view.main.List'*/
		//,'weixin.view.main.Qingjia'
    ],
	 header:false,
	 items: 
[
{
        xtype: 'panel',
        //html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        //margin: '0 0 5 0',
		//layout:{type:'table', columns:3, rows:2, frames:true},
		layout:'column',
		defaults:{
			layout:'anchor', defaults:{anchor:'100%'}
		},
		items:[
			{columnWidth:0.33,borderRightWidth:0, margin:'0 1 0 0',
				items:[
					{xtype:'panel',border:0, id:'savebtn11', columnWidth:0.33, width:200,height:100,
						items:{xtype:'image', width:80, height:60, src:'demo.png', alt:'panel1 link', reference:'panelOneImg',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
					{xtype:'panel',border:0, title:'panel 2',id:'savebtn12', columnWidth:0.33, width:200,height:100},
				]
			},
			{columnWidth:0.33,borderRightWidth:0,margin:'0 1 0 0',
				items:[
					{xtype:'panel', border:0,title:'panel 3',id:'panel3', columnWidth:0.33, width:200,height:100, reference:'panel3'},
					{xtype:'panel', border:0,title:'panel 4',id:'savebtn4', columnWidth:0.33, width:200,
						items:[
							{xtype:'textfield', fieldLabel:'user name',reference: 'usrName'},
							{xtype:'button', text:'click me', handler:'OnClickMeButtonClick', action:'act1'}
						]
					},
				]
			},
			{columnWidth:0.34,
				items:[
					{xtype:'panel', border:0,title:'panel 5',id:'savebtn15', columnWidth:0.33, width:200,height:100},
					{xtype:'panel', border:0,title:'panel 6',id:'savebtn16', columnWidth:0.33, width:200,height:100},
				]
			},
			]
    }]
	 
 });
 /*
Ext.define('weixin.view.main.HomePage', {
    extend: 'Ext.Panel',
    xtype: 'app-homePage',
	id:'homePageView',
	header:false,
	items: [
		{xtype:'app-view-Header',border:0},
		{xtype:'app-view-Home', border:0}
		]
}); */
