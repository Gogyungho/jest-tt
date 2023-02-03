const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  thorwErr: () => {
    throw new Error("error");
  },
  getName: (callback) => {
    const name = "Flynn";
    setTimeout(() => {
      callback(name);
      //throw new Error("error...");
    }, 3000);
  },
  getAge: () => {
    const age = 33;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Flynn",
          age: 33,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "kia",
          name: "k7",
          color: "white",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  createUser: (name) => {
    console.log("사용자가 생성됨");
    return {
      name,
    };
  },
};

module.exports = fn;
