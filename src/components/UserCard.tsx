import React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../types/types';
import '../styles/components/UserCard.scss';
type UserCardProps = {
    user: UserData;
    isMock?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, isMock }) => {
    return (
        <Link className="user-card" to={`/user/${user.id}`}>
            <h2 className="user-card__name">{user.userInfos.firstName} {user.userInfos.lastName}</h2>
            <p className="user-card__age">{user.userInfos.age}</p>
            {isMock && <span className="user-card__mock">mock</span>}
        </Link>
    );
};

export default UserCard;