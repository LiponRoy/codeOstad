const Fac = (n) => {
  let i,
    res = 1;
  if (n < 0) {
    console.log("not acceptable");
    return;
  }

  for (i = 1; i <= n; i++) {
    res *= i;
  }

  return res;
};

console.log(Fac(5));
