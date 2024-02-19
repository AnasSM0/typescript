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

