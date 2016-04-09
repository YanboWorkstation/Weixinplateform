Ext.define('weixin.view.MuchMore', {
	extend: 'Ext.Panel',
	header:false,
	xtype: 'view-MuchMore',
	layout: 'card',
	id:'muchMoreHome',
	requires:[
		'weixin.view.MuchMoreToMyApproval',
	],
	items:[
		{xtype:'view-MuchMoreHomePage', itemId:'muchMoreHomeDiv'},
		{xtype:'view-MuchMoreToMyApproval', itemId:'myaApprovalListDiv'},
	]
});

/**************************manager home page of much more form**************************/
Ext.define('weixin.view.MuchMoreHomePage', {
	extend: 'Ext.Panel',
	xtype: 'view-MuchMoreHomePage',
	controller:'MuchMoreToManager',
	items:[
		{xtype:'app-view-CorpLogo'},
		{xtype:'image', src:'images/header_banner_1.gif', alt:'panel1 link', resizeable:true},
		{
			xtype: 'panel',
			border: false,
			layout:'column',
			defaults:{
				layout:'anchor', defaults:{anchor:'100%'}
			},
			items:[
				{columnWidth:0.33,borderRightWidth:0, margin:'0 1 0 0',
					items:[
						{xtype:'panel',border:0, id:'processAprovalImagDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/approval.jpg', alt:'审批加班情况', reference:'processAprovalInManagerHome', resizeable:true, id:'processAprovalInManagerHome', 
									listeners: {el: { click: 'OnImgInManagerViewClick', localName:'我的审批', targetView:'myaApprovalListDiv'}}
								}
						},
						{xtype:'panel',border:0, id:'processApprovalProxyImagDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/approvalProxy.jpg', alt:'processApprovalProxyView', reference:'processApprovalProxyInManagerHome', resizeable:true, id:'processApprovalProxyInManagerHome',
									listeners: {el: { click: 'OnImgInManagerViewClick',localName:'代理设置'}}
								}
						},
					]
				},
				{columnWidth:0.33,borderRightWidth:0,margin:'0 1 0 0',
					items:[
						{xtype:'panel', border:0,id:'employeLeaveListImageDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/leaveQuery.jpg', alt:'employeLeaveListView', reference:'employeLeaveListInManagerHome', resizeable:true, id:'employeLeaveListInManagerHome',
									listeners: {el: { click: 'OnImgInManagerViewClick',localName:'休假日历'}}
								}
						},
						{xtype:'panel', border:0, id:'attendenceListImageDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/announcement.jpg', alt:'attendenceListView', reference:'attendenceListInManagerHome', resizeable:true, id:'attendenceListInManagerHome',
									listeners: {el: { click: 'OnImgInManagerViewClick',localName:'公告通知'}}
								}
						},
					]
				},
				{columnWidth:0.34,
					items:[
						{xtype:'panel', border:0,id:'messageAlertImageDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/messageAlert.jpg', alt:'messageAlertView', reference:'messageAlertInManagerHome', resizeable:true, id:'messageAlertInManagerHome',
									listeners: {el: { click: 'OnImgInManagerViewClick',localName:'信息提醒'}}
								}
						},
						{xtype:'panel', border:0, id:'back2HomeDivInHome', columnWidth:0.33, 
							items:
								{xtype:'image', src:'images/back2Home.jpg', alt:'back2HomeView', reference:'back2HomeInManagerHome', resizeable:true, id:'back2HomeInManagerHome',
									listeners: {el: { click: function(){Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');},localName:'返回首页'}}
								}
						},
					]
				},
				]
		}
	]
});


//controller
//controller
Ext.define('weixin.view.MuchMoreHomePage.MuchMoreToManagerController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MuchMoreToManager',
	OnImgInManagerViewClick: function(sender, ele, obj){
		Ext.getCmp('muchMoreHome').getLayout().setActiveItem(obj.targetView);
		//Ext.MessageBox.confirm('开发信息', '加载数据：'+obj.localName, function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
	
});



/*******************my approval*********************************/
Ext.define('weixin.view.MuchMoreToMyApproval', {
	extend: 'Ext.Panel',
	xtype: 'view-MuchMoreToMyApproval',
	title:'my process aproval',
	layout: 'card',
	id:'MyApprovalHome',
	header:false,
	items:[
		{xtype:'view-MuchMoreToMyApprovalListView', itemId:'myApprovalListView'},
		{xtype:'view-MuchMoreToMyApprovalUserDetail', itemId:'myApprovalUserDetailView'},
	]
});

