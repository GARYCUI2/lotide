const args = process.argv;
const newArgs = [];

for (let i = 2; i < args.length; i++) {
  let charArray = args[i].split('');
  let revString = '';
  for (let j = charArray.length-1; j >= 0; j-- ) {
    revString += charArray[j];
  }
  newArgs.push(revString);
}

for(let i = 0; i < newArgs.length; i++){
  console.log(newArgs[i]);
}

