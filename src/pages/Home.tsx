import { getUserInfo } from '../api/api';
import { useEffect, useState } from 'react';
import { UserData } from '../types/types';
import UserCard from '../components/UserCard';

const Home = () => {
    const [users, setUsers] = useState<UserData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const user1 = await getUserInfo(18);
                const user2 = await getUserInfo(12);
                setUsers([user1, user2]);
            } catch (error) {
                console.error(error);
            }
        };
        void fetchUsers();
    }, []);
    

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default Home;