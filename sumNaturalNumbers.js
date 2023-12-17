
const sumNatural = (a, b) => {
  let res = 0;
  if (a < 0 || b < 0) {
    console.log("not acceptable");
    return null;
  }

  if (a > b) {
    for (a; a >= b; a--) {
      res += a;
    }

    return res;
  }

  for (a; a<=b; a++) {
    res += a;
  }

  return res;
};

console.log(sumNatural(10,6));
