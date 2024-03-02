let Guests =["Khalid Kashmiri","Rustin Cohle","Mike Tyson"];

console.log("A bigger dinner table has been found and more people will be joining us for dinner.");

Guests.unshift("Elon Musk");

let mid=Guests.length/2;

Guests.splice(mid,0,"Tony Stark");

Guests.push("Arthur Morgan");

console.log("Updated Guests list: ");

for (let i=0;i<Guests.length;i++){

console.log(`We are happy to invite ${Guests[i]} to our dinner.`);

}

console.log("\n\nUnfortunately, due to limited space, we can only invite two people to the dinner.\n");

for (let i=Guests.length-1;i>=2;i--){

if (Guests.length>2){

    console.log(`We are sorry to say that we can not invite ${Guests[i]} to our dinner.`);
    Guests.pop();
}

else{

    break;

}

}

console.log(`\n`);

for (let i=0; i<Guests.length;i++){

console.log(`We hereby invite ${Guests[i]} to our dinner.`);

}
