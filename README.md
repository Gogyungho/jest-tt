## jest tutorial

`코잉앙마` 유투브를 바탕으로 `jest`를 간단하게 연습한 내용입니다.

### 사용한 Matcher

- toBe()
- toEqual() / toStrictEqual()
- toBeNull() / toBeUndefined() /toBeDefined()
- toBeTruthy() / toBeFalsy()
- toBeGreaterThanOrEqual() / toBeGreaterThan()
- toBeLessThanOrEqual() / toBeLessThan()
- toBeCloseTo()
- toMatch()
- toContain()
- toThrow()

### 테스트 전/후 작업

- beforeEach(), afterEach()
- beforAll(), afterAll()

### 그룹화

- describe(), it()

### 테스트 코드 디버깅

- only(), skip()

### mock function

- jest.fn()
  - mock.calls, mock.results
  - mockReturnValue(), mockResolvedValue(), mockImplementation()
- jest.mock()
