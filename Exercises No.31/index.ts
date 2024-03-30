let usernames:Array<string>=['admin','cordinator','author','manager','analyst']

if (usernames.length==0){
    console.log(`we have to find some users!`)

}
else{
    usernames.splice(0, usernames.length)
    console.log(`all users have been deleted! : ${usernames}`)
}