Ext.define('weixin.view.MuchMoreToMyApprovalListView', {
	extend: 'Ext.Panel',
	xtype: 'view-MuchMoreToMyApprovalListView',
	title:'my process aproval',
	//layout: 'fit',
	header:false,
	controller:'MuchMoreToMyApprovalList',
	items:[
		{xtype:'app-view-CorpLogo'},
		{xtype:'panel', header:false, height:100, 
					items:[
					{html:'我的审核', border:0, style:'font-size:200%; padding:0.5rem 0rem;display:block;', xtype:'label'},
					{html:'审批和查看加班申请及加班历史', border:0},
						]
				},
		{xtype:'panel', header:false, border:0, border:0,bodyStyle:'padding:1rem 0.2rem',
			items:[
				{
					xtype:"combo",
					autoSelect:true,
					 reference:'approvalTypeCombox',
					store: Ext.create('Ext.data.Store', {
							fields: ['TypeName', 'TypeValue'],
							data : [
								{"TypeName":'待审核', "TypeValue":"3"},
								{"TypeName":"已审核", "TypeValue":"2"},
							],
							autoLoad:true
						}),
					displayField:'TypeName', valueField:'TypeValue',	
					listeners:{
						 'select': 'onApprovalTypeSelect'
					},
					name:"approvalTypeCombox",
					id:'approvalTypeCombox'
				 },
				 {xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:red'},
				 {
					  xtype:'panel', title:'list', header:false,
					  items:[
						  // signle user
						  {
							  xtype:'panel', header:false, layout:'hbox',border:false,
							  items:[
								{xtype:'image', src:'images/logo.gif', height:80, width:60, listeners: {el: { click: 'userImgClickEvent'}}	},
								{xtype:'panel', header:false, border:0,
									items:[
										{xtype:'panel', header:false, border:0, layout:'hbox', bodyStyle:'padding-top:0.2rem',
											items:[
												{html:'user 1',border:0,}, 
													{xtype:'panel', header:false, border:0,layout:'hbox', bodyStyle:'padding-left:16rem;',
														items:[
															{xtype:'image', src:'images/phone.gif', height:20, width:20, style:'margin-right:1rem;', listeners: {el: { click: 'userImgClickEvent'}}	},
															{xtype:'image', src:'images/weichat.gif', height:20, width:20, listeners: {el: { click: 'userImgClickEvent'}}	},
														]
													}
											]
										},
										{xtype:'panel', header:false, border:0, layout:'hbox',bodyStyle:'padding-top:0.5rem',
											items:[
												{xtype:'image', src:'images/absenseLeave.gif', height:18, width:33, listeners: {el: { click: 'userImgClickEvent'}}	}, 
												{html:Ext.Date.format(new Date(), 'Y-m-d'), style:'margin:0rem 1rem 0rem 10rem',border:0,},{html:Ext.Date.format(new Date(), 'Y-m-d'),border:0,}
											]
										}
									]
								}
							  ]
						  },
						  // signle user
						  {
							  xtype:'panel', header:false, layout:'hbox',border:false,
							  items:[
								{xtype:'image', src:'images/logo.gif', height:80, width:60, listeners: {el: { click: 'userImgClickEvent'}}	},
								{xtype:'panel', header:false, border:0,
									items:[
										{xtype:'panel', header:false, border:0, layout:'hbox', bodyStyle:'padding-top:0.2rem',
											items:[
												{html:'user 1',border:0,}, 
													{xtype:'panel', header:false, border:0,layout:'hbox', bodyStyle:'padding-left:16rem;',
														items:[
															{xtype:'image', src:'images/phone.gif', height:20, width:20, style:'margin-right:1rem;', listeners: {el: { click: 'userImgClickEvent'}}	},
															{xtype:'image', src:'images/weichat.gif', height:20, width:20, listeners: {el: { click: 'userImgClickEvent'}}	},
														]
													}
											]
										},
										{xtype:'panel', header:false, border:0, layout:'hbox',bodyStyle:'padding-top:0.5rem',
											items:[
												{xtype:'image', src:'images/annualLeave.gif', height:18, width:33, listeners: {el: { click: 'userImgClickEvent'}}	}, 
												{html:Ext.Date.format(new Date(), 'Y-m-d'), style:'margin:0rem 1rem 0rem 10rem',border:0,},{html:Ext.Date.format(new Date(), 'Y-m-d'),border:0,}
											]
										}
									]
								}
							  ]
						  },
						  // signle user
						  {
							  xtype:'panel', header:false, layout:'hbox',border:false,
							  items:[
								{xtype:'image', src:'images/logo.gif', height:80, width:60, listeners: {el: { click: 'userImgClickEvent'}}	},
								{xtype:'panel', header:false, border:0,
									items:[
										{xtype:'panel', header:false, border:0, layout:'hbox', bodyStyle:'padding-top:0.2rem',
											items:[
												{html:'user 3',border:0,}, 
													{xtype:'panel', header:false, border:0,layout:'hbox', bodyStyle:'padding-left:16rem;',
														items:[
															{xtype:'image', src:'images/phone.gif', height:20, width:20, style:'margin-right:1rem;', listeners: {el: { click: 'userImgClickEvent'}}	},
															{xtype:'image', src:'images/weichat.gif', height:20, width:20, listeners: {el: { click: 'userImgClickEvent'}}	},
														]
													}
											]
										},
										{xtype:'panel', header:false, border:0, layout:'hbox',bodyStyle:'padding-top:0.5rem',
											items:[
												{xtype:'image', src:'images/annualLeave.gif', height:18, width:33, listeners: {el: { click: 'userImgClickEvent'}}	}, 
												{html:Ext.Date.format(new Date(), 'Y-m-d'), style:'margin:0rem 1rem 0rem 10rem',border:0,},{html:Ext.Date.format(new Date(), 'Y-m-d'),border:0,}
											]
										}
									]
								}
							  ]
						  },
						  ]
				}
			]
		}		
	]
});


//controller
Ext.define('weixin.view.MuchMoreToMyApproval.MuchMoreToMyApprovalListController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MuchMoreToMyApprovalList',
	onApprovalTypeSelect: function(sender, ele, obj){
		Ext.MessageBox.confirm('开发信息', '加载数据：approvalTypeCombox', function(btn){ if(btn=='yes') Ext.getCmp('muchMoreHome').getLayout().setActiveItem(0);});
	},
	userImgClickEvent:  function(sender, ele, obj){
		
		 Ext.getCmp('MyApprovalHome').getLayout().setActiveItem(1);
		//Ext.MessageBox.confirm('开发信息', '加载数据：userImgClickEvent', function(btn){ if(btn=='yes') Ext.getCmp('muchMoreHome').getLayout().setActiveItem(0);});
		
	}
	
});

