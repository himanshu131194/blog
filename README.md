# blog
블로그@v2 - notion api 를 활용하여 블로그 만들기

## 사용 기술
### 백엔드
- FE 개발에 집중하고 싶어, 많이 사용해 본 express 를 사용할 생각이고 후에 사람들이 쉽게 커스텀하기 위한 용도로 express 사용  
  nest.js 도 사용해봤지만 express 가 편하고 다른 분들이 커스텀하기 좋은게 express 같음 (nest.js 는 러닝커브 있다고 판단)

- `express`
- `monogodb`, `mongoose` 
- `javascript`
- `jest` 및 `unit-test`, `integration test` 

- SQL 과 NOSQL DB 에 대해서 고민했지만, 프로젝트 구상으로 frontend 는 notion-api 가 제공하는 데이터를 기반으로 서비스 할 예정  
=> 즉, Client 는 개인 백엔드 서버와 notion-api 로 응답 모두 커버 가능하게 할 생각  
=> 그렇다면 backend 에 notion-api 가 넘겨준 데이터를 그대로 저장시킬 예정   
=> 이때 용이한게 NOSQL 구조가 적합하다고 판단
- 백엔드를 만든 이유가 notion-api 로 요청한 데이터의 응답이 느려(1~3s) 속도 개선을 위해 개인 backend 및 DB 를 구축하여 처리할 예정

### 프론트엔드
- `react` or `nextjs`
- `javascript` or `typescript`
- `emotion.js` or `styled-component` / `antd`??
- `notion-render-x` 
- `jest`, `react-testing-library`(unit-test, integration-test), `cypress`(e2e)

### 향후
- 우선 최대한 빨리 간단하게 만들 예정으로 javascript 로 구현할 생각!?  
  단, test 코드는 작성하고자 함.(평소에 test 코드를 좋아하기도하고 향후 리팩토링도 생각하고 있기에 관리 용이하기 위함)
