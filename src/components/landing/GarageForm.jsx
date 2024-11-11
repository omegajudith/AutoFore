
const GarageForm = () => {
  return (
      <div className="form-section">
          <h2>Join Our Network of Garages</h2>
          <p>Connect with us and unlock exciting opportunities for your garage.</p>
          <div className="form-container">
              <input type="text" placeholder="Garage name" />
              <input type="text" placeholder="Contact Person's name" />
              <input type="text" placeholder="Phone number" />
              <button>Join Now</button>
          </div>
      </div>
  );
};

export default GarageForm; 
