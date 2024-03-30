
let numbers: number[] = [1,2,3,4,5,6,7,8,9]

numbers.forEach((each) => {
 if(each ==1) console.log(`${each}st`)
 if(each ==2) console.log(`${each}nd`)
 if(each ==3) console.log(`${each}rd`)
 else{
console.log(`${each}th`)
}
})