var Guests = ["Khalid Kashmiri", "Rustin Cohle", "Mike Tyson"];
console.log("A bigger dinner table has been found and more people will be joining us for dinner.");
Guests.unshift("Elon Musk");
var mid = Guests.length / 2;
Guests.splice(mid, 0, "Tony Stark");
Guests.push("Arthur Morgan");
console.log("Updated Guests list: ");
for (var i = 0; i < Guests.length; i++) {
    console.log("We are happy to invite ".concat(Guests[i], " to our dinner."));
}
console.log("\n\nUnfortunately, due to limited space, we can only invite two people to the dinner.\n");
for (var i = Guests.length - 1; i >= 2; i--) {
    if (Guests.length > 2) {
        console.log("We are sorry to say that we can not invite ".concat(Guests[i], " to our dinner."));
        Guests.pop();
    }
    else {
        break;
    }
}
console.log("\n");
for (var i = 0; i < Guests.length; i++) {
    console.log("We hereby invite ".concat(Guests[i], " to our dinner."));
}
