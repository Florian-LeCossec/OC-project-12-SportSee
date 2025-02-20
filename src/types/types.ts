export type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};

export type KeyData = {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
};

export type UserData = {
    id: number;
    userInfos: UserInfos;
    todayScore?: number;
    score?: number;
    keyData: KeyData;
};


export type UserActivity = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

export type UserAverageSessions = {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
};

export type Kind = {
    [key: number]: string;
};
  
export type DataPoint = {
    value: number;
    kind: number;
};
  
export type UserPerformance = {
    userId: number;
    kind: Kind;
    data: DataPoint[];
};