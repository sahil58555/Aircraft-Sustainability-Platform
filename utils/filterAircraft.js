const needToRecycle = ({age, remanufacturingPotential, lifeCycleAssessment, condition}) => {

    if(condition.toLowerCase() === 'used' && (age > 35 || lifeCycleAssessment > 60) && remanufacturingPotential > 0.40) {

        return true;
    }

    return false;
}

const filterAircraft = (aircrafts) => {

    return aircrafts.filter((aircraft) => {
        return needToRecycle(aircraft);
    })
}

module.exports = filterAircraft;