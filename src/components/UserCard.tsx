import React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../types/types';

type UserCardProps = {
    user: UserData;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Link to={`/user/${user.id}`}>
            <h2>{user.userInfos.firstName} {user.userInfos.lastName}</h2>
            <p>{user.userInfos.age}</p>
        </Link>
    );
};

export default UserCard;