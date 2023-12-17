const myArr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const n = myArr.length;
let maxSome = 0;
let windowSome = 0;
const k = 4;

for (let i = 0; i < k; i++) {
  windowSome = windowSome + myArr[i];
}

maxSome = windowSome;

// console.log("frist k velue some",windowSome);
let i = 0;
for (let j = k; j < myArr.length; j++) {

  windowSome = windowSome - myArr[i];
  windowSome = windowSome + myArr[j];

  if(windowSome>maxSome){
    maxSome=windowSome
  }


  i++;

}

console.log(maxSome)
