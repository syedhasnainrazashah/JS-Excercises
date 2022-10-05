var numbers = [2,5,6,1,7,3,9,8,4]

for(var num of numbers){
    i = numbers.indexOf(num) + 1

    if (i>3){
        console.log(`${i}th`)
    }
    else if (i==1){
        console.log(`${i}st`)
    }
    else if (i==2){
        console.log(`${i}nd`)
    }
    else if (i==3){
        console.log(`${i}rd`)
    }
}