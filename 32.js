var current_users = ["hasnain", "raza","oun", 'mohsin', 'mujtaba']

var new_users = ['HasnaIn', 'wajid', 'taimoor', 'MOHSIN']

current_users = current_users.map(element => {
    return element.toLowerCase();
  });

for(var username of new_users){
    if (current_users.includes(username.toLowerCase())){
        console.log(`${username} will need to find a new username`)
    }
    else{
        console.log(`${username} is avaiable`)
    }
}

