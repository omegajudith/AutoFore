import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Add this line with other imports


const VehicleForm = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/vehicles'); // Update this path if needed
    };
    
    return (
        <div className="vehicle-form-container">
            <div className="vehicle-form-header">
            <button className="back-button" onClick={handleBackClick}>
                     <FontAwesomeIcon icon={faArrowLeft} /> 
            </button>

                <h2>Add a Vehicle</h2>
            </div>
            <div className="vehicle-form-content">
                <div className="vehicle-image-upload">
                    <div className="image-placeholder">
                        <p>Click to add vehicle image</p>
                    </div>
                </div>
                <div className="vehicle-details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Number Plate</label>
                            <input type="text" placeholder="Enter vehicle number plate" />
                        </div>
                        <div className="form-group">
                            <label>Chassis Number</label>
                            <input type="text" placeholder="Enter chassis number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Car Type</label>
                        <select>
                            <option>Select car type...</option>
                            <option>Mercedes Benz</option>
                            <option>Toyota</option>
                            <option>Porsche</option>
                            <option>Opel</option>
                            <option>Volkswagen</option>
                            <option>Ford</option>
                            <option>BMW</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Current Mileage</label>
                        <input type="text" placeholder="Enter vehicle mileage" />
                    </div>
                    <h5>Third-party details</h5>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Purchase Date</label>
                            <input type="date" placeholder="mm/dd/yyyy" />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Last Service Name</label>
                        <select>
                            <option>Select...</option>
                            <option>General repair</option>
                            <option>Car diagnosis</option>
                            <option>Panel beating</option>
                            <option>Body spray</option>
                            <option>Car wash</option>
                            <option>Roadside support</option>
                            <option>Car service</option>
                            <option>Insurance</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Last Service Garage Name</label>
                        <select>
                            <option>Select...</option>
                            <option>Mechbrif Auto (MBF)</option>
                            <option>CTL AUTO GARAGE</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Last Date of Service</label>
                        <input type="date" placeholder="mm/dd/yyyy" />
                    </div>
                    <button className="save-button">Save</button>
                </div>
            </div>
        </div>
    );
};

export default VehicleForm;
