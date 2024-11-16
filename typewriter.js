const sentence = "hello there from lighthouse labs";
let initialTimer = 500;
for (const char of sentence) {
  //console.log(char);
  setTimeout(() => {
    process.stdout.write(char); 
  }, (initialTimer += 200));
}



// console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.



