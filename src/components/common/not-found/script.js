
export default {
  name: 'hello',
  data () {
    return {
      msg: ' App'
    }
  },
  methods: {
  	//2.将盒子方法放入这个方，方便法统一调用
    centerWindow (a) {
    	var self = this;
    	self.center(a);
			//自适应窗口
			$(window).bind('scroll resize',
			function() {
				self.center(a);
			});
    },
    center(a) {
    	var wWidth = $(window).width();
		var wHeight = $(window).height();
		var boxWidth = $(a).width();
		var boxHeight = $(a).height();
		var scrollTop = $(window).scrollTop();
		var scrollLeft = $(window).scrollLeft();
		var top = scrollTop + (wHeight - boxHeight) / 2;
		var left = scrollLeft + (wWidth - boxWidth) / 2;
		$(a).css({
			"top": top,
			"left": left
		});
    }
  },
  // 在挂载开始之前被调用
  beforeMount () {
  	
  },
  mounted () {
  	var h = $(window).height();
		$('body').height(h);
		$('.mianBox').height(h);
		this.centerWindow(".tipInfo");
		
    var wait = document.getElementById('wait'),
		href = document.getElementById('href').href;
		var interval = setInterval(function() {
		var time = --wait.innerHTML;
		if(time <= 0) {
			clearInterval(interval);
			//location.href = href;
			//alert("开始跳转提示");
		};
	}, 1000);
  }
}
