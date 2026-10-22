// useState + useEffect + fetch
import { useState, useEffect } from "react";

function App() {
    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const [response] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/posts"),
                new Promise(resolve => setTimeout(resolve, 2000))
            ]);

            if (!response.ok) {
                throw new Error("게시글 불러오기 실패")
            }

            const data = await response.json();

            setPosts(data);

        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // useEffect(fn,, []) -> 처음 렌더링 될 때 "단 한번만" 실행
    useEffect(()=>{
        getPosts();
    }, []);

    if (loading) {
        return <h1>로딩중...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (

        <div>
            <h1>react04</h1>
            <h2>게시글 목록</h2>
            {
                posts.map((post)=>(
                    <div key={post.id}>
                        <h3>{post.id}: {post.title}</h3>
                        <p>
                            {post.body}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default App;