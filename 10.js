
/// 3.js
var person_name = "elON mUsk"

// function to convert string to Titlecase 
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

console.log("lowercase :", person_name.toLowerCase())
console.log("UPPERCASE :", person_name.toUpperCase())
console.log("Titlecase :", toTitleCase(person_name))


// 9.js My Favorite Number
var fav_num = 4

msg = `${fav_num} is my favorite number`
console.log(msg)