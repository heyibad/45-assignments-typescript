let current_user:string[] = ['user1', 'user2', 'user3', 'user4', 'user5']
let new_user:string[] = ['user3', 'user4', 'user8', 'user6', 'user7']

new_user.map((user) => {
    if (current_user.includes(user)) {
        console.log(`Username ${user} is not avaliable, you have to find another username!`)
    }
    else {
        console.log(`Username ${user} is avaliable!`)
    }
})