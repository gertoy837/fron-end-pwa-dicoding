// SOLID: Single Responsibility Principle, Open/Closed Principle
// Clean Code memberikan banyak prinsip terhadap penulisan kode. Selain itu, di sana juga membahas mengenai Software Design Principle yang berguna untuk developer agar terhindar dari kebiasaan buruk dalam merancang sebuah pengembangan perangkat lunak. Untuk lebih jelasnya, berikut alasan dari Robert C. Martin mengapa Software Design Principle perlu diterapkan:

// Sebuah sistem yang sulit dipelihara karena setiap perubahan yang ada akan mempengaruhi bagian sistem yang telah ada.
// Saat melakukan perubahan, sangat berpotensi merusak sistem yang sudah berjalan.
// Sistem yang tidak bisa diterapkan pada aplikasi lain karena tidak dapat dipisahkan dari aplikasi saat ini.
// Nah, pada materi kali ini, kita coba bahas aturan yang menjadi bagian dari Design Principle seperti Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, dan Dependencies Inversion. Kelima prinsip ini dikenal sebagai SOLID Principle.

// Catatan:
// Prinsip SOLID dibahas tuntas pada kelas Belajar Prinsip Pemrograman SOLID. Jadi untuk mendapatkan wawasan yang lebih luas terhadap prinsip ini, sangat disarankan untuk mengikuti kelas tersebut, dan Anda bisa mengikuti kelasnya secara gratis.('Prinsip SOLID dibahas tuntas pada kelas Belajar Prinsip Pemrograman SOLID. Jadi untuk mendapatkan wawasan yang lebih luas terhadap prinsip ini, sangat disarankan untuk mengikuti kelas tersebut, dan Anda bisa mengikuti kelasnya secara gratis.')

// Single Responsibility Principle

class FoodExpiry {
  static isExpired(date) {
    const stringDateArray = date.split("/");
    const foodDate = new Date(...stringDateArray);
    return foodDate >= new Date();
  }
}

class FoodService {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
  }

  addToStore() {
    if (!FoodExpiry.isExpired(this.date)) {
      // Add to store
    }
  }
}

// Open/Closed Principle (OCP)

class Shipping {
  constructor() {
    if (this.constructor === Shipping) {
      throw new TypeError(
        `Abstract class "${this.constructor.name}" cannot be instantiated directly.`
      );
    }
  }

  /**
   * Implementation required
   */
  calculate(product) {
    throw new Error("You have to implement the method calculate!");
  }
}

class JNEShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class TIKIShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class POSINDOShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class SiCepatShipping extends Shipping {
  calculate(product) {
    return /** calculate amount of this type with product */;
  }
}

class ShippingOrderService {
  checkout(product, shipping) {
    const costShipping = shipping.calculate(product);
    /** Code to do check */
  }
}

//  Liskov Substitution Principle (LSP)

class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new TypeError(
        `Abstract class "${this.constructor.name}" cannot be instantiated directly.`
      );
    }
  }

  droveOff() {
    throw new TypeError("Abstract method, cannot be access directly.");
  }
}

class MotorVehicle extends Vehicle {
  constructor() {
    super();
    if (this.constructor === MotorVehicle) {
      throw new TypeError(
        `Abstract class "${this.constructor.name}" cannot be instantiated directly.`
      );
    }
  }

  turnOnEngine() {
    throw new TypeError("Abstract method, cannot be access directly.");
  }
}

class Car extends MotorVehicle {
  droveOff() {
    console.log("Mobil melaju!");
  }

  turnOnEngine() {
    console.log("Mesin Mobil dinyalakan");
  }
}

class Bicycle extends Vehicle {
  droveOff() {
    console.log("Sepeda melaju!");
  }
}

// Interface Segregation Principle (ISP)

class ImageViewer {
  constructor(settings) {
    this._settings = settings;
    this._options = settings.options;
    this.setup();
  }

  setup() {
    this._image = this._settings.image;
    this.setupOptions();
  }

  setupOptions() {
    if (this._options.animationModule) {
      this._options.animationModule.setup();
    }
    // ...
  }

  show() {
    // ...
  }
}

const imageViewer = new ImageViewer({
  image: someImage,
  options: {
    animationModule: someAnimationModule, // Aman untuk dihapus.
  },
});

// Dependencies Inversion Principle (DIP)

class SQLDatabase {
  constructor() {
    this.connection = "SQLConnection";
  }

  requestItem(item) {
    // ....
  }
}

class MongoDatabase {
  constructor() {
    this.connection = "MongoConnection";
  }

  requestItem(item) {
    // ...
  }
}

class ProductTracker {
  constructor(items, database) {
    this._items = items;
    this._database = database;
  }

  requestItems() {
    this._items.forEach((item) => {
      this._database.requestItem(item);
    });
  }
}

const productTracker = new ProductTracker(
  ["A011", "B032", "F311"],
  new MongoDatabase() // Good! Sekarang kita bisa gunakan modul low-level apa saja.
);

productTracker.requestItems();
