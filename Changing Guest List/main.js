var Guests = ["Khalid Kashmiri", "Rustin Cohle", "Mike Tyson"];
console.log("sSadly, Mr ".concat(Guests[1], " can't make it to the dinner."));
Guests[1] = "Bruce Wayne";
console.log("\nUpdated Guests List: \n");
for (var i = 0; i < Guests.length; i++) {
    console.log("I would love to invite ".concat(Guests[i], " to a delicious dinner."));
}
