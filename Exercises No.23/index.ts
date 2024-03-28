let car: string = "Toyota"
console.log('if car is Toyota, then the output will be true')
console.log(car === "Toyota")

let box: string = "2x2"
console.log('if box is 4x4, then the output will be false')
console.log(box === "4x4")

let color: string = "red"
console.log('if color is red, then the output will be true')
console.log(color === "red")

let number: number = 10
console.log('if number is <5, then the output will be false')
console.log(number < 5)

let age: number = 18
console.log('if age is >=17, then the output will be true')
console.log(age >= 17)

let arr:Array<string> = ["a", "b", "c"]
console.log('if arr length is 6, then the output will be false')
console.log(arr.length === 6)

let arr2:Array<number> = [1, 2, 3]
console.log('if arr2 length is 3, then the output will be true')
console.log(arr2.length === 3)

let arr3:(string|number|boolean)[] = ["a", false, "c",8]
console.log('if arr3[1]===true, then the output will be false')
console.log(arr3[1] === true)

let arr4:(string|number|boolean)[] = ["a", true, "q",9]
console.log('if arr[3]==9, then the output will be true')
console.log(arr4[3] === 9)

let arr5:boolean[] = [false, true, false]
console.log('if arr5[2]==true, then the output will be false')
console.log(arr5[2] === true)