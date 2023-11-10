/**
 * Analyzes car mileage data using high order array methods.
 * @param {Array} cars - An array of car objects.
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((total, car) => total + car.mileage, 0)
  const averageMileage = totalMileage / cars.length

  const highestMileageCar = cars.reduce((highest, car) => {
    return highest.mileage > car.mileage ? highest : car
  }, cars[0])

  const lowestMileageCar = cars.reduce((lowest, car) => {
    return car.mileage < lowest.mileage ? car : lowest
  }, cars[0])

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  }
}

function analyzeCarMileage2(cars) {
  const [totalMileage, highestMileageCar, lowestMileageCar] = cars.reduce(
    ([total, highest, lowest], car) => {
      const newTotal = total + car.mileage
      const newHighest = highest.mileage > car.mileage ? highest : car
      const newLowest = lowest.mileage < car.mileage ? lowest : car

      return [newTotal, newHighest, newLowest]
    },
    [0, cars[0], cars[0]]
  )

  const averageMileage = totalMileage / cars.length

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  }
}

module.exports = analyzeCarMileage
