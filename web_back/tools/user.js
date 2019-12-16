// 使用user.js对项目中与用户操作有关的
// var user = {
//     login: function (data, success) {
//         $.ajax({
//             type: 'post',
//             url: LOGIN,
//             data: {
//                 user_name: data.user_name,
//                 password: data.password
//             },
//             success: success
//         });
//     }
// }
var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    // 退出功能
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })

    }
}



