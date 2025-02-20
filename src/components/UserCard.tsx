import React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../types/types';

type UserCardProps = {
    user: UserData;
    isMock?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, isMock }) => {
    return (
        <Link to={`/user/${user.id}`}>
            <h2>{user.userInfos.firstName} {user.userInfos.lastName}</h2>
            <p>{user.userInfos.age}</p>
            {isMock && <span>mock</span>}
        </Link>
    );
};

export default UserCard;