const hqBlock = 42;

function distanceFromHqInBlocks(value) {
    if (value > 42) {
        return value - hqBlock;
    } else {
        return hqBlock - value;
    }
};

function distanceFromHqInFeet(value) {
    let distance = distanceFromHqInBlocks(value) * 264;
    return distance;
};

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};