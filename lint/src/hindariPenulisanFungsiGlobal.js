class SuperString extends String {
    isCanBeNumber() {
        if (Number(this) === 0) return true;
        return !!Number(this);
    }
}

const someStringNumber = new SuperString('123');
console.log(someStringNumber.isCanBeNumber());