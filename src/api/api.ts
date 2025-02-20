import axios from 'axios';
import mockData from '../data/mockData';

const url = 'http://localhost:3000/user';

// get user infos

type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};
  
type KeyData = {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
};
  
type UserData = {
    id: number;
    userInfos: UserInfos;
    todayScore?: number; // optional because sometimes replaced by "score"
    score?: number; // same reason
    keyData: KeyData;
};


export const getUserInfo = async (userId: number) => {
    try {
        const response = await axios.get<UserData>(`${url}/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de ${url}/${userId}:`, error);
        const userInfo = mockData.USER_MAIN_DATA.find(user => user.id === userId);
        
        if (!userInfo) {
            throw new Error(`Utilisateur avec l'ID ${userId} non trouvé dans les données mock.`);
        }
        
        return userInfo;
    }
};

// get user activity

type UserActivity = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

export const getUserActivity = async (userId: number) => {
    try {
        const response = await axios.get<UserActivity>(`${url}/${userId}/activity`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des données d'activité de ${url}/${userId}/activity:`, error);
        const userActivity = mockData.USER_ACTIVITY.find(activity => activity.userId === userId);

        if (!userActivity) {
            throw new Error(`Activité de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
        }
        return userActivity;
    }
};

// get user average sessions

type UserAverageSessions = {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
};

export const getUserAverageSessions = async (userId: number) => {
    try {
        const response = await axios.get<UserAverageSessions>(`${url}/${userId}/average-sessions`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de moyenne de sessions de ${url}/${userId}/average-sessions:`, error);

        const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);

        if (!userAverageSessions) {
            throw new Error(`Moyenne de sessions de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
        }
        return userAverageSessions;
    }
};

// get user performance

type Kind = {
    [key: number]: string;
};
  
type DataPoint = {
    value: number;
    kind: number;
};
  
type UserPerformance = {
    userId: number;
    kind: Kind;
    data: DataPoint[];
};
  

export const getUserPerformance = async (userId: number) => {
    try {
        const response = await axios.get<UserPerformance>(`${url}/${userId}/performance`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de performance de ${url}/${userId}/performance:`, error);
        const userPerformance = mockData.USER_PERFORMANCE.find(performance => performance.userId === userId);
        if (!userPerformance) {
            throw new Error(`Performance de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
        }
        return userPerformance;
    }
};