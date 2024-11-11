import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faCar, faStar, faCog, faUser, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the new icon
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="brand">AUTOFORE</div>
            <ul className="nav-menu">
                <li className="nav-item active">
                    <Link to="/dashboard" className="nav-link">
                        <FontAwesomeIcon icon={faHome} className="nav-item-icon" />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/appointments" className="nav-link">
                        <FontAwesomeIcon icon={faCalendarAlt} className="nav-item-icon" />
                        Appointments
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/vehicles" className="nav-link">
                        <FontAwesomeIcon icon={faCar} className="nav-item-icon" />
                        Vehicles
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ratings" className="nav-link">
                        <FontAwesomeIcon icon={faStar} className="nav-item-icon" />
                        Ratings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        <FontAwesomeIcon icon={faCog} className="nav-item-icon" />
                        Settings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        <FontAwesomeIcon icon={faUser} className="nav-item-icon" />
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/notifications" className="nav-link">
                        <FontAwesomeIcon icon={faBell} className="nav-item-icon" />
                        Notifications
                    </Link>
                </li>
            </ul>
            <Link to="/logout" className="logout-link">
                <button className="logout-button">
                    <FontAwesomeIcon icon={faSignOutAlt} className="nav-item-icon" />
                    Logout
                </button>
            </Link>
        </div>
    );
};

export default Sidebar;
