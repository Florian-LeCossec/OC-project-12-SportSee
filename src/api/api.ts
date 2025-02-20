import axios from 'axios';
import mockData from '../data/mockData';
import { UserData, UserActivity, UserAverageSessions, UserPerformance } from '../types/types';

const url = 'http://localhost:3000/user';


export const getUserInfo = async (userId: number, isMock: boolean = false) => {
    try {
        if (isMock) {
            const userInfo = mockData.USER_MAIN_DATA.find(user => user.id === userId);
            if (!userInfo) {
                throw new Error(`Utilisateur avec l'ID ${userId} non trouvé dans les données mock.`);
            }
            return userInfo;
        } else {
            const response = await axios.get<{ data: UserData }>(`${url}/${userId}`);
            return response.data.data;
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de ${url}/${userId}:`, error);
    }
};

// get user activity

export const getUserActivity = async (userId: number, isMock: boolean = false) => {
    try {
        if (isMock) {
            const userActivity = mockData.USER_ACTIVITY.find(activity => activity.userId === userId);
            if (!userActivity) {
                throw new Error(`Activité de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
            }
            return userActivity;
        } else {
            const response = await axios.get<UserActivity>(`${url}/${userId}/activity`);
            return response.data;
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des données d'activité de ${url}/${userId}/activity:`, error);
    }
};

// get user average sessions

export const getUserAverageSessions = async (userId: number, isMock: boolean = false) => {
    try {
        if (isMock) {
            const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
            if (!userAverageSessions) {
                throw new Error(`Moyenne de sessions de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
            }
            return userAverageSessions;
        } else {
            const response = await axios.get<UserAverageSessions>(`${url}/${userId}/average-sessions`);
            return response.data;
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de moyenne de sessions de ${url}/${userId}/average-sessions:`, error);
    }
};

// get user performance

export const getUserPerformance = async (userId: number, isMock: boolean = false) => {
    try {
        if (isMock) {
            const userPerformance = mockData.USER_PERFORMANCE.find(performance => performance.userId === userId);
            if (!userPerformance) {
                throw new Error(`Performance de l'utilisateur avec l'ID ${userId} non trouvée dans les données mock.`);
            }
            return userPerformance;
        } else {
            const response = await axios.get<UserPerformance>(`${url}/${userId}/performance`);
            return response.data;
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de performance de ${url}/${userId}/performance:`, error);
    }
};