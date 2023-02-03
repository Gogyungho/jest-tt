const fn = require("../fn.js");
// mock function

// mock은 실제 객체인 척하는 가짜 객체를 생성하는 매커니즘이라고 할수 있다.
// 또한 테스트가 실행되는 동안 가짜 객체에 어떤 일들이 발생했는지를 기억하기 때문에 객체가 내부적으로 어떻게 사용되는지 검증도 가능하다.
// mock function 은 실제 함수가 아니라 테스트 하기 위해 흉내만 낸 함수이다.

// mock function 생성 - jest.fn()

const mockFn = jest.fn();

mockFn();
mockFn(1);
// 이렇게 만든 mockFn 안에는 mock이라는 프로퍼티가 있는데, 그 안에는 calls 라는 배열이 있다.
// calls로 알수있는 내용은 함수가 총 몇번 호출되었는가와 호출된 함수에 전달된 인수는 무엇인가 이다.
test("함수는 2번 호출됨", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("호출된 함수에 전달된 인수는 1이다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});

const mockFn01 = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn01(num + 1);
  });
}

forEachAdd1([11, 21, 31]);

test("함수는 3번 호출된다. 그리고 전달된 첫번째 인자는 12이다. ", () => {
  expect(mockFn01.mock.calls.length).toBe(3);
  expect(mockFn01.mock.calls[0][0]).toBe(12);
});

const mockFn02 = jest.fn((num) => num * 2);

mockFn02(10);
mockFn02(20);
mockFn02(30);

test("두배 증가한 값이 반환된다.", () => {
  // results에는 리턴된 값이 배열로 들어있다.
  //   [
  //       { type: 'return', value: 20 },
  //       { type: 'return', value: 40 },
  //       { type: 'return', value: 60 },
  //   ]
  expect(mockFn02.mock.results[0].value).toBe(20);
});

// mockReturnValue(리턴값) 함수를 이용해서 어떤 갓을 리턴할지 설정할 수 있다.
const mockFnReturn = jest.fn();
mockFnReturn.mockReturnValue("return value");
console.log(mockFnReturn());

// mockResolveValue(Promise가 return하는 값) 을 사용해 가짜 비동기 함수를 만들 수 있다.
const mockFnResolve = jest.fn();
mockFnResolve.mockResolvedValue({ name: "Flynn" });
test("name: Flynn", () => {
  mockFnResolve().then((res) => {
    expect(res.name).toBe("Flynn");
  });
});

// mockImplementation(...) 함수를 사용하면 즉석에서 재구성이 가능하다.
const mockFnImplementation = jest.fn();
mockFnImplementation.mockImplementation((name) => `I am ${name}`);
console.log(mockFnImplementation("Flynn"));

// jest.mock("...")
// mocking module을 이용하면 실제 데이터를 생성하는게 아니라
// mockReturnValue로 리턴해준 mock함수가 반환될뿐이다.
jest.mock("../fn");
fn.createUser.mockReturnValue({ name: "Louis" });

test("유저 생성됨", () => {
  const user = fn.createUser("Louis");
  expect(user.name).toBe("Louis");
});

// 그밖에 유용한 Matcher함수들
/**
 * toBeCalled(); 한번이라고 호출되면 통과
 * toBeCalledTimes(); 정확한 호출 횟수
 * toBeCalledWith(); 인수로 어떤 값들을 받았는지 체크
 * lastCalledWith(); 인수 체크는 동일한데 마지막으로 실행된 함수의 인수들만 체크한다.
 */
