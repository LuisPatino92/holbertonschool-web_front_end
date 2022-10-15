function cPrimeNumbers() {
  let c = 0;
  let prime;
  for (let i = 2; i <= 100; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      c += 1;
    }
  }
  return c;
}

const t0 = performance.now();
for (let index = 0; index < 100; index++) {
  cPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
