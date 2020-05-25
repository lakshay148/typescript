import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 8, -10, -8, 0]);
const charactersCollection = new CharactersCollection('lakshay');

const sorter = new Sorter(numbersCollection);
console.log(`initial collectyion`, sorter.collection);
sorter.sort();
console.log(`sorted collection `, sorter.collection);

const stringSorter = new Sorter(charactersCollection);
console.log(`initial string `, stringSorter.collection);
stringSorter.sort();
console.log(`sorted string `, stringSorter.collection);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(-7);
linkedList.add(2);
linkedList.add(8);

console.log(`initial list`);
linkedList.print();
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();

console.log(`final list `);
linkedList.print();