/************************my approval user detail****************************/
Ext.define('weixin.view.MuchMoreToMyApprovalUserDetail', {
	extend: 'Ext.Panel',
	xtype: 'view-MuchMoreToMyApprovalUserDetail',
	title:'my approval user detail',
	//layout: 'fit',
	header:false,
	controller:'MuchMoreToMyApprovalUserDetail',
	items:[
		{xtype:'app-view-CorpLogo'},
		{xtype:'panel', header:false, height:100, 
					items:[
					{html:'申请原因', border:0, style:'font-size:200%; padding:0.5rem 0rem;display:block;', xtype:'label'},
					{html:'显示用户加班原因', border:0},
						]
				},
		{xtype:'panel', header:false, border:0, border:0,bodyStyle:'padding:1rem 0.2rem',
			items:[
				 {html:'申请信息', style:'margin:0.3rem 1rem',xtype:'label'},
				 {xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:red'},
				 {
					  xtype:'panel', title:'list', header:false, bodyStyle:'padding:1rem 0rem 1rem 1rem', height:80,
					  items:[
						  // signle user
						  {
							  xtype:'panel', header:false, layout:'hbox',border:false,
							  items:[
								{xtype:'image', src:'images/logo.gif', height:80, width:60	},
									{html:'user 1', style:'margin:0rem 1.4rem',xtype:'label'},
									{html:Ext.Date.format(new Date(), 'Y-m-d'), style:'margin:0rem 5rem',xtype:'label'},
									{html:'提交', xtype:'label'},
							  ]
						  },
						  ]
				},
				{xtype:'panel', header:false, bodyStyle:'padding:1rem',layout:'hbox', style:'margin-top:3rem;',
					items:[
						{xtype:'image', src:'images/agree.jpg', listeners: {el: { click: 'userImgClickEvent', para:'同意'}}	},
						{xtype:'textfield', emptyText:'type the reject reason', style:'margin:0rem 1rem'	},
						{xtype:'image', src:'images/reject.gif', listeners: {el: { click: 'userImgClickEvent',para:'拒绝'}}	},
					]
				}
			]
		}		
	]
});

//controller
Ext.define('weixin.view.MuchMoreToMyApprovalUserDetail.MuchMoreToMyApprovalUserDetailController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MuchMoreToMyApprovalUserDetail',

	userImgClickEvent:  function(sender, ele, obj){
		Ext.MessageBox.confirm('开发信息', '更新数据for:'+obj.para, function(btn){ if(btn=='yes') Ext.getCmp('muchMoreHome').getLayout().setActiveItem(0);});
		
	}
	
});