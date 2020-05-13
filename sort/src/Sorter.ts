export class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const collectionLength = this.collection.length;
    for (let i = 0; i < collectionLength; i++) {
      for (let j = 0; j < collectionLength - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          let temp = this.collection[j + 1];
          this.collection[j + 1] = this.collection[j];
          this.collection[j] = temp;
        }
      }
    }
  }
}
