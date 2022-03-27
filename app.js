

// shallow copy

let car = {
    brand : "Tata",
    color : "Black",
}

let vehicle = car

console.log(car, vehicle)    // { brand: 'Tata', color: 'Black' } { brand: 'Tata', color: 'Black' }

vehicle.color = "Red"
console.log(car, vehicle)    // { brand: 'Tata', color: 'Red' } { brand: 'Tata', color: 'Red' }

car.color = "Blue"
console.log(car, vehicle)    // { brand: 'Tata', color: 'Blue' } { brand: 'Tata', color: 'Blue' }



// Partial Deep Copy

let car = {
    brand : "Tata",
    color : "Black",
}

let vehicle = {...car}

console.log(car, vehicle) // { brand: 'Tata', color: 'Black' } { brand: 'Tata', color: 'Black' }

vehicle.color = "Red"
console.log(car, vehicle) // { brand: 'Tata', color: 'Black' } { brand: 'Tata', color: 'Red' }




// Partial Deep Copy failing in nested objects

let car = {
    brand : "Tata",
    model:{
        type:"suv",
    }
}
let vehicle = {...car}

console.log(car, vehicle) // { brand: 'Tata', model: { type: 'suv' } } { brand: 'Tata', model: { type: 'suv' } }

vehicle.model.type = "Hatchback"
console.log(car, vehicle) // { brand: 'Tata', model: { type: 'Hatchback' } } { brand: 'Tata', model: { type: 'Hatchback' } }



// deep copy
let car = {
    brand : "Tata",
    model:{
        type:"suv",
    }
}

let vehicle = JSON.parse(JSON.stringify(car))

console.log(car, vehicle)   //  { brand: 'Tata', model: { type: 'suv' } } { brand: 'Tata', model: { type: 'suv' } }

vehicle.model.type="Hatchback"
console.log(car, vehicle);  //  { brand: 'Tata', model: { type: 'suv' } } { brand: 'Tata', model: { type: 'Hatchback' } }



// with JSON.parse,JSON.stringify we lost the methods

let car = {
    brand : "Tata",
    model:{
        type:"suv",
    },
    drive: ()=> console.log("i'm driving")
}
let vehicle = JSON.parse(JSON.stringify(car))
console.log(car)        //  { brand: 'Tata',model: { type: 'suv' },drive: [Function: drive] }
console.log(vehicle)    //  { brand: 'Tata', model: { type: 'suv' } }




// lodash
const lodash = require('lodash');
let car = {
    brand : "Tata",
    model:{
        type:"suv",
    },
    drive: ()=>"i'm driving car"
}
let vehicle = lodash.cloneDeep(car)

vehicle.drive = ()=>"i'm driving vehicle"

console.log(car.drive())        // i'm driving car
console.log(vehicle.drive())    // i'm driving vehicle
