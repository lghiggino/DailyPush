const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is the official name of JavaScript?',function (jsName){
    if (jsName === 'ECMAScript'){
        console.log('Right!')
        rl.close();
    }else {
        console.log("You don't know? It is ECMASCript")
        rl.close();
    }
})
