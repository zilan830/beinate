import ajax from "./base";

const apiList = {};

apiList.testApi = data => {
  return ajax({ ...data }, "login").then(res => {
    if (res.retCode === "10000") {
      return res;
    } else {
      throw res.message;
    }
  });
};

apiList.sendEmail = data => {
  return ajax("/mail/send", data)
    .then(data => {
      console.log("$PARANSdata......", data);
      return data;
    })
    .catch(err => {
      console.log("$PARANSerr......", err);
      throw err;
    });
};

export default apiList;
