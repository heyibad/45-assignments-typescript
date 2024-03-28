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
export {};
