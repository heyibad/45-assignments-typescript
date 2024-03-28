let name1:string = "ibad"
let name2:string = "ibad2"

console.log("Is name1 === 'ibad'? I predict true.")
console.log(name1 === "ibad")

console.log("Is name2 != 'ibad'? I predict True.")
console.log(name2 != "ibad")

console.log("Is name1.toLowerCase() === 'new'? I predict false.")
console.log(name1.toLowerCase() === "new")

console.log("Is name2.toLowerCase() !== 'ibad2'? I predict False.")
console.log(name2.toLowerCase() !== "ibad2")

let num1:number = 10
let num2:number = 20

console.log("Is num1 === 10? I predict True.")
console.log(num1 === 10)

console.log("Is num2 !== 15? I predict True.")
console.log(num2 !== 15)


console.log("Is num1 < 10 && num2 > 5? I predict false.")
console.log(num1 < 10 && num2 > 5)

console.log("Is num1 > 10 || num2 > 10? I predict false.")
console.log(num1 > 10 || num2 < 10)

let fruits:string[] = ["apple", "banana", "orange"]

console.log("Is 'banana' in fruits? I predict True.")
console.log(fruits.includes("banana"))

console.log("Is 'mango' not in fruits? I predict True.")
console.log(!fruits.includes("mango"))



