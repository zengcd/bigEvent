// 用来保存网站中的一些配置信息
// ---例如所有的接口地址，都可以统一保存在这个文件中

//下面这些保存配置信息的变量最好避免被其他代码不小心修改了
//      -可以将变量命名书写为全大写形式
// camelCase--驼峰命名法
// snake_case--蛇形命名法或者下划线命名法



// 基地址，后续的接口地址都基于基地址拼接即可
var BASE_URL = 'http://localhost:8000/';
// 登录
var LOGIN = BASE_URL + 'admin/login';
// 退出
var LOGOUT = BASE_URL + 'admin/logout';