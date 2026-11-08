// function multiplyValue(value: number, multiplier?: number) {
//     if (multiplier === undefined) {
//         multiplier = 2;
//     }
    
    
//     return value * multiplier;
// }

// const result1 = multiplyValue(5);
// const result2 = multiplyValue(5, 3); 


// console.log(result1);
// console.log(result2);




// problem solvin 2 

 function processInput(input: string | number | boolean) {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
     else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}

const result1 = processInput("  Hello World  ");
const result2 = processInput(5);
const result3 = processInput(true);
const result4 = processInput(false);

console.log(result1); 
console.log(result2);
console.log(result3); 
console.log(result4);