import { getUserInfo } from '../api/api';
import { useEffect, useState } from 'react';
import { UserData } from '../types/types';
import UserCard from '../components/UserCard';
import '../styles/pages/home.scss';
const Home = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    const [userMock, setUserMock] = useState<UserData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const user1 = await getUserInfo(18);
                const user2 = await getUserInfo(12);

                const userMock1 = await getUserInfo(18, true);
                const userMock2 = await getUserInfo(12, true);

                const validUsers = [user1, user2].filter((user): user is UserData => user !== undefined);
                const validUserMock = [userMock1, userMock2].filter((user): user is UserData => user !== undefined);
                
                setUserMock(validUserMock);
                setUsers(validUsers);
            } catch (error) {
                console.error(error);
            }
        };
        void fetchUsers();
    }, []);
    

    return (
        <div className="home">
            <div className="home__users">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <div className="home__users">
                {userMock.map((user) => (
                    <UserCard key={user.id} user={user} isMock={true} />
                ))}
            </div>
        </div>
    );
}

export default Home;