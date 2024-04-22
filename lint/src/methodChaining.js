// penerapan tanpa method Chaining

// class Car {
//   constructor() {
//     this._color = null;
//     this._manufacture = null;
//     this._model = null;
//   }

//   setColor(color) {
//     this._color = color;
//   }

//   setManufacture(manufacture) {
//     this._manufacture = manufacture;
//   }

//   setModel(model) {
//     this._model = model;
//   }

//   save() {
//     console.log(this._color, this._manufacture, this._model);
//   }
// }

// const car = new Car();
// car.setColor("White");
// car.setManufacture("Suzuki");
// car.setModel("Ignis");
// car.save();

// Dengan method Chaining

class Car {
    constructor() {
      this._color = null;
      this._manufacture = null;
      this._model = null;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setManufacture(manufacture) {
        this._manufacture = manufacture;
        return this;
    }

    setModel(model) {
        this._model = model;
        return this;
    }

    save() {
        console.log(this._color, this._manufacture, this._model);
        return this;
    }
}

const car = new Car()
  .setColor("White")
  .setManufacture("Suzuki")
  .setModel("Ignis")
  .save();

/**
 * Kuncinya adalah ubah setiap fungsi setter pada Class dengan 
 * mengembalikan nilai instance (this). Sehingga setelah memanggil 
 * salah satu method setter, kita dapat memanggil setter yang lainnya 
 * juga secara langsung. 
 */ 