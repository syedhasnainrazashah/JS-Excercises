var guests = ["Elon Musk", "Mario Puzo", "Al Pacino"]

console.log(`I am inviting ${guests.length} people to dinner tonight`)

for(var guest of guests){
    var msg = `Hello ${guest}, I would like to invite you to dinner tonight`
    console.log(msg)
}

