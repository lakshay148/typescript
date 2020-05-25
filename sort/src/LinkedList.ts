import { Collection } from './Sorter';

class Node {
  data: number;
  next: Node | null = null;
  constructor(data: number) {
    this.data = data;
  }
}
export class LinkedList implements Collection {
  head: Node | null = null;

  get length(): number {
    if (!this.head) return 0;

    let node: Node | null = this.head;
    let length: number = 0;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  add(data: number): void {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node: Node | null = this.head;
    while (node.next) {
      node = node?.next;
    }

    node.next = new Node(data);
  }

  at(index: number): Node {
    if (!this.head) throw new Error('index out of bound');

    let position: number = 0;
    let node: Node | null = this.head;
    while (node) {
      if (position == index) return node;
      position = position + 1;
      node = node.next;
    }
    throw new Error('index out of bound');
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(`data ${node.data}`);
      node = node.next;
    }
  }
}
