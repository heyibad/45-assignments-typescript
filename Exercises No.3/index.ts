
let name : string = "muhammad ibad"

console.log(name.toUpperCase())
console.log(name.toLowerCase())
function toTitleCase(str: string): string {
    let strArray :string[] = str.split(" ")
    let result:string = ""
    for (let i = 0; i < strArray.length; i++) {
        result += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1) + " "
    }
    return result.trim()
}


console.log(toTitleCase(name))
