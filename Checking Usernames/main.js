var current_users = ["admin", "user1", "user2", "user3", "user4"];
var new_users = ["admin", "user1", "John", "Eric", "Rustin"];
var usersLower = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < usersLower.length; i++) {
    if (current_users[i] == new_users[i]) {
        console.log("user name already taken. Please Try again.");
    }
    else {
        console.log("The username is available to use.");
    }
}
