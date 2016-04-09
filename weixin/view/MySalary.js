Ext.define('weixin.view.MySalary', {
	extend: 'Ext.Panel',
	xtype: 'view-MySalary',
	header:false,
	viewModel: 'Salary',
	//layout: 'fit',
	controller:'MySalary',
	items:{
		xtype:"form",
		header:false,
		border:0, 
		items:[
		  {xtype:'app-view-CorpLogo'},
		  ,{
			xtype:"panel",
			header:false, border:0,bodyStyle:'background-color:#f6f6f6;padding:1rem 0.2rem',
			items:[{
				xtype:"combo",
				fieldLabel:"月份", 
				autoSelect:true,
				 reference:'paymonthCombox', style:'background-color:#f6f6f6;',
				store: Ext.create('Ext.data.Store', {
						fields: ['MonthName', 'MonthNumber'],
						data : [
							{"MonthName":'3月', "MonthNumber":"3"},
							{"MonthName":"2月", "MonthNumber":"2"},
							{"MonthName":"1月", "MonthNumber":"1"}
						],
						autoLoad:true
					}),
				displayField:'MonthName', valueField:'MonthNumber',	
				listeners:{
					 'select': 'onPaymonthSelect'
				},
				name:"paymonthCombox",
				id:'paymonthCombox',
				hiddenName:"combovalue"
			  },
			  {xtype:'panel', header:false, style:'margin:0.4rem 0rem;border-color:orange'},
			  {
				xtype:"panel",
				title:"salaryContainer",
				layout:'vbox', header:false,border:0,bodyStyle:'background-color:#f6f6f6;padding:1rem 0.2rem',
				items:{border:0, 
					bind: {
						html: '<table cellspacing="0.3rem" cellpadding="0.3rem" style="line-height:2rem;background-color:#f6f6f6;">'+
									'<tr><td style="width:8rem">基本工资</td><td style="width:3rem">{basicSalary}</td><td style="width:8rem">休假扣款</td><td>{Deduction}</td></tr>' +
									'<tr><td style="width:8rem">补发工资</td><td style="width:3rem">{makeupSalary}</td><td style="width:8rem">养老保险</td><td>{Pension}</td></tr>' +
									'<tr><td style="width:8rem">加班费OT</td><td style="width:3rem">{OTFee}</td><td style="width:8rem">医疗保险</td><td>{Medical}</td></tr>' +
									'<tr><td style="width:8rem">销售奖金</td><td style="width:3rem">{Commission}</td><td style="width:8rem">失业保险</td><td>{Unemplyoment}</td></tr>' +
									'<tr><td style="width:8rem">季度奖金</td><td style="width:3rem">{QuarterlyBonus}</td><td style="width:8rem">公积金</td><td>{Housing}</td></tr>' +
									'<tr><td style="width:8rem">社保退费</td><td style="width:3rem">{BenefitRefund}</td><td style="width:8rem">个人所得税</td><td>{Tax}</td></tr>' +
									'<tr><td style="width:8rem">其它税后补款</td><td style="width:3rem">{RefundAfterTax}</td><td style="width:8rem">其它税后扣款</td><td>{makeupSalary}</td></tr>' +
							  '</table>'
						}
					}
			  },
			  {xtype:'panel', header:false, style:'margin:0.4rem 0rem;border-color:orange'},
			  {bind:{html:'实发工资: <span style="margin-left:2rem">{totalSaraly}</span>',} , border:0, style:'display:block;margin:0rem 0.2rem 0.3rem 0rem; text-align:right',width:'100%', xtype:'label'},
			
			  ]
		  }]
		}
});

//controller
Ext.define('weixin.view.MySalary.MySalaryController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.MySalary',
	onPaymonthSelect: function(sender, ele ){
		Ext.MessageBox.confirm('开发信息', '更新数据', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
	}
	
});



//data model
Ext.define('weixin.view.MySalary.MySalaryModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.Salary',
	fields: ['basicSalary', 'makeupSalary','OTFee', 'Commission','QuarterlyBonus','BenefitRefund','RefundAfterTax',
			'Deduction','Pension','Medical','Unemplyoment','Housing','Tax','DeductionAfterTax','totalSaraly'
	],
    data: {
        basicSalary: '0.00',
		makeupSalary:'0.00',
        OTFee: '336.21',
		Commission:'123,714.00',
		QuarterlyBonus:'--,--',
		BenefitRefund:'0.00',
		RefundAfterTax:'0.00',
		Deduction:'0.00',
		Pension:'0.00',
		Medical:'0.00',
		Unemplyoment:'0.00',
		Housing:'0.00',
		Tax:'0.00',
		DeductionAfterTax:'0.00',
		totalSaraly:'124,234.00'
    }

    //TODO - add data, formulas and/or methods to support your view
});
