let magician = ["Magician1", "Magician2", "Magician3", "Magician4", "Magician5"];
function make_great(arrayOfMagician) {
    for (let i = 0; i < arrayOfMagician.length; i++) {
        arrayOfMagician[i] = "The Great " + arrayOfMagician[i];
    }
}
const show_magicians = (arrayOfMagician) => {
    for (let i = 0; i < arrayOfMagician.length; i++) {
        console.log(magician[i]);
    }
};
make_great(magician);
show_magicians(magician);
export {};
