// json 안에 배열이 들어갈 수 있고, 배열 안에 json이 들어갈 수 있다

// 오타 나도 에러가 안난다 ..  없는걸 만들어 버린다.

// 자바스크립트는 없는 것에(빈 배열, 빈 객체) 넣으면 만들어준다.

// 목록형태는 표시하는 항목이 동일하다는 특징 ?

// 어떤 주제 데이터를 설명하기 위한 보조 데이터 -> 메타데이터


// 목록의 아이템으로 사용될 JSON 객체 정의하기
const student1 = {
  studno: 10101,
  grade: 1,
  name: '학생',
};

const student2 = {
  studno: 20202,
  grade: 2,
  name: '학생2',
};

// 목록 구조를 갖는 JSON 객체
const classRoom = {
  student: [student1, student2],
};
console.log(classRoom);

// 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다.
for (let i = 0; i < classRoom.student.length; i++) {
  console.log(i + '번째 학생 :::');
  console.log('>> 학번 : ' + classRoom.student[i].studno);
  console.log('>> 학년 : ' + classRoom.student[i].grade);
  console.log('>> 이름 : ' + classRoom.student[i].name);
}

// for-of 문을 사용할 경우 몇 번째 항목인지를 알기 위해서는 반복문 시작전에 별도의 초기식과 반복문 안에 별도의 초기식과 반복문 안에 별도의 증감식을 추가해야 한다.
let i = 0; // 초기식
for(const s of classRoom.student) {
  console.log(i + "번째 학생 :::");
  console.log(">> 학번 : " + s.studno);
  console.log(">> 학년 : " + s.grade);
  console.log(">> 이름 : " + s.name);
  i++;
}




// // JSON 객체 정의
// const example1 = {
// 	key1: 1,
//     key2: 2,
//     key3: '3'
// };

// const example2 = {
// 	key1: 4,
//     key2: 5,
//     key3: '6'
// };

// // 목록 구조를 갖는 JSON 객체
// const example3 = {
// 	sample: [example1, example2]	
// };
// console.log(example3);
// // sample: [ { key1: 1, key2: 2, key3: '3' }, { key1: 4, key2: 5, key3: '6' } ]


