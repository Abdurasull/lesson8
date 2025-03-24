// // 1-misol 
// const user = {
//     name: "Aziz",
//     age: 30,
//     country: "Uzbekistan",
//     isMarried: false
// };

// const userString = (user) => {
//     strList = [];
//     for(let str in user){
//         if(typeof user[str] == 'string') strList.push(user[str]);
//     }
//     return strList;
// }
// console.log(userString(user))
// --------------------------------------------------
// // 2-misol

// const data = {
//     a: 10,
//     b: 20,
//     c: "Hello",
//     d: "world"
// };
// const sumNumbers = (data) => {
//     sum = 0;
//     for(let i in data){
//         if(typeof data[i] == 'number') sum += data[i];
//     }
//     return sum;
// }
// console.log(sumNumbers(data))
// ----------------------------------------------------
// 3-misol

// const numbers = {
//     x: 45,
//     y: 76734,
//     z: 22,
//     k: 91
// };

// const max_number = (numbers) => {
//     arr = [];
//     for(let key in numbers){
//         arr.push(numbers[key])
//     } 
//     return Math.max(...arr)
// }
// console.log(max_number(numbers))

// -------------------------------------

// 4-misol

// const obj = {
//     name: "Anvar",
//     isAdmin: true,
//     age: 25,
//     isOnline: false
// };

// const boolinFunc = (obj) => {
//     for(let key in obj){
//         if(typeof obj[key] == "boolean") delete obj[key];
//     }
// return obj;
// }
// console.log(boolinFunc(obj))

// 5-misol


// const obj = {
//     name: "Ali",
//     age: "25",
//     country: "Uzbekistan"
// };

// const funcChench = (obj) => {
//     for(let key in obj){
//         obj[obj[key]] = key;
//         delete obj[key]    
//     }
//     return obj;
// }

// console.log(funcChench(obj));

// 6-misol

// const data = {
//     name: "Dilshod",
//     age: 30,
//     password: "123456",
//     email: "test@example.com"
// };

// const removeKeys = (obj, keys) => {
//     for(let key in obj){
//         if(keys.includes(key)) delete obj[key];
//     }
//     return obj;
// }
// // function removeKeys(obj, keys) { ... }
// console.log(removeKeys(data, ["password", "email"]));


// //  7-misol


// const data = {
//     name: "Alice",
//     age: "unknown",
//     country: "unknown",
//     city: "Paris"
// };

// const toReplace = (obj, params1, params2) => {
//     for(let key in obj){
//         if(obj[key] == params1) obj[key] = params2;
//     }
//     return obj;
// }

// console.log(toReplace(data, "unknown", "N/A"))

// 8-misol


// const data = {
//     fruit: "banAna",
//     color: "yellow",
//     country: "uzbekiStan"
// };

// function capitalizeFirstLetter(obj) {
//     for(let key in obj) obj[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase();
//     return obj;
// }

// console.log(capitalizeFirstLetter(data));
