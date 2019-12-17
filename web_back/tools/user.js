//使用user.js对项目中与用户操作有关的请求功能进行保存
var user = {
    // 设置login方法，用来进行登录请求操作
    // 设置login方法,用来进行登录请求操作
    // login: function (data, success) {
    //     $.ajax({
    //         type: 'POST',
    //         url: LOGIN,
    //         data: {
    //             user_name: data.user_name,
    //             password: data.password
    //         },
    //         //
    //         success: success
    //     })
    // }
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                // 根据res.code进行成功失败检测
                if (res.code == '200') {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    logout: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGOUT,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        })
    }
}