console.log("1차 배열의 탐색");

const data = [4,5,2,1,3,6];
for(const item of data) {
  console.log(item);
}

console.log("2차 배열의 탐색");

const myArr = [
  [4,5,2],
  [1,3,6]
];

for(const item of myArr) {
  console.log(item);

  for(const sub of item) {
    console.log(sub);
  }
}



