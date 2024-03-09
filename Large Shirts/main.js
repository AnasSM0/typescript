function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("You have ordered a ".concat(size, " T-shirt with the message ").concat(message));
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "TypeScript is amazing");
