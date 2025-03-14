import { useState, useEffect } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { UserActivity, UserData, UserAverageSessions, UserPerformance } from '../types/types';
import { getUserActivity, getUserInfo, getUserAverageSessions, getUserPerformance } from '../api/api';
import ActivityGraph from '../components/ActivityGraph';
import AverageSessionsGraph from '../components/AverageSessionsGraph';
import PerformanceGraph from '../components/PerformanceGraph';
import ScoreGraph from '../components/scoreGraph';
import NutritionCard from '../components/NutritionCard';
import calorieIcon from '../assets/icons/calories-icon.svg';
import proteinIcon from '../assets/icons/protein-icon.svg';
import carbsIcon from '../assets/icons/carbs-icon.svg';
import fatIcon from '../assets/icons/fat-icon.svg';
import '../styles/pages/Dashboard.scss';

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
    if (!user) return <div className='error-message'>Une erreur est survenue. L’API est actuellement indisponible.</div>;
    console.log(user)

    return (
        <div className="dashboard">
            <div className='dashboard__title-section'>
                <h1 className="dashboard__title-section__title">Bonjour <span className="dashboard__title-section__title__name">{user.userInfos.firstName}</span></h1>
                <p className="dashboard__title-section__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='dashboard__graphs-container'>
                <div className='dashboard__graphs-container__graphs'>
                    <div className='dashboard__graphs-container__graphs__first-row'>
                        {activity ? <ActivityGraph activityData={activity}/> : <div>Erreur de data</div>}
                    </div>
                    <div className='dashboard__graphs-container__graphs__second-row'>
                        {averageSessions ? <AverageSessionsGraph averageSessionsData={averageSessions}/> : <div>Erreur de data</div>}
                        {performance ? <PerformanceGraph performanceData={performance}/> : <div>Erreur de data</div>}
                        <ScoreGraph userData={user} />
                    </div>
                </div>
                <div className='dashboard__graphs-container__nutrition-container'>
                    <NutritionCard icon={calorieIcon} value={user.keyData.calorieCount} unit="kcal" label="Calories" />
                    <NutritionCard icon={proteinIcon} value={user.keyData.proteinCount} unit="g" label="Protéines" />
                    <NutritionCard icon={carbsIcon} value={user.keyData.carbohydrateCount} unit="g" label="Glucides" />
                    <NutritionCard icon={fatIcon} value={user.keyData.lipidCount} unit="g" label="Lipides" />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
