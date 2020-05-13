import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 8, -10, -8, 0]);
const charactersCollection = new CharactersCollection("lakshay");

const sorter = new Sorter(numbersCollection);
console.log(`initial collectyion`, sorter.collection);
sorter.sort();
console.log(`sorted collection `, sorter.collection);

const stringSorter = new Sorter(charactersCollection);
console.log(`initial string `, stringSorter.collection);
stringSorter.sort();
console.log(`sorted string `, stringSorter.collection);
