/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 /*
 Ext.define('weixin.view.main.MainHeader', {
	 extend: 'Ext.Panel',
	 xtype:'app-view-Header',
	 layout: 'fit',
	 items:{xtype:'panel',border:0, title:'header here 200',id:'header'}
 });
*/
 Ext.define('weixin.view.main.MainHome', {
	 extend: 'Ext.Panel',
	 xtype:'app-view-Home',
	 layout: 'fit',
	 controller: 'main',
	 requires: [
        //'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
		'weixin.view.main.MainHeader' ,
        'weixin.view.main.MainController'
    ],
	 header:false,
	 items: 
[
{
        xtype: 'panel',
        border: false,
        //margin: '0 0 5 0',
		layout:'column',
		defaults:{
			layout:'anchor', defaults:{anchor:'100%'}
		},
		items:[
			{columnWidth:0.33,borderRightWidth:0, margin:'0 1 0 0',
				items:[
					{xtype:'panel',border:0, id:'punchImageDivInHome', columnWidth:0.33,
						items:
							{xtype:'image', src:'images/punch.gif', alt:'puchView', reference:'punchImageInHome', resizeable:true, id:'punchImageInHome', 
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
					{xtype:'panel',border:0, id:'leaveImageDivInHome', columnWidth:0.33,
						items:
							{xtype:'image', src:'images/leave.gif', alt:'leaveView', reference:'leaveImageInHome', resizeable:true, id:'leaveImageInHome',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
				]
			},
			{columnWidth:0.33,borderRightWidth:0,margin:'0 1 0 0',
				items:[
					{xtype:'panel', border:0,id:'phonebookImageDivInHome', columnWidth:0.33, 
						items:
							{xtype:'image', src:'images/phonebook.gif', alt:'PhoneBookView', reference:'phonebookImageInHome', resizeable:true, id:'phonebookImageInHome',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
					{xtype:'panel', border:0, id:'salaryImageDivInHome', columnWidth:0.33, 
						items:
							{xtype:'image', src:'images/salary.gif', alt:'salaryView', reference:'salaryImageInHome', resizeable:true, id:'salaryImageInHome',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
				]
			},
			{columnWidth:0.34,
				items:[
					{xtype:'panel', border:0, id:'overworkImageDivInHome', 
						items:
							{xtype:'image', src:'images/overwork.gif', alt:'myOverworkView', reference:'overworkImageInHome', resizeable:true, id:'overworkImageInHome',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
					{xtype:'panel', border:0, id:'muchMoreImageDivInHome', 
						items:
							{xtype:'image', src:'images/more.jpg', alt:'muchMoreView', reference:'muchMoreImageInHome', resizeable:true, id:'muchMoreImageInHome',
								listeners: {el: { click: 'OnImgClick'}}
							}
					},
				]
			},
			]
    }]
	 
 });
 
Ext.define('weixin.view.main.HomePage', {
    extend: 'Ext.Panel',
    xtype: 'app-homePage',
	id:'homePageView',
	header:false,
	items: [
		{xtype:'app-view-Header',border:0},
		{xtype:'app-view-Home', border:0}
		]
}); 
 
Ext.define('weixin.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
	alias:'appMain',
	id:'homePage',
	layout:'card',
   // controller: 'main',
    //viewModel: 'main',
	 requires:['weixin.view.MyLeave','weixin.view.MySalary','weixin.view.MyPunch','weixin.view.MyPhoneBook','weixin.view.MyOverwork','weixin.view.MuchMore'],
    //ui: 'navigation',
	header:false,
items: 
[
{xtype:'app-homePage',border:0, itemId:'mainDiv'},
{xtype:'view-MyPunch', border:0, itemId:'puchView'},
{xtype:'view-MyLeave', border:0, itemId:'leaveView'},
{xtype:'view-PhoneBook', border:0, itemId:'PhoneBookView'},
{xtype:'view-MySalary', border:0, itemId:'salaryView'},
{xtype:'view-MyOverwork', border:0, itemId:'myOverworkView'},
{xtype:'view-MuchMore', border:0, itemId:'muchMoreView'},
]
});


Ext.define('weixin.view.main.Qingjia', {
	extend: 'Ext.tab.Panel',
	xtype: 'MyQinjia',
	alias: 'view.Qingjia',
	title:'my qing jia main',
	//layout: 'fit',
	items:{xtype:'button', text:'new created',border:0, id:'myQingjiaMain', width:60,height:30,
		handler:function(){
			var panele = Ext.widget('MyQinjiaDerive');
			panele.render(Ext.getBody());
		}
	}
});

Ext.define('weixin.view.main.QingjiaDerive', {
	extend: 'weixin.view.main.Qingjia',
	xtype: 'MyQinjiaDerive',
	title:'derived panel',
	//layout: 'fit',
	items:{xtype:'button', text:'new one',border:0, id:'newOneBtn', width:60,height:30,
		handler:function(){console.log(weixin.getApplication().getMainView());//window.location.href = window.location.href;
		}
	}
});