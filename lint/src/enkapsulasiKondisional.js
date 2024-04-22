const shouldShowLoading = (response, listNode) => {
  return response.state === "loading" && isEmpty(listNode);
};

if (shouldShowLoading(response, listNode)) {
  // show loading
}

// Minimalisir Kondisional

class Car {
  // ................
  getActualMaxSpeed() {
    return this.maxSpeed;
  }
}

class SportCar extends Car {
  // ................
  getActualMaxSpeed() {
    return this.maxSpeed + this.nitroSpeed;
  }
}

class FreightCar extends Car {
  // ................
  getActualMaxSpeed() {
    return this.maxSpeed - this.totalLoad;
  }
}
