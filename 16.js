let guests = ["Elon Musk", "Mario Puzo", "Al Pacino"]

function sendMessage(){
    for(let guest of guests){
        if (guest=="Mario Puzo"){
            guest = "Zia Khan"
        }
        var msg = `Hello ${guest}, I would like to invite you to dinner tonight`
        console.log(msg)
    }
}
sendMessage()
console.log("Hi friends I found a biggner dinner table")

//adding to start
guests.unshift("Derek")

// adding to middle
guests.splice(guests.length/2,0,"Ryan")

// adding to end
guests.push("Waqas")

sendMessage()