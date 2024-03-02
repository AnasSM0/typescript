let Guests =["Khalid Kashmiri","Rustin Cohle","Mike Tyson"];

console.log(`\nSadly, Mr ${Guests[1]} can't make it to the dinner.`);

Guests[1]="Bruce Wayne";

console.log("\nUpdated Guests List: \n");

for(let i=0;i<Guests.length;i++){
console.log(`I would love to invite ${Guests[i]} to a delicious dinner.`); 
}
