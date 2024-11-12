import * as readline from 'readline'; // Import the entire readline module

async function cramtx() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your name: ', (name) => {
    console.log(`Hello ${name}!`);
    rl.close();
  });
}

export default cramtx;