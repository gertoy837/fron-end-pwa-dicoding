class Car {
    constructor(maxSpeed) {
        this._maxSpeed = maxSpeed;
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    move() {}
}

class SportCar extends Car {
    constructor(maxSpeed, nitro) {
        super(maxSpeed);
        this._nitro = nitro;
    }

    get maxSpeed() {
        return this._maxSpeed + this._nitro;
    }

    moveWithNitro() {}
}

class FreightCar extends Car {
    constructor(maxSpeed, totalLoad) {
        super(maxSpeed);
        this._totalLoad = totalLoad;
    }

    get maxSpeed() {
        return this._maxSpeed + this._totalLoad;
    }

    beep() {}
}