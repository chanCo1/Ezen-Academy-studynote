// FIXME: 문제 1.
// const studentBlood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

// const result = {
//   "A": 0,
//   "B": 0,
//   "AB": 0,
//   "O": 0
// };

// for(const i of studentBlood) {
//   result[i]++;
// };
// console.log(result);

// FIXME: 문제 2-1.
// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// };

// // JSON의 key에 대한 반복 처리
// for(const key in exam) {
//   // 학생별 총점을 위한 변수 초기화
//   let sum = 0;

//   // exam[key]는 학생 한명의 점수 배열.
//   // 이 배열의 원소를 스캔하는 반복문을 사용하여 총점 구하기
//   for(const p of exam[key]) {
//     sum += p;
//   }

//   // 총점을 학생 개개인의 과목수로 나누어 평균 구하기
//   let avg = sum / exam[key].length;
//   console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", key, sum, avg);
// }


// FIXME: 문제 2-2
// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// };

// // 전체 학생에 대한 총점이므로 반복문의 바깥에서 변수 초기화
// let sum = 0;

// // JSON은 길이를 알 수 없기 때문에 JSON의 원소 하나를 반복문으로 스캔할 때 마다 count 변수를 1씩 증가하여 전체 학생 수를 알아내야 한다
// let studentCount = 0;

// for(const key in exam) {
//   console.log(key);
//   sum += exam[key][2];

//   // 몇 번째 학생인지 카운드
//   studentCount++;
// }

// // 학생별 수학 총점 / 학생수
// let avg = sum / studentCount;
// console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg);



// FIXME: 문제 3-1
// covid19 = [
//   {date: '0125', active: 426},
//   {date: '0126', active: 343},
//   {date: '0127', active: 547},
//   {date: '0128', active: 490},
//   {date: '0129', active: 460},
//   {date: '0130', active: 443},
//   {date: '0131', active: 338},
//   {date: '0201', active: 299}
// ]

// // 전체 확인자 수를 위한 합계 변수
// let sum = 0;

// for(const j of covid19) {
//   sum += j.active;
// }
// console.log("누적 확진자 수: %d", sum);
// console.log("평균 확진자 수: %d", sum / covid19.length);

// FIXME: 문제 3-2.
// covid19 = [
//   {date: '0125', active: 426},
//   {date: '0126', active: 343},
//   {date: '0127', active: 547},
//   {date: '0128', active: 490},
//   {date: '0129', active: 460},
//   {date: '0130', active: 443},
//   {date: '0131', active: 338},
//   {date: '0201', active: 299}
// ]

// let maxActive = covid19[0].active;
// let maxDate = covid19[0].date;

// for(const j of covid19) {
//   if(maxActive < j.active) {
//     maxActive = j.active;
//     maxDate = j.date;
//   }
// }
// console.log("확진자가 가장 많이 나타난 날: %s", maxDate);

// TODO: 문제 1
// const studentBlood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
// const result = {
//   "A" : 0,
//   "B" : 0,
//   "AB" : 0,
//   "O" : 0
// };

// for(const i of studentBlood) {
//   result[i]++;
// }
// console.log(result);

// TODO: 문제 2-1
// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// }

// for(const key in exam) {
//   let sum = 0;
//   for(const p of exam[key]) {
//     sum += p;
//   }

//   let avg = sum / exam[key].length;
//   console.log(`${key},${sum},${avg}`);
// }

// TODO: 문제 2-2
// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// }

// let sum = 0;
// let studentCount = 0;

// for(const key in exam){
//   sum += exam[key][2];
//   studentCount++;
// }
// let avg = sum / studentCount;
// console.log(`${sum},${avg}`);

// TODO: 문제 3-1
// covid19 = [
//   {date: '0125', active: 426},
//   {date: '0126', active: 343},
//   {date: '0127', active: 547},
//   {date: '0128', active: 490},
//   {date: '0129', active: 460},
//   {date: '0130', active: 443},
//   {date: '0131', active: 338},
//   {date: '0201', active: 299}
// ]

// let sum = 0;

// for(const i of covid19) {
//   sum += i.active;
// }

// let avg = sum / covid19.length;
// console.log(`${sum},${avg}`);

// TODO: 문제 3-2
// covid19 = [
//   { date: '0125', active: 426 },
//   { date: '0126', active: 343 },
//   { date: '0127', active: 547 },
//   { date: '0128', active: 490 },
//   { date: '0129', active: 460 },
//   { date: '0130', active: 443 },
//   { date: '0131', active: 338 },
//   { date: '0201', active: 299 },
// ];

// let maxActive = covid19[0].active;
// let maxDate = covid19[0].date;

// for (const i of covid19) {
//   if (maxActive < i.active) {
//     maxActive = i.active;
//     maxDate = i.date;
//   }
// }
// console.log(maxDate);



// FIXME: 1

// const studentBloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
// const result = {
//   "A": 0,
//   "B": 0,
//   "AB": 0,
//   "O": 0
// };

// for(const i of studentBloodType) {
//   result[i]++;
// }
// console.log(result);


// FIXME: 2

// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// }


// for(const i in exam) { // key 값을 가져온다.
//   let sum = 0;
//   for(const j of exam[i]) { // key 값에 대한 value 값을 가져온다 (배열)
//     sum += j;
//   }
//   let avg = sum / exam[i].length;
//   console.log(`${i}의 총점은 ${sum}점이고 평균은 ${avg}점 입니다.`);
// }


// FIXME: 3

// const exam = {
//   "철수": [89, 82, 79, 91],
//   "민영": [91, 95, 94, 89],
//   "남철": [65, 57, 71, 64],
//   "혜진": [82, 76, 81, 83]
// }

// let sum = 0;
// let studentCount = 0;

// for(const i in exam) {
//   sum += exam[i][2];
//   studentCount++;
// }

// let avg = sum / studentCount
// console.log(`모든 학생의 수학 총점은 ${sum}이고, 평균은 ${avg}입니다.`);


// FIXME: 4

// covid19 = [
//   {date: '0125', active: 426}, 
//   {date: '0126', active: 343}, 
//   {date: '0127', active: 547}, 
//   {date: '0128', active: 490}, 
//   {date: '0129', active: 460}, 
//   {date: '0130', active: 443}, 
//   {date: '0131', active: 338}, 
//   {date: '0201', active: 299}
// ]

// let sum = 0

// for(const i of covid19) {
//   sum += i.active;
// }
// let avg = sum / covid19.length;
// console.log(`누적 확진자 수 ${sum}\n평균 확진자 수 ${avg}`);


// FIXME: 5

covid19 = [
  {date: '0125', active: 426}, 
  {date: '0126', active: 343}, 
  {date: '0127', active: 547}, 
  {date: '0128', active: 490}, 
  {date: '0129', active: 460}, 
  {date: '0130', active: 443}, 
  {date: '0131', active: 338}, 
  {date: '0201', active: 299}
];

let maxDate = covid19[0].date;
let maxActive = covid19[0].active;

for(const i of covid19) {
  if(maxActive < i.active) {
    maxDate = i.date;
    maxActive = i.active;
  }
}
console.log(`확진자가 가장 많이 나타난 날: ${maxDate}`);





