// 判断是否登录
var isLogin = localStorage.getItem('isLogin')
if (isLogin == "false" || !isLogin) {
    alert('请先登录！')
    window.location.href = './login.html'
}

function logout () {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    alert('注销成功，欢迎下次光临！')
    window.location.href = './login.html'
}