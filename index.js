/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const calcNewVel = (velocity, acceleration, timeInSeconds) => {
  // Validate inputs and throws errors if not valid.
  if (typeof velocity !== 'number' || velocity < 0) {
    throw new Error('Velocity must be a non-negative number.');
  }
  if (typeof acceleration !== 'number') {
    throw new Error('Acceleration must be a number.');
  }
  if (typeof timeInSeconds !== 'number' || timeInSeconds < 0) {
    throw new Error('Time must be a non-negative number.');
  }
  return velocity + (acceleration * timeInSeconds);
}

const newDistance = distance + (velocity * timeInSeconds) //calculates new distance
const remainingFuel = fuelBurnRate * timeInSeconds //calculates remaining fuel
const newVelocity = calcNewVel(acceleration, velocity, timeInSeconds) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






