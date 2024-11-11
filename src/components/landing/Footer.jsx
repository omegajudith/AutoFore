import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Address: Kampala Inside UICT Nakawa Campus</p>
                <p>Plot 19-21 Port Bell Road, Uganda</p>
                <p>Email: info@autofore.co.ug</p>
                <p>Phone: +256 774572316</p>
                <p>© 2024 autofore.co . All Rights Reserved.</p>
            </div>
            <div className="footer-section">
                <h3>Quick links</h3>
                <p>Home</p>
                <p>Our Services</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
