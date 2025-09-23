// 登录接口参数类型
export interface loginFormData {
  username: string;
  password: string;
}

interface datatype {
  token: string;
}
// 登录接口返回数据类型
export interface loginResponseData {
  code: number;
  data: datatype;
}

interface userInfo {
  userId: number;
  avatar: string;
  usernamre: string;
  password: string;
  des: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface user {
  checkUser: userInfo;
}
// 获取用户信息接口返回数据类型
export interface userInfoReponseData {
  code: number;
  data: user;
}
