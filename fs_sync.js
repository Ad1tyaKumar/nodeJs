const {readFileSync,writeFileSync} = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt','utf8')

const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`The result is `+first+" "+second,{flag:'a'})
// flag: 'a' here "a means node appends list"
console.log("done with this task")
console.log("starting next task")