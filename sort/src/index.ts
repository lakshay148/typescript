import { Sorter } from "./Sorter";

const sorter = new Sorter([10, 9, -3, 8]);
console.log(`initial collectyion`, sorter.collection);
sorter.sort();
console.log(`sorted collection `, sorter.collection);
