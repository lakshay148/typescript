class Vehicle {
  drive(): void {
    console.log(`drive me`);
  }

  honk(): void {
    console.log(`beep`);
  }
}

const maruti = new Vehicle();
maruti.drive();
maruti.honk();

class Cars extends Vehicle {
  drive(): void {
    console.log(`drive my way`);
  }

  getMyType(): string {
    return `my type is a car`;
  }
}

const car = new Cars();
car.drive();
console.log(`type : ${car.getMyType()}`);

//field variables and constructor
class Fruit {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}
