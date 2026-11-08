function multiplyValue(value: number, multiplier?: number) {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    
    
    return value * multiplier;
}

const result1 = multiplyValue(5);
const result2 = multiplyValue(5, 3); 


console.log(result1);
console.log(result2);