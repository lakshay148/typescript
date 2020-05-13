import { Collection } from './Sorter';

export class CharactersCollection implements Collection {
  constructor(public collection: string) {}

  get length(): number {
    console.log(`length of string ${this.collection.length}`);
    return this.collection.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.collection.split('');
    let temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    console.log(`characters `, characters);
    this.collection = characters.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    console.log(`leftIndex ${leftIndex} , rightIndex ${rightIndex}`);
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }
}
