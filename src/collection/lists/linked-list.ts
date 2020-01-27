import { InterfaceList } from './interface'

// util functions

// class methods

// export class sign

class ListNode {
    next: ListNode | null;
    value: number;

    constructor(v: number) {
        this.next = null;
        this.value = v;
    }
}

export class LinkedList implements InterfaceList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    printList() {
        console.log("------------LinkedList<> printList----------------")
        let count = 10;
        for (let node = this.head; node != null && count > 0; node = node.next, count--) {
            // print this node
            console.log(`[node] value=${node.value}`)
        }
    }

    makeEmpty() {
        this.head = null;
    }

    find(value: number): number {
        let index = 0;
        for (let node = this.head; node != null; node = node.next, index++) {
            // check this node
            if (node.value === value) {
                return index
            }
        }
        return -1
    }

    findKth(index: number): number | null {
        let node = this.head;
        for (let i = 0; i < index && node != null; node = node.next, i++);
        return node == null ? -1 : node.value;
    }

    insert(value: number, start: number): void {
        let newNode = new ListNode(value);
        let prevNode: ListNode | null = null;
        let currNode: ListNode | null = null;
        for (currNode = this.head; currNode != null && start != 0; prevNode = currNode, currNode = currNode.next, start--);
        (prevNode == null) ? (this.head = newNode) : (prevNode.next = newNode);
        newNode.next = currNode;
    }

    delete(value: number, start: number, count: number): void {
        for (let prevNode: ListNode | null = null, currNode = this.head; currNode != null; currNode = currNode.next) {
            if (currNode.value == value) {
                (prevNode == null) ? this.head = currNode.next : prevNode.next = currNode.next;
            } else {
                prevNode = currNode
            }
        }
    }
}