var person_name = "Hasnain"
var person_age = 25

if (person_age <2) {
    console.log(`${person_name} is a baby`)
} 
else if (person_age >=2 && person_age<4) {
    console.log(`${person_name} is a toddler`)
} 
else if(person_age >=4 && person_age<13) {
    console.log(`${person_name} is a kid`)
}
else if (person_age>=13 && person_age<20){
    console.log(`${person_name} is a teenager`)
}
else if (person_age>=20 && person_age<65){
    console.log(`${person_name} is a adult`)
}
else if (person_age>=65){
    console.log(`${person_name} is a elder`)
}


