"use strict";
function car_details(manufacturer, model, ...extras) {
    let car = Object.assign({ manufacturer: manufacturer, model: model }, Object.fromEntries(extras));
    return car;
}
let myCar = car_details("Mclaren", "Senna GTR", ["year", 2020], ["color", "midnight blue"]);
console.log(myCar);
