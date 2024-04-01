function make_album(nameOfArtist, titleOfAlbum, numberOfTracks) {
    if (numberOfTracks != undefined) {
        return { nameOfArtist, titleOfAlbum, numberOfTracks };
    }
    else {
        return { nameOfArtist, titleOfAlbum };
    }
}
console.log(make_album("Arijit Singh", "Heeriye"));
console.log(make_album("Visal Mishra", "Animal Title Song"));
console.log(make_album("Anonymous", "Stanger Things"));
console.log(make_album("Talha", "Young S*", 10));
export {};
