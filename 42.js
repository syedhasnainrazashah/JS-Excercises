function show_magicians(arr){
    for (var magician of arr){
        console.log(magician)
    }
}

var magicians = ['magician1', 'magician2', 'magician3']
function make_great(){
    var arr = []
    for (var magician of magicians){
        arr.push(`Great ${magician}`)
    }
    magicians = arr
}
make_great(magicians)
show_magicians(magicians)