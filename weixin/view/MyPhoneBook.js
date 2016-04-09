Ext.define('weixin.view.MyPhoneBook', {
	extend: 'Ext.Panel',
	xtype: 'view-PhoneBook',
	title:'my MyPhoneBook',
	controller:'MyPhone',
	header:false,
	viewModel: 'PhoneUser',
	reference:'phoneBookHome',
	items:{
		xtype:"form",
		title:"Form",
		header:false,
		items:[
			{
			xtype:"panel",
			header:false,
			layout:'hbox',bodyStyle:'padding-bottom:1rem;background-color:#f6f6f6;',border:0,
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0em 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
				{xtype:'header', glyph:'xf090@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;',
					listeners: {el: { click: function(){Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');}}}
				}
			]	
		  },
		  {xtype:'panel', header:false, border:0, style:'margin:1rem 0.1rem',
			  dockedItems:[
					{xtype:'toolbar', dock:'top',
						items:[
							{xtype:'textfield', resizeable:true, id:'searchTxt', dock:'left', reference:'searchTxt',
									listeners: {el: { change: 'searchTxtChangeEvent'}}
							},
							{xtype:'button', text:'同步', resizeable:true, id:'syncBtn', dock:'right',
								defaultAlign:'right',	listeners: {el: { click: 'syncBtnClick'}}	
							}			
						]
					}
				]
		  },
		  {xtype:'gridpanel', hideHeaders:true,
				//store: {},
				bind: {
					store: '{userListData}'
				},
				columns:[
					{text:'姓名', xtype: 'templatecolumn', width:'100%',
						tpl: '<table style="width:100%;">'+
							'	<tr>'+
									'<td rowspan="2" width="85"><img alt="" class="usrImg" src="{userICONPath}" click="userImgClickEvent"  height="60" width="80"/></td>'+
									'<td>{localName}</td>'+
								'</tr>'+
							'	<tr><td colspan="2">{EnglishName}</td></tr>'+
							'</table>',
						listeners: {
							click: 'userImgClickEvent'
						}	
					  }
				],
				listeners: {
					afterRender: function(view) {
						//grid.store.load();
						//console.log(view.store.getData());
						//console.log(view.store.getCount());
					}
				}	
			}
		]
		}
});


Ext.define('weixin.view.MyPhoneBook.MyPhoneController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MyPhone',
	view: 'PhoneBookHome',
	init: function(view) {
        this.getViewModel().getStore('userListData').load();
		//console.log(this.getViewModel().getData().userListData);
		 
    },
	syncBtnClick: function(sender, ele ){
		Ext.MessageBox.confirm('开发信息：用户需求确认', '开发信息：同步用户数据到微信平台？', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	},
	searchTxtChangeEvent:function(sender, el){
		Ext.MessageBox.alert('开发信息','过滤用户名中(模糊)匹配'+this.lookupReference('searchTxt').value+'的用户');
		//Ext.MessageBox.confirm('加班申请', '后台数据校验的结果,如出现错误弹框进行提示', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	},
	
	userImgClickEvent:function(sender, el){
		Ext.MessageBox.confirm('开发信息：用户需求确认', '开发信息：弹出用户信息还是其它操作？', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
})





//data model
Ext.define('weixin.view.MyPhoneBook.PhoneUserModel', {
    extend: 'Ext.app.ViewModel',
	//extend: "Ext.data.Model",
    alias: 'viewmodel.PhoneUser',
	fields: [
        { name: 'userICONPath', type: 'string' },
        { name: 'localName', type: 'string' },
        { name: 'EnglishName', type: 'string' },
		{ name: 'userInfo', type: 'object' }
    ],
	stores: {
        userListData: {
            type: 'PhoneUserStore',autoLoad: true
        }
	}
    //TODO - add data, formulas and/or methods to support your view
});

 
Ext.define('weixin.store.PhoneUserStore', {
    extend: 'Ext.data.Store',
    alias: 'store.PhoneUserStore',
    fields: [
        'userICONPath', 'localName', 'EnglishName'
    ],

    data: { items: [
        { userICONPath: 'Jean Luc', localName: "jeanluc.picard@enterprise.com", EnglishName: "555-111-1111" },
        { userICONPath: 'Worf',     localName: "worf.moghsson@enterprise.com",  EnglishName: "555-222-2222" },
        { userICONPath: 'Deanna',   localName: "deanna.troi@enterprise.com",    EnglishName: "555-333-3333" },
        { userICONPath: 'Tina',     localName: "mr.data@enterprise.com",        EnglishName: "555-444-4444" },
		{ userICONPath: 'Jason',     localName: "mr.Jason@enterprise.com",        EnglishName: "86-21-65432109" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
	
	autoLoad: true
});
