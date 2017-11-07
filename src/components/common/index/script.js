$('.btn').click(function () {
  isHide()
})
var u = $('input[name=username]')
var p = $('input[name=password]')
$('#submit').on('click', function () {
  if (u.val() === '' || p.val() === '') {
    $('#ts').html('用户名或密码不能为空~')
    isShow()
    return false
  } else {
    var reg = /^[0-9A-Za-z]+$/
    if (!reg.exec(u.val())) {
      $('#ts').html('用户名错误')
      isShow()
      return false
    }
  }
})
window.onload = function () {
  $('.connect p').eq(0).animate({
    'left': '0%'
  }, 600)
  $('.connect p').eq(1).animate({
    'left': '0%'
  }, 400)
}

function isHide () {
  $('.alert').animate({
    'top': '-40%'
  }, 300)
}

function isShow () {
  $('.alert').show().animate({
    'top': '45%'
  }, 300)
}

