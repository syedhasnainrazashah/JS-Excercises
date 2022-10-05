function make_shirt(size="Large", msg){
    if (size == 'Large' || size == 'Medium'){
        console.log("I love javascript")
    }
    else{
        console.log(`Size : ${size} and Message : ${msg}`)
    }
 
}

make_shirt('Medium', "Metaverse")
make_shirt("Small", "Small shirt message")