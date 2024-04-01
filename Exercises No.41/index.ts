let magician:string[]=["Magician1","Magician2","Magician3","Magician4","Magician5"]

const show_magicians=(arrayOfMagician:Array<string>):void=>{
    for(let i=0;i<arrayOfMagician.length;i++){
        console.log(magician[i])
    }
}
show_magicians(magician)