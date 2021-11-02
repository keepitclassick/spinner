const spinMe = ['|   ,', '\r/   ', '\r-   ','\r\\   ','\r/   ', '\r-   ','\r\\   ','\r|   '];
let int = 100;

const spinner = function(arr) {
  for (const move of arr) {
    setTimeout(() => {
      process.stdout.write(move);
    }, int);
    int += 200;
  }
};

spinner(spinMe);