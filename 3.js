var person_name = "elON mUsk"

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