let Magicians = ["Harry Houdini", "David Copperfield","Penn Jillette", "David Blaine","Criss Angel"];

function show_magicians(magicians:string []){

for (let i=0;i<magicians.length;i++){

console.log(`${magicians[i]}`);


}


};

function make_great(Magicians:string []): string[]{

    let great_magicians : string [] = [];

for(let i=0;i<Magicians.length;i++){

    great_magicians.push("The Great " + Magicians[i]);
}

return great_magicians;

};

let greats : string [] = make_great([...Magicians]);

show_magicians(Magicians);
console.log("\n");
show_magicians(greats);