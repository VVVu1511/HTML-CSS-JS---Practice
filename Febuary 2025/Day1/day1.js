const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}
);

let promise = new Promise((resolve,reject) => {
    let input = -1;

    rl.question('What id of dish do you want?\n',(n) => {
        input = n;
    })

    setTimeout(() => {
        rl.close();

        if(input > 0){
            resolve(`You ordered dish ${input}\n`);
        }
        else{
            reject("No other has been made\n");
        }
    },2000);
});

promise
    .then(result => {
        console.log(result);
        process.exit();
    })
    .catch(error => {
        console.log(error);
        process.exit();
    })