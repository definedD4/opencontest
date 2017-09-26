module.exports = {
  user: {
    login: function (email, password) {
      return fetch("/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.status !== "ok") {
            throw new Error(res.reason);
          }
        });
    },
    current: function () {
      return fetch("/user/current", {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          if (res.status !== "ok") {
            throw new Error(res.reason);
          } else {
            return res.user;
          }
        });
    },
    logout: function () {
      return fetch("/user/logout", {
        method: "POST"
      })
        .then(res => res.json())
        .then(res => {
          if(res.status !== "ok"){
              throw new Error(res.reason);
          }
        });
    }
  }
}