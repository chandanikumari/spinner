const char = "|/-\\|/-\\|";
let time = 100;

for (const c of char) {
  setTimeout(() => {
    // print the char here
    process.stdout.write('\r' + c + " ");
  }, time);
  time += 200;
}

