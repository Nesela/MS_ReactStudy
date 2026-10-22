import useGetData from "./hooks/useGetData";


function App() {

  const {
    data: posts,
    loading: loading,
    error: error
  } = useGetData("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <h2>로딩중...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>react06</h1>
      <h2>게시글 목록</h2>
      {
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.id}: {post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;