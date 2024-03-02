var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Places = ["Italy", "Switzerland", "Paris", "Makkah", "Madina"];
console.log(Places);
console.log("\nPlaces in Alphabetical order: ");
console.log(__spreadArray([], Places, true).sort());
console.log("\nOriginal Order: ");
console.log(Places);
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], Places, true).sort().reverse());
console.log("\nOriginal Order:");
console.log(Places);
Places.reverse();
console.log("\nReversed Order:");
console.log(Places);
console.log("\nSorted in Alphabetical Order after new order:");
console.log(Places.sort());
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(Places.sort().reverse());
