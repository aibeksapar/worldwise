console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

setTimeout(() =>
  new Promise((res) => {
    console.log(4);
    res(null);
  }).then(() => console.log(5))
);

setTimeout(() => console.log(6));

console.log(7);
