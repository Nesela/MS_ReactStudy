import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>
                내가 원하는 페이지로 이동할 수 있다.
            </p>

            <Link to="/users">
                <button>사용자 목록</button>
            </Link>

            <Link to="/posts">
                <button>게시글 목록</button>
            </Link>

        </div>
    )
}

export default Home;