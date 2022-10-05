var usernames = ['admin', 'Eric', 'hasnain', 'raza']

usernames = []

if (usernames.length>0){
    for(var username of usernames){
        if (username=='admin'){
            console.log(`Hello ${username}, do you want to see status report?`)
        }
        else{
            console.log(`Hello ${username}, thank you for logging in.`)
        }
    }
    
}
else {
    console.log("We need to find some users")
}