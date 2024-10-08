let cube = 2 ** 3;
console.log(cube);
//Relational operator
//To compare two values

console.log(10>5);//Boolean
console.log(10<5);//Boolean
console.log(5>=5);//Boolean
console.log(10>!5);//Boolean
console.log(!5);//Boolean
console.log(5!==5);//Boolean

//task:
//given total_bill,discount_start_price if you satisfy the condition print Discount
//Available Otherwise print No discount

let total_bill=120;
if(total_bill>80){
console.log("Discount");}
else
{console.log("Not Discount");}


//Task-3:
//Check (male)&(age=224)
let age=45;
let gender='male';
if(gender==="male"){
    if(age>=22){
        console.log("able to marry");

    }
}
else
console.log("Unable to marry");