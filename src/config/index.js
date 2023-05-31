export const Config = {
  tokenExpireTime: 30 * 24,
  requestTimeOut: 1000 * 60,
};
export const ApiRoot = process.env.NODE_ENV === "development" ? "https://www.yunlogin.com" : "/";
export const tokenCookie = "Authorization";
export const permissionsCookie = "Premission";
export const userInfoCookie = "Userinfo";