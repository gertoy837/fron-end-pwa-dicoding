/**
 * Dengan menggunakan getter dan setter, untuk mengakses data 
 * di dalam objek akan lebih baik dibandingkan mengakses datanya 
 * secara langsung.
 */

// class SportCar {
//     constructor(maxSpeed) {
//         this._maxSpeed = maxSpeed;
//     }

//     get maxSpeed() {
//         return this._maxSpeed;
//     }
// }

// const SportCar = new SportCar(320);
// console.log(`SportCar mampu melaju hingga kecepatan: ${SportCar.maxSpeed}km/h`);

// Jika terjadi perubahan, kita cukup lakukan perubahannya di dalam SportCar saja.

class SportCar {
    constructor(maxSpeed, nitro = 100) {
        this._maxSpeed = maxSpeed;
        this._nitro = nitro;
    }

    get maxSpeed() {
        return this._maxSpeed + this._nitro;
    }
}

const sportCar = new SportCar(320);
console.log(`SportCar mampu melaju hingga kecepatan: ${sportCar.maxSpeed}km/h`);
