function car_details(manufacturer:string,model:string, ...extras:[string,any][]):any{

let car ={
manufacturer:manufacturer,
model:model,
...Object.fromEntries(extras)
};

return car;

}

let myCar=car_details("Mclaren","Senna GTR",["year",2020],["color","midnight blue"]);

console.log(myCar);