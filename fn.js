const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  thorwErr: () => {
    throw new Error("error");
  },
};

module.exports = fn;
