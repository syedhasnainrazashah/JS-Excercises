var car = {type:"Sedan", name:"Mercedes W140", color:"black"};

console.log(car)

function Car(car_obj){
    this.name = car_obj.name
    this.type = car_obj.type
    this.color = car_obj.color

}

var car1= new Car({name:"BMW", type:"Convertible", color:"White"})
var car2 = new Car({name:"Mazda", type:"Sedan", color:"Blue"})
console.log(car1)
console.log(car2)