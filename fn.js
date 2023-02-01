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
};

module.exports = fn;
