let name = "muhammad ibad";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
function toTitleCase(str) {
    let strArray = str.split(" ");
    let result = "";
    for (let i = 0; i < strArray.length; i++) {
        result += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1) + " ";
    }
    return result.trim();
}
console.log(toTitleCase(name));
export {};
