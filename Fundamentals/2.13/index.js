const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const ans = askQuestion("Are you sure you want to deploy to PRODUCTION? ")

// outer: for (let i = 0; i < 3; i++) {
//   inner: for (let j = 0; j < 3; j++) {
//     let prompt = "";

//     //   let input = prompt(`Value at coords (${i},${j})`, '');
//     rl.question(`Value at coords (${i},${j})`, function (promptI, promptJ) {
//       console.log(promptI, promptJ);
//     });

//     // if an empty string or canceled, then break out of both loops
//     if (!prompt) {
//       console.log("entrou no if");
//       break outer;
//     } else if ("a" !== "b") {
//       console.log("entrou no else if");
//       rl.close();
//       break outer;
//     }
//     // do something with the value...
//   }
// }
// console.log("Done!");
