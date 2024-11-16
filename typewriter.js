const typeWriter = function (str) {
  let initialTimer = 500;
  for (const char of str) {
  //console.log(char);
    setTimeout(() => {
      process.stdout.write(char); 
    }, (initialTimer += 200));
  }
};

const sentence = "hello there from lighthouse labs";
const sentence2 = "trying something new";
typeWriter(sentence2);


// console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.



