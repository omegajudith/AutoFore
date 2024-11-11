

const SearchBar = () => (
    <section className="search-section">
        <input type="text" placeholder="Search by location" className="location-search" />
        <select className="dropdown car-type-search">
            <option value="">Search by car type</option>
            <option value="mercedes">Mercedes Benz</option>
            <option value="toyota">Toyota</option>
            <option value="porsche">Porsche</option>
            <option value="opel">Opel</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="ford">Ford</option>
            <option value="bmw">BMW</option>
        </select>
        <select className="dropdown service-search">
            <option value="">Search by service</option>
            <option value="repair">General Repair</option>
            <option value="diagnosis">Car Diagnosis</option>
            <option value="panel-beating">Panel Beating</option>
            <option value="body-spray">Body Spray</option>
            <option value="car-wash">Car Wash</option>
            <option value="roadside-support">Roadside Support</option>
            <option value="car-service">Car Service</option>
        </select>
    </section>
);

export default SearchBar;
