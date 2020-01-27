export interface InterfaceList {
    printList(): void;
    makeEmpty(): void;

    find(value: number): number; // -1: not-found
    findKth(index: number): number|null;

    insert(value: number, start: number): void;
    delete(value: number, start: number, count: number): void;
}

import { ArrayList } from './array-list'
import { LinkedList } from './linked-list';

// factory method
export function NewList(type: string): InterfaceList {
    switch (type) {
    case "array-list":
        console.log("[NewList] make an instance of ArrayList")
        return new ArrayList()
    case "linked-list":
        console.log("[NewList] make an instance of LinkedList")
        return new LinkedList()
    default:
        throw("not support")
    }
}