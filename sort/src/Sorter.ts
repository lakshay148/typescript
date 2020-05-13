export interface Collection {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  sort(): void {
    const collectionLength = this.collection.length;
    for (let i = 0; i < collectionLength; i++) {
      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
