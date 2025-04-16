/*
    figure out how to get input from user
    figure out 

*/
import readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, (name : string) => {
  console.log(`Hi ${name}!`);
  rl.close();
});
