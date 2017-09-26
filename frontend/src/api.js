module.exports = {
  user: {
    login: function (email, password) {
      return fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      })
        .then(res => res.json())
        .then(res => {
          if (res.status !== "ok") {
            throw new Error(res.reason);
          }
        });
    },
    current: function () {
      return fetch("/api/user/current", {
        method: "GET",
        credentials: "same-origin"
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
        method: "POST",
        credentials: "same-origin"
      })
        .then(res => res.json())
        .then(res => {
          if(res.status !== "ok"){
              throw new Error(res.reason);
          }
        });
    }
  },
  contest: {
    all: function() {
      return fetch("/api/contest/")
        .then(res => res.json())
        .then(res => {
          if(res.status === "ok") {
            return res.contests;
          } else {
            throw res.err;
          }
        });
    }, 
    byId: function(id) {
      return fetch(`/api/contest/${id}`)
        .then(res => res.json())
        .then(res => {
          if(res.status === "ok") {
            return res.contest;
          } else {
            throw res.err;
          }
        });
    }
  }
}