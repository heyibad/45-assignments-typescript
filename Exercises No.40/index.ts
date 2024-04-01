interface Album{
    nameOfArtist:string;
    titleOfAlbum:string;
    numberOfTracks?:number;
}

function make_album(nameOfArtist:string,titleOfAlbum:string,numberOfTracks?:number):Album{
   if(numberOfTracks!=undefined){
       return{nameOfArtist,titleOfAlbum,numberOfTracks}
   }
   else{ return{nameOfArtist,titleOfAlbum}}
}
console.log(make_album("Arijit Singh","Heeriye"))
console.log(make_album("Visal Mishra","Animal Title Song"))
console.log(make_album("Anonymous","Stanger Things"))
console.log(make_album("Talha","Young S*",10))