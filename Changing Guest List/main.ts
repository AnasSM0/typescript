let Guests =["Khalid Kashmiri","Rustin Cohle","Mike Tyson"];

for (let i=0; i<Guests.length;i++){

if(Guests[i]=="Rustin Cohle"){
    
    Guests.splice(i,1); // Rustin Cohle is the guest that 
                         //couldn't make it to the dinner.
    Guests.push("Bruce Wayne");
    break;
}
}

console.log("Updated Guests List: ");

for (let i=0;i<Guests.length;i++){

console.log(`I would love to invite ${Guests[i]} to a delicious dinner.`); 

}