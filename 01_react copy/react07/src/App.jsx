import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

function App() {

  /*
  Link : 사용자가 클릭해서 이동할 수 있는 링크
  Route : 주소와 컴포넌트를 연결
  Routes : Route와 요청된 URL 연결해서 해당 화면을 표시
  */
  
  return (
    <div>
      <h1>react07</h1>
      <nav>
      <Link to="/">Home</Link> {' | '}
      <Link to="/users">사용자목록</Link> {' | '}
      <Link to="/posts">게시글목록</Link> {' | '}
      </nav>
      
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

    </div>
  );
}

export default App;