// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "*";
//   console.log(str.repeat(i));
// }

// let n = 5;
// for (let i = 5; i >= 1; i--) {
//   let str = "*";
//   console.log(str.repeat(i));
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = ' ';
  console.log(space.repeat((n - i)) + str.repeat(i));
}

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let space = " ".repeat(n - i);
//   let str = "* ".repeat(i);
//   console.log(space + str);
// }
