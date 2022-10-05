var guests = ["Elon Musk", "Mario Puzo", "Al Pacino"]
for(var guest of guests){
    if (guest=="Mario Puzo"){
        guest = "Zia Khan"
    }
    var msg = `Hello ${guest}, I would like to invite you to dinner tonight`
    console.log(msg)
}
