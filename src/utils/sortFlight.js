/**
 * Sort the flights by departure date
 * @param {Object} data - the data object
 * @returns {Array} - the sorted flights
 */

const sortFlights = (data) => {
    const sortedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime()
            - new Date(b.departureDate).getTime()
        );
    });
    return sortedFlights;
};

export default sortFlights;
