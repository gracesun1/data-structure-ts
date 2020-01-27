import { InterfaceList } from './interface'

// util functions

// class methods

// export class sign

class ListNode {
    // prev: ListNode | null;
    next: ListNode | null;
    value: number;

    constructor(v: number) {
        // this.prev = null;
        this.next = null;
        this.value = v;
    }
}

export class LinkedList implements InterfaceList {
    head: ListNode | null;
    // tail: ListNode | null;

    constructor() {
        this.head = null;
        // this.tail = null;
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
        // this.tail = null;
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
        // if (start < 0) {
        //     for (currNode = this.head; currNode != null; prevNode = currNode, currNode = currNode.next);
        // } else {
        //     for (currNode = this.head; currNode != null && start > 0; prevNode = currNode, currNode = currNode.next, start--);
        // }
        (prevNode == null) ? (this.head = newNode) : (prevNode.next = newNode);
        newNode.next = currNode;

        // if (start == 0) {
        //     let headNode = new ListNode(value);
        //     headNode.next = this.head;
        //     this.head = headNode
        // } else if (start == -1) {
        //     let endNode = new ListNode(value);
        //     let lastNode: ListNode | null = null;
        //     for (let node: ListNode | null = this.head; node != null; lastNode = node, node = node.next);
        //     (lastNode == null) ? this.head = endNode : lastNode.next = endNode;
        // } else {
        //     let node = this.head;
        //     let pre: ListNode | null = null, nex: ListNode | null = null
        //     for (let i = 0; i < start && node != null; node = node.next, i++) {
        //         // if (i == start - 1) {
        //             pre = node;
        //             nex = node.next;
        //         // }
        //     }

        //     let newNode = new ListNode(value);
        //     pre == null ? "" : pre.next = newNode;
        //     newNode.next = nex;
        // }
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