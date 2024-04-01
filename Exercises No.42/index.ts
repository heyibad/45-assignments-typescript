let magician:string[]=["Magician1","Magician2","Magician3","Magician4","Magician5"]

function make_great(arrayOfMagician:string[]):void{
    for (let i = 0; i < arrayOfMagician.length; i++) {
        arrayOfMagician[i] = "The Great " + arrayOfMagician[i]
    }
}
const show_magicians=(arrayOfMagician:Array<string>):void=>{
    for(let i=0;i<arrayOfMagician.length;i++){
        console.log(magician[i])
    }
}
make_great(magician)
show_magicians(magician)