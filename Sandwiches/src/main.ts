function make_sandwiches(...items:string[]){

console.log("\nAdding the following to your sandwich: ");

for(let i=0;i<items.length;i++){

console.log(`${items[i]}`);

}
}

make_sandwiches("Turkey","Lettuce","Tomatoes");
make_sandwiches("Chicken","Mayo","Black Pepper","Olives","Jalapenos");
make_sandwiches("Smoked Sausages","Teriyaki Sauce");