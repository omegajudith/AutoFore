import PropTypes from 'prop-types';

const GarageItem = ({ name, address, contact }) => (
    <div className="garage-item">
        <div className="details">
            <h3>{name}</h3>
            <p>{address}</p>
            <div className="rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
            </div>
            <p><strong>{contact.name}</strong>, {contact.role}</p>
            <p>Tel: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </div>
        <button className="book-appointment">Book appointment</button>
    </div>
);

GarageItem.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default GarageItem;
