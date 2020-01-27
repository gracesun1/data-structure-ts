import { InterfaceList } from './interface'

// util functions

// class methods

// export class sign

class ListNode {
    prev: ListNode;
    next: ListNode;
    value: number;

    constructor(v: number) {
        this.prev = this;
        this.next = this;
        this.value = v;
    }
}

export class DoubleLinkedList implements InterfaceList {
    sentinel: ListNode;

    constructor() {
        this.sentinel = new ListNode(0);
    }

    printList() {
        console.log("------------DoubleLinkedList<> printList----------------")
        let count = 10;
        let sentinel = this.sentinel;
        for (let node = sentinel.next; node != sentinel && count != 0; node = node.next, count--) {
            // print this node
            console.log(`[node] value=${node.value}`)
        }
    }

    makeEmpty() {
        let sentinel = this.sentinel;
        sentinel.next = sentinel.prev = sentinel;
    }

    find(value: number): number {
        let index = 0;
        let sentinel = this.sentinel;
        for (let node = sentinel.next; node != sentinel; node = node.next, index++) {
            // check this node
            if (node.value === value) {
                return index
            }
        }
        return -1
    }

    findKth(index: number): number | null {
        let sentinel = this.sentinel;
        let node = sentinel.next;
        for (let i = 0; i < index && node != sentinel; node = node.next, i++);
        return node == sentinel ? -1 : node.value;
    }

    insert(value: number, start: number): void {
        let sentinel = this.sentinel;
        let newNode = new ListNode(value);
        let currNode = sentinel;
        for (currNode = sentinel.next; currNode != sentinel && start != 0; currNode = currNode.next, start--);
        // init the new node
        newNode.prev = currNode.prev;
        newNode.next = currNode;
        // insert it to the chain
        currNode.prev.next = newNode
        currNode.prev = newNode;
    }

    insertHead(value: number): void {
        let sentinel = this.sentinel;
        let newNode = new ListNode(value);

        newNode.next = sentinel.next;
        newNode.prev = sentinel;

        sentinel.next.prev = newNode;
        sentinel.next = newNode;
    }

    insertTail(value: number): void {
        let sentinel = this.sentinel;
        let newNode = new ListNode(value);

        newNode.next = sentinel;
        newNode.prev = sentinel.prev;

        sentinel.prev.next = newNode;
        sentinel.prev = newNode;
    }

    deleteHead(): number | undefined {
        let sentinel = this.sentinel;
        let node = sentinel.next;
        
        sentinel.next = node.next;
        node.next.prev = sentinel;

        return (node === sentinel) ? undefined : node.value
    }

    deleteTail(): number | undefined {
        let sentinel = this.sentinel;
        let node = sentinel.prev;
        
        sentinel.prev = node.prev;
        node.prev.next = sentinel;

        return (node === sentinel) ? undefined : node.value
    }

    delete(value: number, start: number, count: number): void {
        let sentinel = this.sentinel;
        for (let currNode = sentinel.next; currNode != null; currNode = currNode.next) {
            if (currNode.value == value) {
                currNode.prev.next = currNode.next
                currNode.next.prev = currNode.prev
            }
        }
    }
}