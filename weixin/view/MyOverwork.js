Ext.define('weixin.view.MyOverwork', {
	extend: 'Ext.Panel',
	xtype: 'view-MyOverwork',
	controller:'overwork',
	items:{
		xtype:"form",
		title:"",
		items:[{
			xtype:"panel",
			header:false,
			layout:'hbox', bodyStyle:'padding-bottom:1rem;background-color:#f6f6f6;',
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0em 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
			]	
		  },{
			xtype:'panel',
			header:false, style:'padding:1rem 0.5rem;background-color:#f6f6f6;', border:0,
			items:[
				{xtype:'panel', header:false, height:100, 
					items:[
					{html:'加班申请', border:0, style:'font-size:200%; padding:0.5rem 0rem;display:block;', xtype:'label'},
					{html:'申请加班', border:0},
						]
				},
				{html:'类型', border:0, xtype:'label',style:'padding-top:1rem;display:block',},
				{xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:red'},
				{
				layout:"table",  style:'margin-top:1rem;background-color:#f6f6f6;',
				border:0,
				
				defaults:{
				  border:false,
				  bodyStyle:"padding:2px;"
				},
				items:[{
					items:[{
						xtype:"datefield",
						name:"dateFrom",
						id:'dateFrom',
						format:'Y年m月d日',
						emptyText:Ext.Date.format(new Date(), 'Y年m月d日')
					  }]
				  },{
					html:"到"
				  },{
					items:[{
						xtype:"datefield",
						name:"dateEnd",
						id:'dateEnd',
						format:'Y年m月d日',
						emptyText:Ext.Date.format(new Date(), 'Y年m月d日')
					  }]
				  }]
			  },
			  {xtype:"textfield",name:"reasonTxt", emptyText:'type your reason', reference:'reasonTxt' }
			  ]
		  },
		  {xtype:'panel', header:false, border:0, 
		  dockedItems:[
				{xtype:'toolbar', dock:'top',
					items:[
						{xtype:'image', src:'images/overwork_applyBtn.gif', alt:'muchMoreView', resizeable:true, id:'overworkApplyBtn', dock:'left',
								listeners: {el: { click: 'OnApplyOverworkBtnClick'}}
						},
						{xtype:'image', src:'images/back.gif', alt:'mainDiv', resizeable:true, id:'overworkBackBtn', dock:'right',
								listeners: {el: { click: 'OnBack'}}
						}			
					]
				}
			]
		  }
		  	
		]
	}
});


Ext.define('weixin.view.MyOverwork.OverworkController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.overwork',
	OnBack: function(sender, ele ){
		Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');
	},
	OnApplyOverworkBtnClick:function(sender, el){
		//Ext.MessageBox.alert(this.lookupReference('reasonTxt').value);
		Ext.MessageBox.confirm('加班申请', '后台数据校验的结果,如出现错误弹框进行提示', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
});