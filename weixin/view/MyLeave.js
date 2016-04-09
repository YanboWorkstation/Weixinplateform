Ext.define('weixin.view.MyLeave', {
	extend: 'Ext.Panel',
	header:false,
	xtype: 'view-MyLeave',
	layout: 'card',
	id:'leavehome',
	requires: [
		//'weixin.view.MyLeaveApply'
    ],
	items:[
		{xtype:'view-MyLeaveMain', itemId:'leavMainDiv'},
		{xtype:'view-MyLeaveApplyStepOne', itemId:'leaveApplyStepOneDiv'}
	]
});

Ext.define('weixin.view.MyLeaveMain', {
	extend: 'Ext.form.Panel',
	xtype: 'view-MyLeaveMain',
	title:'my leave',
	viewModel: 'Leave',
	header:false,
	controller:'MyLeave',
	
	items:[
		{
			xtype:"panel",
			header:false,
			layout:'hbox', bodyStyle:'padding-bottom:1rem;background-color:#f6f6f6;', border:0,
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0em 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
				{xtype:'header', glyph:'xf090@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1em;background-color:#f6f6f6;',
					listeners: {el: { click: function(){Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');}}}
				}
			]	
		},
		{xtype:'panel', header:false, style:'padding:0rem 0.5rem;background-color:#f6f6f6;', border:0,
			items:[
				{xtype:'panel', header:false, height:100, 
					items:[
					{html:'请假外出', border:0, style:'font-size:200%; padding:0.5rem 0rem;display:block;', xtype:'label'},
					{html:'申请或请假需主管批准', border:0},
						]
				},
				{xtype:'panel', header:false, style:'margin-top:2rem', 
					items:[
						{html:'类型', border:0, xtype:'label',style:'padding-top:1rem;display:block',},
						{xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:red'},
						{xtype:'panel', header:false, border:0,style:'padding:1rem 1rem;',
							items:[
								{xtype:'panel', layout:'hbox',border:0,
									items:[
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:green;padding:1.5rem 1.5em', html:'年假',
													listeners: {el: { click: 'onLeaveImageClick', para:'年假数据'}}
											},
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#996600;padding:1.5rem 1.5em', html:'出差',
												listeners: {el: { click: 'onLeaveImageClick', para:'出差数据'}}
											},
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:blue;padding:1.5rem 1.5em', html:'丧假',
												listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											}
										]
								},
								{xtype:'panel', layout:'hbox', border:0,
									items:[
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#770000;padding:1.5rem 1.5em', html:'长病假',
													listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											},
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#ffcc66;padding:1.5rem 1.5em', html:'婚假',
												listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											},
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#cc66cc;padding:1.5rem 1.5em', html:'开会',
												listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											}
										]
								},
								{xtype:'panel', layout:'hbox', border:0,
									items:[
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#0099ff;padding:1.5rem 1.5em', html:'其它',
													listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											},
											{xtype:'panel', width:95, height:60, header:0, bodyStyle:'background-color:#006600;padding:1.5rem 1.5em;font-color:black', html:'外出办事',
												listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
											},
											{xtype:'panel', width:80, height:60, header:0, bodyStyle:'background-color:#0066ff;padding:1.5rem 1.5em', html:'陪产假',
												listeners: {el: { click: 'onLeaveImageClick', para:'sang数据'}}
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
Ext.define('weixin.view.MyLeave.MyLeaveController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MyLeave',
	onLeaveImageClick: function(sender, ele, obj){
		//var stepOne = Ext.widget('weixin.view.MyLeaveApplyStepOne');
		Ext.getCmp('leavehome').getLayout().setActiveItem('leaveApplyStepOneDiv');
		//stepOne.render('main');
		//Ext.MessageBox.confirm('开发信息', '加载数据：'+obj.para, function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
	
});



//data model
Ext.define('weixin.view.MyLeave.MyLeaveModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.Leave',
	fields: ['basicSalary', 'makeupSalary','OTFee', 'Commission','QuarterlyBonus','BenefitRefund','RefundAfterTax',
			'Deduction','Pension','Medical','Unemplyoment','Housing','Tax','DeductionAfterTax'
	],
    data: {
        basicSalary: '0.00',
		makeupSalary:'0.00',
        OTFee: '336.21',
		Commission:'1,714.00',
		QuarterlyBonus:'--,--',
		BenefitRefund:'0.00',
		RefundAfterTax:'0.00',
		Deduction:'0.00',
		Pension:'0.00',
		Medical:'0.00',
		Unemplyoment:'0.00',
		Housing:'0.00',
		Tax:'0.00',
		DeductionAfterTax:'0.00'
    }

    //TODO - add data, formulas and/or methods to support your view
});


/*****************************************my leave apply*******************************************************************/
Ext.define('weixin.view.MyLeaveApply', {
	extend: 'Ext.form.Panel',
	header:false
});	

Ext.define('weixin.view.MyLeaveApplyStepOne', {
	extend: 'weixin.view.MyLeaveApply',
	xtype: 'view-MyLeaveApplyStepOne',
	title:'my leave step 1',
	viewModel: 'LeaveApplyStepOne',
	controller:'MyLeaveApplyStepOne',
	items:[
		{
			xtype:"panel",
			header:false,
			layout:'hbox', bodyStyle:'padding-bottom:1rem;background-color:#f6f6f6;',
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0rem 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
				{xtype:'header', glyph:'xf090@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;',
					listeners: {el: { click: function(){Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');}}}
				}
			]	
		},
		{xtype:'panel', header:false, style:'padding:0rem 0.5rem;background-color:#f6f6f6;',
			items:[
				{xtype:'panel', header:false, border:0, style:'padding:1em 0.2rem;',
					items:[
					{bind:{html:'{leaveTypeName}'}, border:0, style:'margin-top:0.2rem'},
					{xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:#3399ff'},
					{bind:{html:'{usedDays}天已使用/{remainDay}天(可使用)',} , border:0, style:'display:block;margin:0rem 0.2rem 0.3rem 0rem; text-align:right',width:'100%', xtype:'label'},
					{xtype:'progressbar', border:0, width:'90%', bind:{value:'{usage}'}},
					{xtype:'panel', border:0, header:false, 
						items:{xtype:'button', animateShadow:true,text:'<font color="black">申请记录分布</font>',border:0, width:'100%', style:'background-color:#f6f6f6; margin-top:0.3rem',
								handler: 'OnViewApplicationEvent'
							}
					},
						]
				},
				{xtype:'panel', header:false, style:'margin:2rem 0.2rem 0.1rem 0.2rem', 
					items:[
						{bind:{html:'请选择{leaveTypeName}时间范围'}, border:0, xtype:'label',style:'padding-top:1rem;display:block',},
						{xtype:'panel', header:false, style:'margin:1rem 0.1rem;', bodyStyle:'border-color:#3399ff'},
						{xtype:'panel', header:false, border:0,style:'padding-bottom: 0.2rem;',
							items:[
								{
									layout:"table",  style:'margin-top:1rem;background-color:#f6f6f6;',
									border:0,
									layoutConfig:{
									  columns:3
									},
									defaults:{
									  border:false,
									  bodyStyle:"padding:2px;"
									},
									items:[{
										items:[{
											xtype:"datefield",
											name:"applyDateFrom",
											id:'applyDateFrom',
											reference:'applyDateFrom',
											format:'Y年m月d日',
											emptyText:Ext.Date.format(new Date(), 'Y年m月d日')
										  }]
									  },{
										html:"到"
									  },{
										items:[{
											xtype:"datefield",
											name:"applyDateEnd",
											id:'applyDateEnd',
											reference:'applyDateEnd',
											format:'Y年m月d日',
											emptyText:Ext.Date.format(new Date(), 'Y年m月d日')
										  }]
									  }]
								  }
							]
						},
					]
				},
				{xtype:'panel', header:false, border:0, 
				  dockedItems:[
						{xtype:'toolbar', dock:'top',
							items:[
								{xtype:'image', src:'images/overwork_applyBtn.gif', alt:'muchMoreView', resizeable:true, id:'leaveApplyBtn', dock:'left',
										listeners: {el: { click: 'onApply'}}
								},
								{xtype:'image', src:'images/back.gif', alt:'mainDiv', resizeable:true, id:'leaveBackBtn', dock:'right',
									defaultAlign:'right',		listeners: {el: { click: 'OnBack'}}
								}			
							]
						}
					]
				  }
			]
		}
	]
});


//controller
Ext.define('weixin.view.MyLeave.MyLeaveApplyStepOneController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MyLeaveApplyStepOne',
	onApply: function(sender, ele, obj){
		var startDate = this.lookupReference('applyDateFrom').value;
		console.log(startDate);
		var endDate = this.lookupReference('applyDateEnd').value;
		Ext.MessageBox.alert('开发信息'+startDate, '加载数据：'+endDate, function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	},
	OnBack: function(sender, ele, obj){
		Ext.getCmp('leavehome').getLayout().setActiveItem('leavMainDiv');
	},
	OnViewApplicationEvent: function(sender, el, para){
		Ext.MessageBox.confirm('开发信息', '加载数据：', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
});



//data model
Ext.define('weixin.view.MyLeave.MyLeaveApplyStepOneModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.LeaveApplyStepOne',
	fields: ['leaveType','dateStart','dateEnd','remainDay','leaveTypeName', 'usedDays','usage'
	],
    data: {
        leaveType: '1',
		leaveTypeName:'年假',
		dateStart:'',
        dateEnd: '',
		remainDay:'11',
		usedDays:'2',
		totalDays:'15',
		usage:0.2
    }

    //TODO - add data, formulas and/or methods to support your view
});



