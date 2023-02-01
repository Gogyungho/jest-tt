const fn = require("../fn.js");

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
