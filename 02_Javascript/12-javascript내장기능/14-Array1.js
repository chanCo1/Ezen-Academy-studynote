// 배열의 원소를 추가, 삭제, 변경하는 방법

// 테스트를 위한 배열
const data = [10,20,30,40,50];

// 배열의 맨 끝에 요소 추가 (파라미터 수 제한 없음)
data.push(60,70);
console.log(data);

// 마지막 요소를 리턴하고 제거
const k = data.pop();
console.log(k);
console.log(data);

// 맨 앞 요소를 추가 (파라미터 수 제한 없음)
data.unshift(0,10);
console.log(data);

// 맨 앞 요소를 리턴하고 제거
const x = data.shift();
console.log(x);
console.log(data);


// 2번째 위치부터 3개를 잘라서 반환하고 원본에서는 제거
const z = data.splice(2,3); // 0부터 센다 (시작위치, 갯수)
console.log(z);
console.log(data);

// 0번째 위치부터 2개를 제거하고 그 위치에 다른 요소들을 배치함
// 제거한 수보다 추가되는 원소수가 많을 경우 배열이 확장됨. 기존의 원소들은 뒤로 밀림.
// 제어한 수보다 추가되는 원소수가 적을 경우 배열이 축소됨
data.splice(0,2,'a','b','c'); // 잘라내고 넣는다
console.log(data);


// 삭제할 원소의 수를 0으로 지정하면 중간 삽입 효과가 있음
// 기존의 원소들은 뒤로 밀려남
data.splice(3,0,'d','e')
console.log(data);

// a에 b와 c를 결합한 새로운 배열을 반환
const a = [1,2];
const b = [3,4,5];
const c = [6,7,8,9];
const d = a.concat(b,c);
console.log(d);

