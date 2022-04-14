'use strict';

const peopleInTheBus = (passengerList) => {
  let passengersOnTheBus = 0;
  passengerList.forEach((station) => {
    const boardingPassengers = station[0];
    const arravingPassangers = station[1];

    passengersOnTheBus += boardingPassengers;
    passengersOnTheBus -= arravingPassangers;
  });

  return passengersOnTheBus;
};

console.log(
  peopleInTheBus([
    [10, 0],
    [2, 7],
    [4, 4],
  ])
);
