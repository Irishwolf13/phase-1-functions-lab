function distanceFromHqInBlocks(someValue) {
    const scuberHQ = 42;
    return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
    const scuberHQ = 42;
    return Math.abs(42 - someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const key = (Math.abs(start - destination)) * 264;
    switch (true) {
        case (key <= 400):
            return 0;
        case (key < 2000):
            return (key - 400)*0.02
        case (key <= 2500):
            return 25.00
        case (key > 2500):
            return "cannot travel that far"
    }
    
}

calculatesFarePrice(10, 15)