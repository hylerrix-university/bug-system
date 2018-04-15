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

            // 存储用户个人信息
            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)
            localStorage.setItem('userId', result.data.userId)
            localStorage.setItem('name', result.data.name)
            localStorage.setItem('role', result.data.role)
            localStorage.setItem('department', result.data.department)
            localStorage.setItem('createTime', result.data.createTime)
            localStorage.setItem('email', result.data.email)

            // 存储用户负责的缺陷
            $.get('http://yiranblade.cn/bugsystem/bug/user/' + result.data.userId, function (data) {
                if (data.code == 200 ){
                    localStorage.setItem('userBug', data.data)
                    // 存储用户负责的项目
                    $.get('http://yiranblade.cn/bugsystem/project/' + username, function (data) {
                        if (data.code == 200 ){
                            localStorage.setItem('userProject', data.data)
                            window.location.href = './index.html'
                        } else {
                            alert('获取用户负责的项目失败')
                        }
                    })
                } else {
                    alert('获取用户负责的缺陷失败')
                }
            })
        } else {
            alert("账号密码输入错误！")
        }
    })
}