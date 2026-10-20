/*
JSX : JavaScript XML
- js 안에 html tag 작성
- component (function)
*/

function User({nmae, age, addr, id, key}) {
    return (
        <div>
            <h2>{nmae}</h2>
            <p>번호 : {id}</p>
            <p>번호 : {key}</p>
            <p>나이 : {age}</p>
            <p>주소 : {addr}</p>
        </div>
    );
}

export default User;