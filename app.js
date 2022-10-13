

// npm init -y (everything default)
// npm i ____ package name


const _= require('lodash')

const items= [1,[2,[3,[4]]]]

const newItems= _.flattenDeep(items)

console.log(newItems)