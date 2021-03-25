// console.log("Hello world");

// const logging = fn => (...args) => {
//   let res = fn(...args);
//   console.log(`Func ${fn.name}(${args.join(",")}), res: ${res}`);
//   return res;
// };

// const sum = (a, b) => a + b;

// const wrapped = logging(sum);
// const a = wrapped(3, 5);
// const b = wrapped(6, 1);
// const c = wrapped(1, -1);
// console.dir({ a, b, c });

// logging((a, b) => a * b)(4, 5);

// const count = fn => {
//   let counter = 0;
//   return (a, b) => {
//     counter += 1;
//     console.log(`Вызов #${counter} функции ${fn.name}`);
//     return fn(a, b);
//   };
// };

// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b;

// const countsum = count(sum);
// const countmulti = count(mult);

// const a = countsum(2, 3);
// const b = countsum(5, 6);
// const c = countmulti(5, 6);
// const d = countmulti(6, 6);
// console.dir({ a, b, c, d });

// const add = (a, b) => a + b;
// const sum = (a, b, cb) => cb(a + b);

// sum(5, 4, console.log.bind(null, "Use sum:"));

// const fs = require("fs");

// fs.readFile("./main.js", "utf8", (err, data) => {
//   if (!err) {
//     console.log({ lines: data.split("\n").length });
//   } else {
//     console.log(err.message);
//   }
// });
// console.log("end");

// const print = (fileName, err, data) => {
//   if (!err) {
//     console.log({ lines: data.split("\n").length, filename: fileName });
//   } else {
//     console.log(err.message);
//   }
// };

// const path = "./main.js";
// const cb = print.bind(null, path);
// fs.readFile(path, "utf8", cb);
// let position = "Project Manager";

// document.cookie = `position=${encodeURIComponent(position)}; SameSite=Lax`;

// console.log(document.cookie);
