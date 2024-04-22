function Car(maxSpeed) {
  if (!(this instanceof Car)) {
    throw new Error("Instantiate Car with `new`");
  }

  this._maxSpeed = maxSpeed;
}

Car.prototype.move = function move() {};
Car.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed;
};

function SportCar(maxSpeed, nitro) {
  if (!(this instanceof SportCar)) {
    throw new Error("Instantiate SportCar with `new`");
  }

  Car.call(this, maxSpeed);
  this._nitro = nitro;
}

SportCar.prototype = Object.create(Car.prototype);
SportCar.prototype.constructor = SportCar;
SportCar.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed + this._nitro;
};

SportCar.prototype.moveWithNitro = function moveWithNitro() {};

function FreightCar(maxSpeed, totalLoad) {
  if (!(this instanceof FreightCar)) {
    throw new Error("Instantiate FreightCar with `new`");
  }

  Car.call(this, maxSpeed);
  this._totalLoad = totalLoad;
}

FreightCar.prototype = Object.create(Car.prototype);
FreightCar.prototype.constructor = FreightCar;
FreightCar.prototype.getMaxSpeed = function getMaxSpeed() {
  return this._maxSpeed + this._totalLoad;
};

FreightCar.prototype.moveWithTotalLoad = function moveWithTotalLoad() {};
