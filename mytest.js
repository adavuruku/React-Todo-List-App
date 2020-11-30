// const rec = {
//     'name':'Usman Eneye',
//     'age':18,
//     'title':'Engineer',
// }

// const joy = {...rec, age:25}
// console.log(rec)
// console.log(joy)

// const tts = require ( "node-speech" ) ;   
// const Synth = new tts ("es-ES") ;

// console.log(Synth . get_voices ( ))

// f = new Set([2,3,4,6])

// g = Array.from(f)
// g.pop();
// console.log(g)

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd', 'b'];
var element = 'b';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);

console.log(array.indexOf('a', 4));


// Mount (constructot, getDeri, render, didmount)
// Update (getD, shoulUP, render, getSnapshot, didUpdate)
// Unmount (componentWillUnmount)

// const sg = {
    
// }

// Object.defineProperties(sg,
//    { name: {
//         value:"Abdulraheem Sherif A",
//         writable:false
//     }}
// )

// // Object.freeze(sg)
// sg.name = "Isah Man"
// sg.age = 30
// // delete sg.name
// console.log(sg)

// lk = [2,5,6,8,9,8,9]
// console.log(Math.min(...lk))

// numVa = "20300"

// ones = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
// tens = ["Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
// tens = ["Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
// console.log(numVa[1]*10, numVa.length)

// let leo, killo, kin = [],[],[]
// leo.push(4)
// console.log(killo)

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
    for (let i = 0; i < string.length; i++){
        let char = string[i]
        if (string.indexOf(char) != i) continue
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        console.log(remainingChars)
        for (let permutation of findPermutations(remainingChars)){
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
  }

 sll = [[1,6,7], [2,3,7], [4,5,6, [23,7,1,[2,8]]]]
sedo = sll.flat(Infinity)

const red = sedo.reduce(5,+)
//  console.log(sll.flat(Infinity))

// let he = "Hello"
// console.log(he.slice(2,5))
// console.log(sll.slice(0,2))

// i=3
// let remainingChars = he.slice(0, i) + he.slice(i + 1, he.length)
// console.log("Ans", remainingChars)

// let s2 = sll.splice()
// console.log(s2)

console.log(findPermutations("abc"))



//go sorting and searching

//go throug react / node / professional interview aquestions

//learn the tic tack toe and turin array

//other array value