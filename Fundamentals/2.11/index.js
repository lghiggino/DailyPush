console.log(null || 2 || undefined);

console.log(console.log(1) || 2 || console.log(3));

console.log(1 && null && 2);

console.log(console.log(1) && console.log(2));

console.log(null || (2 && 3) || 4);

console.log(2, 1, 2, null, 1, undefined, 3);

function whichIf() {
  if (-1 || 0) console.log("first");
  if (-1 && 0) console.log("second");
  if (null || (-1 && 1)) console.log("third");
}

whichIf()

console.log((null || (-1 && 1)))

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Who is there?',function (username){
    if (!username){
        console.log('Canceled!')
        rl.close();
    }
    if (username !== "Admin"){
        console.log('I dont know you!')
        rl.close();
    }
    if (username === "Admin"){
        passwordChecker()
    }
})

function passwordChecker(){
    rl.question('Please enter your password?',function (password){
        if(!password){
            console.log('Canceled!')
            rl.close();
        }
        if (password !== 'TheMaster'){
            console.log('Wrong password')
            rl.close();
        }
        if (password === 'TheMaster'){
            console.log('Welcome!')
            rl.close();
        }
    })
}