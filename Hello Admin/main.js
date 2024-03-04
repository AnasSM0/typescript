var users = ["admin", "Eric", "Erica", "John Doe", "Rustin Cohle"];
for (var i = 0; i < users.length; i++) {
    if (users[i] === 'admin') {
        console.log("Hello ".concat(users[i], ", would you like to see the status report?"));
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again."));
    }
}
