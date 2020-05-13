import { Collection } from "./Sorter";

export class NumbersCollection implements Collection {
  constructor(public collection: number[]) {}

  get length(): number {
    return this.collection.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.collection[rightIndex];
    this.collection[rightIndex] = this.collection[leftIndex];
    this.collection[leftIndex] = temp;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }
}
