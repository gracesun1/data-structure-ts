import { InterfaceList } from './interface'

// util functions

// class methods

// export class sign

export class ArrayList implements InterfaceList {
    container: number[];

    constructor() {
        this.container = [];
    }

    printList() {
        this.container.forEach((e, i) => { console.log(`index ${i}, value: ${e}`) });
    }
    makeEmpty() {
        this.container = [];
    }

    find(value: number): number {
        let i;
        for (i = 0; i < this.container.length; i++) {
            let v = this.container[i];
            if (v === value) {
                return i;
            }
        }
        return -1
    }
    findKth(index: number): number | null {
        if (index >= this.container.length) {
            return null;
        }
        return this.container[index]
    }

    insert(value: number, start: number): void {
        let container = this.container;
        let length = container.length;
        // 1. normalize input
        if (start < 0 || start > length) {
            // insert to end
            start = length
        }
        // 2. copy [start, length-1] -> [start+1, length]
        for (let i = length - 1; i >= start; i--) {
            container[i + 1] = container[i]
        }
        // 3. set [start] = value
        container[start] = value
    }
    delete(value: number, start: number, count: number): void {
        let container = this.container;
        let length = container.length;
        let dup = 0; // founded value count
        for (let index = 0; index < length; index++) {
            (container[index] == value) ? dup++ : container[index - dup] = container[index];
        }
        container.length = length - dup;
    }
}