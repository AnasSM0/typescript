var Name = "Eric";
console.log("Lowercase: ", Name.toLowerCase());
console.log("Uppercase: ", Name.toUpperCase());
console.log("Title Case: ", Name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
