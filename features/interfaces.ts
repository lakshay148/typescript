//defines the key names and their value types
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`vehicle name is ${vehicle.name}`);
  console.log(`vehicle is broken ? ${vehicle.broken}`);
};

printVehicle(oldCivic);

//we can also define functions in interface
interface functionVehicle {
  name: string;
  year: number;
  summary(): string;
}

const printFunctionVehicle = (vehicle: functionVehicle): void => {
  console.log(`vehicle name is ${vehicle.name}`);
  console.log(`vehicle summary : ${vehicle.summary()}`);
};

const hondaCity = {
  name: "city123",
  year: 2015,
  summary(): string {
    return `vehicle name ${this.name}`;
  },
};

printFunctionVehicle(hondaCity);
