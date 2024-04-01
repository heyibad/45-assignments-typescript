let magician: string[] = ["Magician1", "Magician2", "Magician3", "Magician4", "Magician5"]

function make_great(arrayOfMagician: string[]): string[] {
    let copyOfArray = arrayOfMagician.slice()
    for (let i = 0; i < copyOfArray.length; i++) {
        copyOfArray[i] = "The Great " + copyOfArray[i];
    }
    return copyOfArray
}

const show_magicians = (arrayOfMagician: string[]): void => {
    for (let i = 0; i < arrayOfMagician.length; i++) {
        console.log(arrayOfMagician[i])
    }
}

const greatMagicians:Array<string> = make_great([...magician])
console.log(greatMagicians)
show_magicians(magician)

show_magicians(greatMagicians)
