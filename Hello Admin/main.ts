let users = ["admin","Eric","Erica","John Doe","Rustin Cohle"];

for (let i = 0; i < users.length; i++) {

if (users[i] === 'admin') {

    console.log(`Hello ${users[i]}, would you like to see the status report?`);

    } 
    
else {

    console.log(`Hello ${users[i]}, thank you for logging in again.`);

    }
}
