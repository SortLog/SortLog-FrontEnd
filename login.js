$.ajax({
    url: '/login',
    type: 'POST',
    dataType: "json",
    data: {
        "username": username,
        "password": password,
    },
    success: function(result1) {
        //获取后台数据result1
        if ("true" === result1.flag) {
            //信息正确，跳转到首页
            window.location.href = "/common/index";
        } else if ("false" === result1.flag) {
            $("#tip2").html("用户不存在!");
        }
    },
    async: true,
    error: function() {
        //请求失败跳转到登录
        window.location.href = "/tologin";
    }
})