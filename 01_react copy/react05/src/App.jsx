import { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("student");
    const [agree, setAgree] = useState(false);

    const [result, setResult] = useState(null);

    const nameChange = (e) =>{
        setName(e.target.value);
    }
    const emailChange = (e) =>{
        setEmail(e.target.value);
    }
    const submitEvent = (e) =>{
        // form에서 submit event가 발생했을 때 , "새로고침" 방지
        e.preventDefault();

        if (name.trim() === "") {
            alert("이름을 반드시 입력해 주세요!");
            return;
        }
        if (email.trim() === "") {
            alert("이메일을 반드시 입력해 주세요!");
            return;
        }
        if (!agree) {
            alert("반드시 개인정보 이용에 동의해 주세요!");
            return;
        }

        setResult({
            name: name,
            emial: email,
            role: role
        });


    }

    return(
        <div>
            <h1>react05</h1>
            <h2>회원정보</h2>
            <form onSubmit={submitEvent}>
                <div>
                    <label>이름 :</label>
                    <input type="text" value={name} onChange={nameChange} placeholder="이름 입력"/>
                </div>
                <div>
                    <label>이메일 :</label>
                    <input type="email" value={email} onChange={emailChange} placeholder="이메일 입력" />
                </div>
                <div>
                    <label>역활 : </label>
                    <select value={role} onChange={(e)=>setRole(e.target.value)}>
                        <option value={"student"}>학생</option>
                        <option value={"teacher"}>강사</option>
                        <option value={"admin"}>관리자</option>
                    </select>
                </div>
                <div>
                    <label >
                        <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
                        개인정보 이용 동의
                    </label>
                </div>
                <button type="submit">회원가입</button>
            </form>

            <hr />

            <h2>가입 결과</h2>

            {
                result && (
                    <div>
                        <p>이름 : {result.name}</p>
                        <p>이메일 : {result.emaial}</p>
                        <p>역할 : {result.role}</p>
                    </div>
                )
            }
        </div>
    );

}

export default App;