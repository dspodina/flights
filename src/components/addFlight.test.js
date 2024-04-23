/**
 * @jest-environment jsdom
 */

import addFlight from '../components/addFlight.js';

describe('create a user component', () => {
    const flightSchedule = addFlight({
        id: 1,
        name: 'VQ-903',
        plane: 'ATR725',
        departureDate: '2023-08-05 13:45:00',
        origin: 'DAC',
        arrivalDate: '2023-08-05 14:40:00',
        destination: 'CGP',
        stops: 0,
    });
    test('NodeName -> DIV', () => {
        expect(flightSchedule.nodeName).toEqual('DIV');
    });

    test('Class name -> flight', () => {
        expect(flightSchedule.className).toEqual('flight');
    });

    test('Name', () => {
        expect(flightSchedule.querySelector('.name').innerText).toEqual(
            'VQ-903',
        );
    });
});
