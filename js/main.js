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

const count = fn => {
  let counter = 0;
  return (a, b) => {
    counter += 1;
    console.log(`Вызов #${counter} функции ${fn.name}`);
    return fn(a, b);
  };
};

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

const countsum = count(sum);
const countmulti = count(mult);

const a = countsum(2, 3);
const b = countsum(5, 6);
const c = countmulti(5, 6);
const d = countmulti(6, 6);
console.dir({ a, b, c, d });
