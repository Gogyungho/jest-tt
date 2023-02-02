const data = require("../data.js");
const userService = require("../userService.js");

// 테스트 전/후처리 작업 - afterEach()

test("find all user", () => {
  data.users.push(
    { id: 1, email: "flynn1@test.com" },
    { id: 2, email: "flynn2@test.com" },
    { id: 3, email: "flynn3@test.com" }
  );

  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "flynn1@test.com" });
});

test("creat user", () => {
  const user = { id: 4, email: "flynn4@test.com" };

  userService.create(user);
  expect(data.users).toHaveLength(1);
  // 위 findAll테스트에서 data 모듈의 users 배열 값이 추가됐던 것이 두번째 테스트에도 영향을 준다.
  // 그래서 toHaveLength(1)을 넣으면 테스트 실패가 뜬다.
});

// 위 같은 상황을 막기 위해서는 각 테스트 전 후로 data모듈에 있는 데이터를 정리해줘야 한다.

// afterEach()로 데이터 정리
afterEach(() => {
  //이렇게 작성된 afterEach()함수는 각 테스트가 실행 후 한번씩 호출된다.
  data.users.splice(0);
});
