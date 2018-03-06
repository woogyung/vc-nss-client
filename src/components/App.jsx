import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home.jsx';

/* Day 13: React Router (https://reacttraining.com/react-router/) */

// 1. Render a react router (a react component)

// 2. Configure react router

// 3. Route parameters

// 4. Query String

// 5. Redirect

const LoginForm = () => {
  return (
    <div>
      <h2>로그인해</h2>
      <label>사용자이름</label>
      <input type="text" />
      <label>비밀번호</label>
      <input type="text" />
    </div>
  );
};

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      [ 시티저널 허송빈 기자 ] 안희정 전 충남도지사의 성폭행 폭로에 지지 그룹의 이탈이 이어지는 등 후폭풍이 계속되고 있다.

      우선 안 전 지사의 트위터 지지자 그룹 공식 계정(@teamsteelbird) 운영진은 이달 5일 성명을 통해 가해자의 정치 철학은 더 이상 의미가 없으며, 피해자에게 지자와 연대를 보내고 2차 가해에 함께 대응하겠다고 밝혔다.

      공식 계정의 활동은 성명서를 끝으로 종료하고, 일주일 후 계정을 삭제한다는 계획을 알렸다.

      안희정 지지 그룹의 페이스북 역시 마찬가지 상황이다.

      회원수 1만명에 육박하는 페이스북의 안희정 지지 그룹은 그 이름을 희망찬 대한민국 안희정과 함께(희망대안)에서 안희정과 함께를 삭제하면서 안희정과 이별을 고했다.

      이른바 안희정계로 구별되는 6·13 지방 선거 예비 후보자들의 선거 중단도 잇따른다.

      박수현 충남도지사 예비 후보는 6일 아산시청에서 개최 예정이던 정책 기자 간담회를 취소하고, 논평을 통해 선거 운동을 중단하겠다고 밝혔다.

      안희정 측근 그룹으로 분류되고 있는 허태정 대전시장 예비 후보 역시 민주당 대전시당에서 6일 열기로 한 정책 발표회를 중앙당 공직 후보 검증 위원회 등록 마감 일정과 겹쳐 연기했다.

      지역 정가에서는 중앙당 일정은 표면적인 이유며, 사태 추이를 지켜 보는 상황으로 분석 중이다.

      안 전 지사 재임 시절 정무 부지사를 지냈던 허승욱 전 정무 부지사는 6·13 지방 선거와 함께 치러지는 천안갑 국회의원 선거 불출마를 저울질 중인 것으로 전해진다.

      이번 지방 선거를 앞두고 나락으로 떨어진 안희정의 위상에 선거판이 예측 불가능하게 흘러가고 있다.
    </p>
  </div>
);

const Question = ({ match, location, history }) => (
  <div>
    <h3>나는 {match.params.questionId}번 질문입니다.</h3>
    <p>나는 {match.params.questionId}번 질문에 대한 답변입니다.</p>
    {
      history.location.search && <p>쿼리 스트링: {history.location.search}</p>
    }
  </div>
);

const QnAs = ({ match }) => (
  <div>
    <h2>Q&A</h2>

    <ul>
      <li>
        <Link to={`${match.url}/1`}>
          질문 1번입니다.
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>
          질문 2번입니다.
        </Link>
      </li>
      <li>
        <Link to={{
          pathname: `${match.url}/3`,
          search: '?hello=world'
        }}>
          질문 3번입니다.
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:questionId`} component={Question}/>
    <Route exact path={match.url} render={() => (
      <h3>질문 좀 선택해라!</h3>
    )}/>
  </div>
);

export default class App extends React.Component {
  constructor() {
    super();

    this.state ={
      isLoggedIn: false
    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/qna">Q&A</Link>
            </li>
          </ul>
          <Route path="/login" render={() => {
            return !this.state.isLoggedIn ? <LoginForm /> : <Redirect to="/home" />
          }} />
          <Route path="/home" render={() => {
            return this.state.isLoggedIn ? <Home /> : <Redirect to="/login" />
          }} />
          <Route path="/about" component={About} />
          <Route path="/qna" component={QnAs} />
        </div>
      </Router>
    );
  }
}
