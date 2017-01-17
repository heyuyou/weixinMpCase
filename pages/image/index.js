Page({
	data:{
		imgHeight:0
	},
	onLoad:function(options){
		var that = this;
		wx.getSystemInfo({
			success:function(res){
				var w = res.windowWidth;
                that.setData({
                	imgHeight:w*0.5
                })
			}
		})
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		