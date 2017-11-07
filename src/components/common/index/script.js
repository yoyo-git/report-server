export default {
  name: 'hello',
  data () {
    return {
      msg: ' App'
    }
  },
  methods: {
    login () {
      var self = this
      var u = $('input[name=username]')
      var p = $('input[name=password]')
      if (u.val() === '' || p.val() === '') {
        $('#ts').html('用户名或密码不能为空~')
        self.isShow()
        return false
      } else {
        var reg = /^[0-9A-Za-z]+$/
        if (!reg.exec(u.val())) {
          $('#ts').html('用户名错误')
          self.isShow()
          return false
        }
      }
    },
    // 是否显示
    isShow () {
      $('.alert').show().animate({
        'top': '45%'
      }, 300)
    },
    // 是否隐藏
    isHide () {
      $('.alert').animate({
        'top': '-40%'
      }, 300)
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
    var self = this
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
    $('.btn').click(function () {
      self.isHide()
    })
  }
}
