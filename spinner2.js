const spinMe = ['|   ,', '\r/   ', '\r-   ','\r\\   ','\r/   ', '\r-   ','\r\\   ','\r|   '];
let int = 100;

for (const move of spinMe) {
  setTimeout(() => {
    process.stdout.write(move);
  }, int);
  int += 200;
}