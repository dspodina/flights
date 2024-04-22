import data from '../data.js';
import dom from '../dom.js';
import sortFlights from '../utils/sortFlight.js';
import addFlight from '../components/addFlight.js';

const loadHandler = () => {
    const sortedData = sortFlights(data);
    sortedData.forEach((flight) => {
        const flightSchedule = addFlight(flight);
        dom.parent.appendChild(flightSchedule);
    });
};

export default loadHandler;
