let listOfPerson = ["#1", "#2", "#3"];
listOfPerson.forEach((each) => {
    console.log(`I would like to invite you on dinner with me, Dear " ${each} 💌 ",\n I Hope you will join me.`);
});
let someoneIsMising = true;
let guestNotArrived = "#2";
console.log(`${guestNotArrived}, can't make it.`);
let newGuest = "#4";
if (someoneIsMising) {
    const newList = listOfPerson.filter((eachGuest) => eachGuest !== guestNotArrived);
    listOfPerson = newList;
    listOfPerson.push(newGuest);
    listOfPerson.forEach((eachGuest) => {
        console.log(`I would like to invite you on dinner with me, Dear ${eachGuest} , I Hope you will join me.`);
    });
}
console.log("I have found a bigger table, so I am inviting more people to join us.");
let biggerTableFound = true;
let newGuestList = ["#5", "#6", "#7"];
if (biggerTableFound) {
    listOfPerson.unshift(newGuestList[0]);
    listOfPerson.splice(2, 0, newGuestList[1]);
    listOfPerson.push(newGuestList[2]);
    listOfPerson.forEach((eachGuest) => {
        console.log(`I would like to invite you on dinner with me, Dear ${eachGuest} , I Hope you will join me.`);
    });
}
export {};
