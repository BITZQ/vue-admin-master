import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  //Mock.mock:根据数据模板生成模拟数据。
  Users.push(Mock.mock({
    //Mock.Random 是一个工具类，用于生成各种随机数据。
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    //'name|min-max': number,生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };


/*

 Mock.mock():
 Mock.mock( rurl?, rtype?, template|function( options ) )
 rul:表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
 rtype:表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
 template:表示数据模板，可以是对象或字符串。例如 { 'data|1-10':[{}] }、'@EMAIL'。
 function(options):表示用于生成响应数据的函数。

 用 @ 来标识其后的字符串是 占位符。
 占位符 引用的是 Mock.Random 中的方法。





 */