// block1:{
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }
// );

// let promise = new Promise((resolve,reject) => {
//     let input = -1;

//     rl.question('What id of dish do you want?\n',(n) => {
//         input = n;
//     })

//     setTimeout(() => {
//         rl.close();

//         if(input > 0){
//             resolve(`You ordered dish ${input}\n`);
//         }
//         else{
//             reject("No other has been made\n");
//         }
//     },2000);
// });

// promise
//     .then(result => {
//         console.log(result);
//         process.exit();
//     })
//     .catch(error => {
//         console.log(error);
//         process.exit();
//     })
// }



// let x = 0;

// let naming = 'Vu';

// let result = (x = 5,x * 2,x + 9);

// let test = x >= 0 ? 'Love Thanh Truc' : 'Love Tuong Vy';

// naming += ' Van Vu';

// console.log(x);

// console.log(delete Math.PI);

// console.log(naming);

// console.log(test);

async function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data = {name: 'Vu',age: 18};
            resolve(data);
        },1000);
    });
}

async function handleData(){
    try{
        const data = await fetchData();
        console.log('Received data',data);
    }
    catch(error){
        console.log("Error: ",error);
    }
}

function inProgress(){
    console.log("In Progress ...");
}


handleData();

for(let i = 0; i < 1000; i++) inProgress();

let first = setInterval(() => {
    console.log('hello');
},1000);

setTimeout(() => {
    clearInterval(first);
    console.log('sleeping time');
}
,6000);

const hi = () => {
    console.log('wow');
}

hi();
