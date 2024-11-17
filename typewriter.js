const typeWriter = function (str) {
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write(str[i]); //console.log would display 1 letter/line
    }, (i * 200));
  }
  setTimeout(() => {
    console.log("\n");
  }, ((str.length * 200)));
};

const sentence = "hello there from lighthouse labs";
const sentence2 = "trying something new";
typeWriter(sentence2);


// console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.



