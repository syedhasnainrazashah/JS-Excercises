function show_magicians(arr){
    for (var magician of arr){
        console.log(magician)
    }
}

var magicians = ['magician1', 'magician2', 'magician3']
function make_great(magicians){
    var arr = []
    for (var magician of magicians){
        arr.push(`Great ${magician}`)
    }
    return arr
}
show_magicians(magicians)
show_magicians(make_great(magicians))