import { useState, useEffect } from "react";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getPosts = async ()=>{

            try {
                const [response] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/posts"),
                    new Promise((resolve)=>setTimeout(resolve, 2000))
                ]);

                if (!response.ok) {
                    throw new Error("게시글을 불러오지 못했습니다.");
                }
                const data = await response.json();
                setPosts(data);

            }catch (err) {
                setError(err.message);

            }finally {
                setLoading(false);
            }
        }
        getPosts();
    }, []);

    if (loading) {
        return <h2>로딩중...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return(
        <div>
            <h2>게시글 목록</h2>
            {
                posts.map((post)=> (
                    <div key={post.id}>
                        <h3>{post.id} : {post.title}</h3>
                        <p>{post.boey}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Posts;