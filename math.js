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

// vowels
let char="a";
switch (char){
    case "a":
        console.log("it is vowel");
        break;
    case "e":
        console.log("vowel");
        break;
    case "i":
        console.log("vowel");
        break;
    case "o":
        console.log("vowel");
        break;
    case "u":
        console.log("vowel");
        break;
    default:
        console.log("It's not a vowel");
        break; 
}

//Task-4:
//print week of the day in switch statement 

let day=6;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
           

}
