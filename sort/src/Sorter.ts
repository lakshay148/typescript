class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {}
}

const sorter = new Sorter([10, 9, -3, 8]);
sorter.sort();
console.log(`sorted collection `, sorter.collection);
