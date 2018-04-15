$("#login").click(function () {
    doLogin()
})

function doLogin () {
    var userName = $("#username").val()
    var password = $("#password").val()
    if (userName.length !== 8) {
        alert("账号为 8 位，您的输入有误！")
        return
    } else if (!password || password.length < 6) {
        alert("密码至少 6 位，您的输入有误！")
        return
    }
    $.post("http://yiranblade.cn/bugsystem/login", {
        userName: userName,
        password, password
    }, function (result) {
        if (result.code == 200) {
            localStorage.setItem('isLogin', 'true')
            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)
            window.location.href = './index.html'
        } else {
            alert("账号密码输入错误！")
        }
    })
}