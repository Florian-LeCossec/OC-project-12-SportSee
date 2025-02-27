import { useState, useEffect } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { UserActivity, UserData } from '../types/types';
import { getUserActivity, getUserInfo } from '../api/api';
import UserActivityGraph from '../components/UserActivityGraph';

const Dashboard = () => {
    const { userId } = useParams();
    const isMock = !!useMatch("/mock/user/:userId");
    const [user, setUser] = useState<UserData>();
    const [activity, setActivity] = useState<UserActivity>()
    const [loading, setLoading] = useState<boolean>(true);

    
    useEffect(() => {
        if (!userId) return;
        const fetchUser = async () => {
            try {
                const userResponse = await getUserInfo(+userId, isMock);
                const activityResponse = await getUserActivity(+userId, isMock)
                setUser(userResponse);
                setActivity(activityResponse);
    
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId, isMock]);

    if (loading) return <div>Chargement...</div>;
    if (!user) return <div>Utilisateur non trouvé</div>;

    return (
        <div>
            <h1>{user.userInfos.firstName}</h1>
            {activity ? <UserActivityGraph activityData={activity}/> : <div>Erreur de data</div>}
        </div>
    );
};

export default Dashboard;
