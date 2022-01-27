// 역순 별찍기

for (let i = 0; i < 7; i++) {
  let str = "";
  for(let j = 0; j < 7 - i; j++) {
    str += '*';
  }
  console.log(str);
}