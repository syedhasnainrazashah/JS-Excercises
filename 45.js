function car(manufacturer_name,modal_name, optional){
    if(optional!=undefined){
  return {manufacturer_name,modal_name,optional}
    }
  return {manufacturer_name,modal_name,}
    
}

console.log(car("Mercedes","G63", {"color": "black", "fuel": "gasoline"}))
console.log(car("Bugatti","Bugatti Veyron", {"color": "white"}))
console.log(car("Honda","Civic"))
