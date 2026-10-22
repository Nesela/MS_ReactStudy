import { useState, useEffect } from "react"

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            // https://jsonplaceholder.typicode.com/users

            try {

                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("사용자 정보를 불러오지 못했습니다.")
                }

                const data = await response.json();

                setUsers(data);

            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }

        };

        getUsers();

    }, []);

    if (loading) {
        return <h2>로딩중...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>사용자 목록</h2>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>이메일 : {user.email}</p>
                        <p>회사 : {user.company.name}</p>
                    </div>

                ))
            }
        </div>
    );

}

export default Users;


