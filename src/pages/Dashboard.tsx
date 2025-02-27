import { useState, useEffect } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { UserActivity, UserData, UserAverageSessions, UserPerformance } from '../types/types';
import { getUserActivity, getUserInfo, getUserAverageSessions, getUserPerformance } from '../api/api';
import ActivityGraph from '../components/ActivityGraph';
import AverageSessionsGraph from '../components/AverageSessionsGraph';
import PerformanceGraph from '../components/PerformanceGraph';

const Dashboard = () => {
    const { userId } = useParams();
    const isMock = !!useMatch("/mock/user/:userId");
    const [user, setUser] = useState<UserData>();
    const [activity, setActivity] = useState<UserActivity>()
    const [averageSessions, setAverageSessions] = useState<UserAverageSessions>()
    const [performance, setPerformance] = useState<UserPerformance>()
    const [loading, setLoading] = useState<boolean>(true);

    
    useEffect(() => {
        if (!userId) return;
        const fetchUser = async () => {
            try {
                const userResponse = await getUserInfo(+userId, isMock);
                const activityResponse = await getUserActivity(+userId, isMock)
                const averageSessionsResponse = await getUserAverageSessions(+userId, isMock)
                const performanceResponse = await getUserPerformance(+userId, isMock)
                
                setUser(userResponse);
                setActivity(activityResponse);
                setAverageSessions(averageSessionsResponse);
                setPerformance(performanceResponse);
    
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        void fetchUser();
    }, [userId, isMock]);

    if (loading) return <div>Chargement...</div>;
    if (!user) return <div>Utilisateur non trouvé</div>;

    return (
        <div>
            <h1>{user.userInfos.firstName}</h1>
            {activity ? <ActivityGraph activityData={activity}/> : <div>Erreur de data</div>}
            {averageSessions ? <AverageSessionsGraph averageSessionsData={averageSessions}/> : <div>Erreur de data</div>}
            {performance ? <PerformanceGraph performanceData={performance}/> : <div>Erreur de data</div>}
        </div>
    );
};

export default Dashboard;
