import logo from '../assets/logo/sportsee-logo.svg';
import '../styles/layout/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">Accueil</li>
                    <li className="header__nav-item">Profil</li>
                    <li className="header__nav-item">Réglages</li>
                    <li className="header__nav-item">Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;