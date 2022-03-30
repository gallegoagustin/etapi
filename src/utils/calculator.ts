const calculateValue = (arg: any) => {
    let result = 0;
    let average = arg.zoneData.averageValue;
    let zoneRate = arg.zoneData.rate
    let time = arg.time;
    let timeRate = time <= 1 ? 0.75 : time <= 3 ? 0.85 : 1;
    let location = arg.locationData;
    let roomsRate = location.rooms === 1 ? 0.9 : location.rooms === 2 ? 1 : location.rooms === 3 ? 1.15 : location.rooms === 4 ? 1.3 : 1.4;
    let bathroomsRate = location.bathrooms === 1 ? 0.95 : location.bathrooms === 2 ? 1 : location.bathrooms === 3 ? 1.1 : location.bathrooms === 4 ? 1.15 : 1.2;
    let paintRate = location.painting === 1 ? 0.75 : location.painting === 2 ? 0.80 : location.painting === 3 ? 0.9 : location.painting === 4 ? 1 : 1.1
    let floorRate = location.floor === 1 ? 0.75 : location.floor === 2 ? 0.80 : location.floor === 3 ? 0.9 : location.floor === 4 ? 1 : 1.1
    // let garageRate = location.garage === 0 ? 1 : location.garage === 1 ? 1.1 : location.garage === 2 ? 1.15 : 1.2

    result = average * zoneRate * timeRate * roomsRate * bathroomsRate * paintRate * floorRate;

    let min = Math.round(result - (result * 10 / 100));
    let max = Math.round(result + (result * 10 / 100));

    return {
        min: min,
        max: max
    };
}

export default calculateValue;