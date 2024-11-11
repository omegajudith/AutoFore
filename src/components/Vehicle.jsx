import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Vehicles = () => {
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate('/vehicles/add'); // Updated route to match App.jsx
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="vehicle-container">
          <div className="vehicle-header">
            <h3>0 vehicles</h3>
            <button className="add-new-button" onClick={handleAddNewClick}>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
              Add New
            </button>
          </div>
          <div className="vehicle-card" onClick={handleAddNewClick}>
            <FontAwesomeIcon icon={faCar} className="vehicle-card-icon" />
            <FontAwesomeIcon icon={faPlus} className="vehicle-card-plus-icon" />
            <p className="Add-New">Click to add vehicle</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vehicles;
