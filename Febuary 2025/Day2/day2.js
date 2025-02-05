// function Counter(){
//     this.count = 0;
//     let interval = setInterval(() => {
//         this.count++;
//         console.log(this.count);
//     },1000);

//     setTimeout(() => {
//         clearInterval(interval);
//     },3000);
// }

// new Counter();

// const number = [1,2,3,4,5];

// const doubled = number.map(n => n ** 2);

// console.log(doubled);

// const number = [1, 2, 3, 4, 5];

// const myList = number.map((item) => <p>{item}</p>);

// function App() {
//     return (
//         <div>
//             {myList}
//         </div>
//     );
// }

// let calculation = (a,b) => {
//     return [a + b,a - b, a * b, a / b];
// };

// const [add,subtract,multiply,divide] = calculation(5,6);

// console.log(add,subtract,multiply,divide);

// const test = {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 2005,
//     age: 18,
// };

// function myVehicle(a,b,c,d){
//     return 'My ' + a + ' is ' + b + ' and manufactured in ' + c + ' ' + d;
// }

// const {brand: a,model: b,year: c,age : d} = test;


// console.log(myVehicle(a,b,c,d));

// var hehe = function(){
//     let cnt = 0;

//     return function(){
//         cnt++;
//         console.log(cnt);
//     }
// }

// const v = hehe();

// v();
// v();
// v();

// function wtf(...args){
//     return JSON.stringify(args);
// }

// console.log(wtf(1,2,3));

// const obj = {n: 'Vu',a: 18};

// console.log(Object.keys(obj));

// const arr = [2,3,4];

// console.log(arr.slice(2,5));

const test = {};

test['v'] = 5;

console.log(test['v']);

if(Object(test).keys.has('v')) console.log(3);













