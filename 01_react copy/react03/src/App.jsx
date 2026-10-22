import {useState} from "react";

function App() {
  
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const [users, setUsers] = useState([
    {id: 1, name: "hong-gd"},
    {id: 2, name: "kim-sd"}
  ]);

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count -1);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const addUser = () =>{
    if (name.trim() === "") {
      return;
    }

    const newUser = {
      id: users.length + 1,
      name: name
    };
    setUsers([...users, newUser]);
    setName("");
  }

  return (
    <div>
      <h1>react03</h1>
      <h2>counter</h2>
      <p>현재 숫자 : {count}</p>
      <button onClick={increase}>+1</button>
      <br />
      <button onClick={decrease}>-1</button>

      <hr />

      <h2>input</h2>
      <input type="text" value={name} onChange={nameChange} placeholder="이름 입력" />
      <p>입력값 : {name}</p>

      <hr />

      <h2>사용자 추가</h2>

      <button onClick={addUser}>추가</button>
      <ul>
        {
          users.map((user)=>(
            <li key={user.id}>{user.id} : {users.name}</li>
          ))
        }
      </ul>
    </div>

  );
}

export default App;