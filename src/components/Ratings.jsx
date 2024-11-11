import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const Ratings = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="ratings-container">
          {/* Ratings Header */}
          <div className="ratings-header">
            <FontAwesomeIcon icon={faStar} className="ratings-icon" />
            <h3>Ratings</h3>
          </div>

          {/* Filters Container */}
          <div className="filters-container">
            {/* Search by Garage Name */}
            <div className="filter-item garage-search">
              <input
                type="text"
                placeholder="Garage Name"
                className="garage-name-input"
              />
              <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Date Picker Filter */}
            <div className="filter-item date-range">
              <input type="text" placeholder="mm/dd/yyyy" />
              <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
              <span>to</span>
              <input type="text" placeholder="mm/dd/yyyy" />
              <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
            </div>

            {/* Status Dropdown Filter */}
            <select className="filter-item status-dropdown">
              <option>Status</option>
              <option>All</option>
              <option>Submitted</option>
              <option>Rejected</option>
              <option>Approved</option>
              <option>Resubmitting</option>
              <option>Reviewing</option>
            </select>

            {/* Reset All Filter Button */}
            <button className="reset-filters">Reset All</button>
          </div>

          {/* No Ratings Placeholder */}
          <div className="no-ratings">
            <p>No Ratings Yet</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ratings;
