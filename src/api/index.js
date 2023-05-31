import api from "./apis.js";
import axios from "axios";
// import qs from "qs";
// import store from "@/store";
// import { Message } from "element-ui";
import { Config, ApiRoot } from "@/config";

axios.defaults.timeout = Config.requestTimeOut || 1000 * 60; //响应时间
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"; //配置请求头
axios.defaults.baseURL = ApiRoot;

var loginFlag = true;
var loginfl = true;
axios.interceptors.request.use(
  async (config) => {
    //在发送请求之前做某件事
    // if (config.method === "post") {
    //   config.data = config.data ? config.data : {};
    //   // config.data = qs.stringify(config.data);
    // }
    // let token = store.getters.token;
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    // if (!token) {
    //   throw new axios.Cancel("请求已取消，缺少token");
    // }
    return config;
  },
  (error) => {
    console.log("错误的传参");
    return Promise.reject(error);
  }
);

// // 判断结果
axios.interceptors.response.use(
  (response) => {
    let data = response.data;
    return Promise.resolve(data);
  },
  (error) => {
    if (error && error.response && error.response.data) {
      switch (error.response.data.code) {
        case 500:
          break;
        case 30402:
        case 30401:
          if (loginfl) {
            loginfl = false;
            // Message({
            //   message: "会话过期,请重新登录",
            //   type: "warning",
            // });
            setTimeout(() => {
              // loginFlag = true;
              localStorage.setItem("Authorization", "");
              loginfl = true;
            }, 1000);
          }
          break;
        default:
          break;
      }
    }
  }
);
const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const put = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const del = (url, param) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params: param })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

////返回一个Promise(发送get请求)
const get = (url, param) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const postfile = (url, params) => {
  return new Promise((resolve, reject) => {
    var param = new FormData();
    if (params.file) {
      // for (let i = 0; i < params.file.length; i++){
        param.append("pic", params.file);
      // }
    } else {
      param.append("xml", params.xml);
    }
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    let token = store.getters.token;
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      headers.token = token;
    }
    axios.create({ timeout: Config.requestTimeOut || 1000 * 10, headers })({
        data: param,
        type: "file",
        method: "POST",
        url,
      })
      .then((response) => {
        let data = response.data;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const API = {};
const gen = (api) => {
  let paramsArray = api.split(" "),
    method = "GET",
    url = api;
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = paramsArray[1];
  }
  return function (params) {
    if (method == "POST") {
      return post(url, params);
    }
    if (method == "PUT") {
      return put(url, params);
    }
    if (method == "DEL") {
      return del(url, params);
    }
    if (method == "UPLOAD") {
      return postfile(url, params);
    }
    return get(url, params);
  };
};
for (const key in api) {
  API[key] = gen(api[key]);
}

export default API;
