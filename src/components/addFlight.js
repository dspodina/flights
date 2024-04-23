const addFlight = (flight) => {
    const flightSchedule = document.createElement('div');
    flightSchedule.classList.add('flight');

    // NAME
    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = flight.name;

    // PLANE
    const plane = document.createElement('div');
    plane.classList.add('plane');
    plane.innerText = flight.plane;

    // DEPARTURE DATE
    const departureDate = document.createElement('div');
    departureDate.classList.add('departureDate');
    departureDate.innerText = flight.departureDate;

    // ORIGIN
    const origin = document.createElement('div');
    origin.classList.add('origin');
    origin.innerText = flight.origin;

    // ARRIVAL DATE
    const arrivalDate = document.createElement('div');
    arrivalDate.classList.add('arrivalDate');
    arrivalDate.innerText = flight.arrivalDate;

    // DESTINATION
    const destination = document.createElement('div');
    destination.classList.add('destination');
    destination.innerText = flight.destination;

    // STOPS
    const stops = document.createElement('div');
    stops.classList.add('stops');
    stops.innerText = flight.stops;

    flightSchedule.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );

    return flightSchedule;
};

export default addFlight;
