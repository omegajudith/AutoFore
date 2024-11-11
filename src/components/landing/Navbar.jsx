
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand">Autofore</Link>
                <ul className="navbar-menu">
                    <li><Link to="/#services">Services</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </div>
            <div className="cta-buttons">
                <Link to="/login" className="cta-button login">Login</Link>
                <Link to="/sign-up" className="cta-button signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
