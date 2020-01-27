console.log("main")

import {NewList} from './collection/lists/interface'

// let l = NewList("array-list")
let l = NewList("double-linked-list")

console.log(l.printList())

l.insert(11, -1000)
console.log(l.printList()) // 11
l.insert(22, -2000)
console.log(l.printList()) // 11 22
l.insert(55, 2000) // 11 22 55
l.insert(33, 1) // 11 33 22 55
console.log(l.printList())
l.insert(77, 0) // 77 11 33 22 55
l.insert(44, 2) // 77 11 44 33 22 55
console.log(l.printList())

//l.insert(33, 2) // 11 33 44 33 22
// l.insert(44, 3)
// l.insert(55, 4)
// console.log(l.printList())
// l.delete(11, -1, -1)
// l.delete(33, -1, -1)
// l.delete(44, -1, -1)
// // l.insert(44, 0)
// console.log(l.printList())

// // l.makeEmpty()
// console.log(l.printList())
// l.insert(11, 0)
// l.insert(33, 2)
// l.insert(33, 2)
// // l.insert(33, 2)
// console.log(l.printList())
// l.delete(33, -1, -1)
// console.log(l.printList())

console.log("main exit")