import { Link } from 'react-router-dom';
import { UserData } from '../types/types';
import '../styles/components/UserCard.scss';
type UserCardProps = {
    user: UserData;
    isMock?: boolean;
};

const UserCard = ({ user, isMock }: UserCardProps) => {
    return (
        <Link className="user-card" to={isMock ? `/mock/user/${user.id}` :`/user/${user.id}`}>
            <h2 className="user-card__name">{user.userInfos.firstName} {user.userInfos.lastName}</h2>
            {isMock && <span className="user-card__mock">mock</span>}
        </Link>
    );
};

export default UserCard;