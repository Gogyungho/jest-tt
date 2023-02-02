const fn = require("../fn.js");

// 테스트 전/후처리 작업  - beforeAll(), afterAll()

/**
 * 만약 전후 작업이 시간이 걸리는 작업이라면 매 테스트마다
 * beforeEach와 afterEach를 사용하면 각 테스트마다 실행되니까 시간이 더 소요된다.
 * 예를들어 DB에서 user정보를 가져왔다가 가져오고 난 후에 DB접속을 끊는 작업을 한다고 하면
 * beforeEach, afterEach는 테스트마다 연결하고 끊고를 반복해서 테스트 소요 시간이 늘어나게 된다.
 *
 * 이떄 테스트 전체 전 후로 한번씩만 호출하는함수가 있다. beforeAll(), afterAll()이다.
 */

/**
 * beforeAll, afterAll은 전체 테스트 전 후로 한번씩만 실행되기 때문에
 * DB연결과 끊는게 0.5초씩 걸리지만 총 테스트 시간은 1.9초가 소요되는걸 알수 있다.
 */

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});

afterAll(() => {
  return fn.disconnectUserDb();
});

test("이름 Flynn", () => {
  expect(user.name).toBe("Flynn");
});

test("나이 33", () => {
  expect(user.age).toBe(33);
});

test("성별 Flynn", () => {
  expect(user.gender).toBe("male");
});

// 만약 DB연동이 여러개 라면 그룹화 하는 방법이 있다.
// describe(), it()이다.
// test() 대신 it() 함수를 사용하기도 하는데, 동일한 기능을 하는 함수다.

describe("자동차 데이터", () => {
  let car;

  beforeAll(async () => {
    car = await fn.connectCarDb();
  });
  afterAll(() => {
    return fn.disconnectCarDb();
  });

  it("car 브랜드", () => {
    expect(car.brand).toBe("kia");
  });

  it("car 이름", () => {
    expect(car.name).toBe("k7");
  });

  it("car color", () => {
    expect(car.color).toBe("white");
  });
});
