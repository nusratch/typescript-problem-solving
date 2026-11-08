

// // problem solving 1

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




// // problem solving 2 

//  function processInput(input: string | number | boolean) {
//     if (typeof input === "string") {
//         return input.trim().toLowerCase();
//     }
//      else if (typeof input === "number") {
//         return input * 10;
//     } else {
//         if (input === true) {
//             return "Active";
//         } else {
//             return "Inactive";
//         }
//     }
// }

// const result1 = processInput("  Hello World  ");
// const result2 = processInput(5);
// const result3 = processInput(true);
// const result4 = processInput(false);

// console.log(result1); 
// console.log(result2);
// console.log(result3); 
// console.log(result4);




// problem solving 3


// function formatCoordinate(

//     coordinate: readonly [number, number, string]
// ){

//     const [latitude, longitude, locationName] = coordinate;

//     return `Location: ${locationName} (${latitude}, ${longitude})`;
// }


// const coordinate: readonly [number, number, string] = [40.7128, -74.0060, "New York City"];

// const formattedCoordinate = formatCoordinate(coordinate);

// console.log(formattedCoordinate);



// problem solving 4

 function concatenateArrays<T>(...arrays: T[][]) {

    const result: T[] = [];

    for (const array of arrays) {

        result.push(...array);
    }

    return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const concatenatedArray = concatenateArrays(array1, array2, array3);

console.log(concatenatedArray);



