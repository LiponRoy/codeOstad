const myArr = [2,7,11,15];
const n = myArr.length;
const target = 26;
let windowSome = 0;
const k = 2;
let resultArr = [];

for (let i = 0; i < k; i++) {
  windowSome = windowSome + myArr[i];
  if (windowSome === target) {
    resultArr.push(i - 1);
    resultArr.push(k - 1);

  }
}

// maxSome = windowSome;

// console.log("frist k velue some",windowSome);
let i = 0;
for (let j = k; j < myArr.length; j++) {
  windowSome = windowSome - myArr[i];
  windowSome = windowSome + myArr[j];

  if (windowSome === target) {
    resultArr.push(i+1);
    resultArr.push(j);
  }

  i++;
}

console.log(resultArr);
