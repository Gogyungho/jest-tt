const fn = require("../fn.js");
const { default: expect } = require("expect");

// toBe() 단순한 값 비교
// toEqual() 객체 비교
// toStrictEqual() 더욱 엄격한 객체 비교

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

// 비동기 코드 테스트

// 1. callback 테스트
test("3초 후에 받아온 이름은 Flynn", (done) => {
  /**
   * Jest는 테스트 함수를 최대한 빠르게 호출해서 실행시킨다.
   * 그래야 성능도 좋기 때문이다.
   * callback 함수를 호출해서 테스트 해보고 싶다면 done()함수를 인자로 받도록 해서
   * 비동기 코드 테스트를 하니까 콜백함수를 테스트 해보겠다고 인지 시켜줘야 한다.
   * 다음과 같이 done() 함수를 인자로 받고, 콜백 함수 마지막에 호출하도록 하면 된다.
   */
  function callback(name) {
    try {
      expect(name).toBe("Flynn");
      done();
    } catch (error) {
      done();
    }
  }
  fn.getName(callback);
});

// 2. Promise 테스트
//resolves, rejects
test("3초 후에 받아온 나이는 33", () => {
  /**
   * Promise는 테스트 함수 앞에 반드시 return 을 넣어주어야 한다.
   * callback 처럼 done함수를 넘겨주지 않아도 된다.
   */
  // return fn.getAge().then((age) => {
  //   expect(age).toBe(33);
  // });
  return expect(fn.getAge()).resolves.toBe(33);
});

// 3. async/await
test("3초 후에 받아온 나이는 33", async () => {
  await expect(fn.getAge()).resolves.toBe(33);
});
