Ext.define('weixin.view.MyPunch', {
	extend: 'Ext.Panel',
	xtype: 'view-MyPunch',
	controller:'punch',
	header:false,
	items:{
		xtype:"form",
		border:false,
		items:[
			{
			xtype:"panel",
			header:false,
			layout:'hbox', border:0,bodyStyle:'padding-bottom:1rem;background-color:#f6f6f6;',
			items:[
				{xtype:'header', glyph:'xf039@FontAwesome', resizeable:true, style:'padding:1rem 1rem 0em 1rem; background-color:#f6f6f6;'},
				{xtype:'image', src:'images/logo.jpg', alt:'mainDiv', resizeable:true},
				{xtype:'header', glyph:'xf00a@FontAwesome', resizeable:true, style:'padding:1rem 0em 0em 1rem;background-color:#f6f6f6;'},
			]	
		  },
		{
layout:"column",border:0,
items:[{
	border:0,resizeable:true,
    items:[{
        xtype:"panel",
		header:false, border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'//&nbsp;',border:0
          },{
            html:'<',style:'display:block; textAlign:center;margin-top:0.4rem;'//background: red; -moz-border-radius: 50px; -webkit-border-radius: 50px; border-radius: 20px;'
          }]
      }]
  },{
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'SUN',border:0
          },{
            html:'1', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem'
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'MON', xtype:'label'
          },{
            html:'2', xtype:'label', style:'display:block; textAlign:center;background-color:silver;margin-top:0.4rem'
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'TUE',border:0
          },{
            html:'3', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'WEN',border:0
          },{
            html:'4', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'THU',border:0
          },{
            html:'5', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  },{
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'FRI',border:0
          },{
            html:'6', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'SAT',border:0
          },{
            html:'7', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  },
  {
	  border:0,
	items:[{
        xtype:"panel",
		header:false,border:0,style: 'margin-left:0.2rem;padding:1rem 0.4rem',
        items:[{
            html:'//',border:0
          },{
            html:'>', xtype:'label', style:'display:block; textAlign:center;margin-top:0.4rem',//style: { display:'block'}
          }]
      }]
  }
  ]
}
		  ,{
			xtype:"panel",border:0,
			items:[
				{xtype:'image', src:'images/signin.gif', alt:'puchView', resizeable:true, id:'signiImageInPunch', 
								listeners: {el: { click: 'OnCheckin'}}
							}
			]
		  },{
			xtype:"panel",
			header:false,border:false,
			items:[
				{html:'日历', border:false},
					{xtype:'panel', header:false, style:'margin:0.4rem 0rem'},
					{xtype:'panel', border:false, layout:'hbox',
						items:[
						{xtype:'button', text:'<', id:'previousDayBtn', itemId:'previousDayBtn', style:'margin-left:0.5rem'},
						{xtype:'button', text:'>', id:'nextDayBtn', itemId:'nextDayBtn', style:'margin: 0rem 1rem'},
						{xtype:'label', html:'Today '+Ext.Date.format(new Date(), 'Y年m月d日')},
						]
					}
			]
		  }]
		}
});



/******************controller********************************/
Ext.define('weixin.view.MyOverwork.punchController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.punch',
	OnCheckin: function(sender, ele ){
		Ext.MessageBox.confirm('签到/签出', '打卡操作结果：后台数据校验的结果。如果是签出，要求\n1.上报地理位置信息到微信平台；2.下发考勤情况', function(btn){ if(btn=='yes') Ext.getCmp('homePage').getLayout().setActiveItem('mainDiv');});
		
	}
});