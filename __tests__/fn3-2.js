const data = require("../data.js");
const userService = require("../userService.js");

// 테스트 전/후처리 작업  - beforeEach()

/**
 * 여러 테스트를 중복해서 작성하면 유지보수가 어렵고,
 * 초기 데이터가 업데이트되어서 제대로된 테스트가 어려울수 있다.
 * 이때 각 데스트 전에 데이터를 다시 세팅해줘서 데이터가 중복되는걸 막아준다.
 */
beforeEach(() => {
  data.users.push(
    { id: 1, email: "flynn1@test.com" },
    { id: 2, email: "flynn2@test.com" },
    { id: 3, email: "flynn3@test.com" }
  );
});

test("find all user", () => {
  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "flynn1@test.com" });
});

test("destory user", () => {
  const id = 2;
  const user = data.users.find((user) => user.id === id);

  userService.destroy(2);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
});
