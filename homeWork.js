// 1-misol 
// const obj = { a: 2, b: 5, c: 8, d: 3 };
// const kvadrat = (obj) => {
//     for(let key in obj) obj[key] = obj[key] * obj[key];
//     return obj; 
// }
// console.log(kvadrat(obj));


// --------------------------------------------------
// // 2-misol

// const obj = { name: "John", age: "30", city: "Paris" };

// const funcChench = (obj) => {
//     for(let key in obj){
//         obj[obj[key]] = key;
//         delete obj[key]    
//     }
//     return obj;
// }

// console.log(funcChench(obj));
// ----------------------------------------------------
// 3-misol

// const obj = { a: 1, b: true, c: null, d: 45 };

// const toString = (obj) => {
//     for(let key in obj) obj[key] = String(obj[key]);
//     return obj;
// }
// console.log(toString(obj));

// -------------------------------------

// // 4-misol

// const obj = { 
//     name: "Alice", 
//     age: 25, 
//     city: "London", 
//     active: true 
// };

// const backString = (obj) => {
//     for(let key in obj){
//         if(typeof obj[key] != "string") delete obj[key];
//     }
// return obj;
// }
// console.log(backString(obj))

// 5-misol


// const obj = { a: true, b: false, c: 10, d: "yes", e: true };

// const countBoolen = () => {
//     count = 0;
//     for(let key in obj){
//         if(typeof obj[key] == "boolean") count ++;
//     }
//     return count;
// }

// console.log(countBoolen(obj));

// 6-misol

// const obj = { shorttttttttt: 10, longer: 20, longestKey: 30 };

// const max_key = (obj) => {
//     arr = [];
//     for(let key in obj){
//         arr.push(key)
//     } 
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i].length > arr[i+1].length)
//         {
//             arr[i+1] = arr[i]
//         }
//     }
//     return arr[arr.length - 1]
// }
// // function removeKeys(obj, keys) { ... }
// console.log(max_key(obj));


// //  7-misol


// const obj = { apple: 10, banana: 20, apricot: 15, cherry: 25 };

// const startA = (obj) => {
//     for(let key in obj){
//         if(key[0] != "a") delete obj[key];
//     }
//     return obj;
// }

// console.log(startA(obj))

// 8-misol


// const obj = { name: "john", city: "london", country: "uk" };

// function toUpperCaseString(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] == "string") obj[key] = obj[key].toUpperCase();
//     }
//     return obj;
// }

// console.log(toUpperCaseString(obj));
