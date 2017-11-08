export default {
  name: 'hello',
  data () {
    return {
      msg: ' App'
    }
  },
  methods: {
    login () {
    	layer.msg('请输入正确的数据', {shift:6,icon: 5})
      var u = $('input[name=username]')
      var p = $('input[name=password]')
      if (u.val() === '' || p.val() === '') {
        $('#ts').html('用户名或密码不能为空~')
        return false
      } else {
        var reg = /^[0-9A-Za-z]+$/
        if (!reg.exec(u.val())) {
          $('#ts').html('用户名错误')
          return false
        }
      }
      this.API.getUserJobList({})
      .then(function (res) {
        console.log(res)
      })
    }
  },
  mounted () {
    // 初期加载动画
    $('.connect p').eq(0).animate({
      'left': '0%'
    }, 600)
    $('.connect p').eq(1).animate({
      'left': '0%'
    }, 400)
    // 计数
    var count = 0
    // 循环动画
    var trunAround = function () {
      if (count === 3) {
        count = 0
      }
      var param = {
        '0': true,
        '1': true,
        '2': true
      }
      param[count.toString()] = false
      if (param['0']) {
        // 动画
        $('.slide-0').animate({'opacity': '0'}, 3000, function () {})
      }
      if (param['1']) {
        // 动画
        $('.slide-1').animate({'opacity': '0'}, 3000, function () {})
      }
      if (param['2']) {
        // 动画
        $('.slide-2').animate({'opacity': '0'}, 3000, function () {})
      }
      $('.slide-' + (count)).animate({'opacity': '1'}, 3000, function () {
        count++
        trunAround()
      })
    }
    trunAround()
  }
}
