console.log('test')
const _ = require('lodash')
let countries = require('./data')
// 1 - gib nur das ERSTE Element des Arrays zurück
console.log(_.head(countries))

// 2 - gib alle AUSSER dem letzten Element des Arrays zurück
console.log(_.slice(countries, 0, countries.length - 1))
console.log(_.initial(countries))

// 3 - gib nur das LETZTE Element des Arrays zurück
console.log(_.last(countries));

// 4 - gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
console.log('slice');
console.log(countries.slice(1))
console.log('tail');
console.log(_.tail(countries))

// 5 - gib das Element zurück, das an Position n steht (du brauchst einen zweiten Parameter in deiner function), wenn n negativ oder größer als die Länge des Arrays ist gib das letzte Element zurück

function getElement(arr, position) {
    if (position < 0 || position > arr.length) {
        return _.last(arr)
    } else {
        return arr[position]
    }
}

console.log(getElement([1, 3, 5, 7, 8], 2))
console.log(getElement([1, 3, 5, 7, 8], 0))
console.log(getElement([1, 3, 5, 7, 8], 33))
console.log(getElement([1, 3, 5, 7, 8], -3))


//schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]

function filterArr(arr, toRemove) {
    return arr.filter(elt => elt != toRemove)
}
console.log(filterArr(["remove", "stay", "remove", "stay", "remove", "stay", "remove"], "remove"))

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]

function uniq(arr) {
    return [...new Set(arr)]
}
function uniq1(arr) {
    return arr.filter((item, pos) => arr.indexOf(item) == pos)
}
console.log(uniq([1, 6, 9, 2, 1, 6, 7, 10]))
console.log(uniq1([1, 6, 9, 2, 1, 6, 7, 10]))
console.log(_.uniq([1, 6, 9, 2, 1, 6, 7, 10]))
// Synchronous: blocking
let num1 = 2
let num2 = 3
console.log('first console', num1)
console.log('second console', num1)
console.log('third console', num2)

// Asynchronous: non blocking
setTimeout(() => {
    console.log('forth console', num2)
}, 100);

console.log('fifth console', num1)


// Callback:
// Asynchronous: non blocking => Callback, Promises, Async Await
// this.setState({data :  json},()=>{
//     done:true
// });
// document.getElementById('button').addEventListener('click', () => {
//     console.log('clicked')
// })

// Promises

const axios = require('axios');
const { reject } = require('lodash')

// Make a request for a user with a given ID

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        console.log('test')
    })


console.log('Hello world')
// We have only used promises
// declaration

let myPromise = new Promise((resolve, reject) => {
    let random = Math.random()
    if (random > 0.5) {
        resolve() // successfull
    } else {
        reject() //error
    }
})

//Call
myPromise
    .then(() => console.log('Success: random is bigger than 0.5'))
    .catch(() => console.log('Error: random is smaller than 0.5'))

console.log('Hello world 1990')
// console.log(erik)
try {
    console.log(erik)
    console.log('show the code')
} catch (error) {
    console.log(error)
}
console.log('hello world 2021')

// async await
async function getTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
        console.log('async response', response.data);
    } catch (error) {
        console.error(error);
    }
}
function logIn() {
    console.log('is logged in')
}


console.log('before function snyc')
logIn()
console.log('after function snyc')


console.log('before function Asnyc')
getTodo()
console.log('after function Asnyc')

