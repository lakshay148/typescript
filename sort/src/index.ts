import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 8, -10, -8, 0]);

const sorter = new Sorter(numbersCollection);
console.log(`initial collectyion`, sorter.collection);
sorter.sort();
console.log(`sorted collection `, sorter.collection);
