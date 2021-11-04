let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (() => {
    let firstTwoDrivers = drivers.slice(0, 2);

    return firstTwoDrivers;

})

const returnLastTwoDrivers = (() => {
    let lastTwoDrivers = drivers.slice(-2);

    return lastTwoDrivers;
})


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(fare) {

    return function (integer) {

        return integer * fare

    }
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers.slice(0, 2))
}



