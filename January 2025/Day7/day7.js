function bai1(){
    return new Promise((resolve) => {
        let sum = 0;
        let N = 0;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question("Enter N: ",(answer) => {
            N = answer;
            
            for(let i = 1; i <= N; i++) sum += i;
        
            console.log(sum);
    
            rl.close();
            resolve();
        });
    });
}

function bai2(){
    return new Promise((resolve) => {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question("Enter N: ",(answer) => {
            for(let i = 1; i < answer; i++){
                if(answer % i == 0) console.log(i);
            }
            rl.close();
            resolve();
        });
    });
}

function bai3(){
    return new Promise((resolve) => {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter N: ",(answer) => {
            let sum = 0;

            for(let i = 2; i <= answer; i += 2){
                if(answer % i == 0) sum += i;
            }
            console.log(sum);

            rl.close();
            resolve();
        });
    });
}

function bai4(){
    return new Promise((resolve) => {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        let x,a,b;

        rl.question('Enter a: ',(answer) => {
            a = parseFloat(answer);

            rl.question('Enter b: ',(answer2) => {
                b = parseFloat(answer2);
                
                let inConsole;
                
                if(a == 0){
                    if(b == 0) inConsole = 'Vo so nghiem';
                    else inConsole = 'Vo nghiem';
                }
                
                else{
                    inConsole = `Nghiem duy nhat cua phuong trinh la ${-b/a}`;
                }
                
                console.log(inConsole);

                rl.close();
                resolve();                
            });
            
        });

    });
}

function bai5(){
    for(let i = 1; i < 100; i += 2) console.log(i);
}


async function main(){
    // console.log("Bai1");
    // await bai1();
    // console.log("Bai2");
    // await bai2();
    // console.log("Bai3");
    // await bai3();
    // console.log("Bai4");
    // await bai4();
    // console.log("Bai5");
    // await bai5();
}

main();