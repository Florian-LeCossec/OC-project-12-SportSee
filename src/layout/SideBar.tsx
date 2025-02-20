import '../styles/layout/SideBar.scss';
import bike from '../assets/icons/bike-icon.svg';
import swim from '../assets/icons/swim-icon.svg';
import yoga from '../assets/icons/yoga-icon.svg';
import dumbbell from '../assets/icons/dumbbell-icon.svg';


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logos">
                <img src={yoga} alt="yoga" />
                <img src={swim} alt="swim" />
                <img src={bike} alt="bike" />
                <img src={dumbbell} alt="dumbbell" />
            </div>
            <span className="sidebar__copyright">Copyright, SportSee 2020</span>
        </div>
    )
}

export default SideBar;