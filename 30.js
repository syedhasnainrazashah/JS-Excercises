var usernames = ['admin', 'Eric', 'hasnain', 'raza']

for(var username of usernames){
    if (username=='admin'){
        console.log(`Hello ${username}, do you want to see status report?`)
    }
    else{
        console.log(`Hello ${username}, thank you for logging in.`)
    }
    
}