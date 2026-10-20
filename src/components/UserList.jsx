import User from "./User";

function UserList() {
    const users = [
        {id: 1, name: 'jaebeom', age: 100, addr: 'seoul'},
        {id: 2, name: 'kim-sd', age: 50, addr: 'suwon'},
        {id: 3, name: 'lee-ss', age: 70, addr: 'incheon'}
    ];

    return (
        <div>
            <h1>사용자 목록</h1>
            {
                users.map((user) => (
                    // key : react가 component를 식별할 수 있도록 사용하는 변수 (변하지 않는 값으로 사용 권장)
                    <User
                        addr={user.addr}
                        key={user.id}
                        age={user.age}
                        id={user.id}
                        name={user.name}
                    />)
                )
            }
        </div>
    );
}

export default UserList;