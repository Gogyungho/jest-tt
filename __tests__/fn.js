const fn = require("../fn.js");

test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("이름과 나이를 전달받아서 반환해쥬", () => {
  expect(fn.makeUser("flynn", 33)).toStrictEqual({
    name: "flynn",
    age: 33,
    gender: undefined,
  });
});

// toBeNumm
// toBeUndefined
// toBeDefined

test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBefalsy

test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

test("0은 false입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

// toBeGreaterThan 크다.
// toBeGreaterThanOrEqual 크거나 같다.
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다.

test("id는 10자 이아 하여 한다. ", () => {
  const id = "ID_LENGTH_St34asE2";
  expect(id.length).toBeGreaterThanOrEqual(10);
});

test("0.1더하기 0.3은 0.4이다.", () => {
  // JS는 소수점을 정확하게 계산해 내지 못한다.
  // 컴퓨터가 이진법을 사용하기 때문에 소수를 이진법으로 바꿨을때 간혹 무한소수가 되어버린다.
  // toBeCloseTo() 근사치 값을 확인해 준다.
  expect(fn.add(0.1, 0.3)).toBeCloseTo(0.4);
});

test("Hello World에 h 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContain

test("List에 Flynn이 있나?", () => {
  const user = "Flynn";
  const userList = ["Jane", "Flynn", "Louis"];
  expect(userList).toContain(user);
});

// 어떤 작업을 했을때, 특정 에러가 발생하는지 확인할떄
test("error가 나는가?", () => {
  expect(() => fn.thorwErr()).toThrow("error");
});
