// 배열의 원소로서 JSON 구조를 직접 명시하기
const classRoom = {
  student: [{
    studno: 10101,
    grade: 1,
    name: "학생1"
  }, {
    studno: 20202,
    grade: 2,
    name: "학생2"
  }]
};

for(let i = 0; i < classRoom.student.length; i++) {
  console.log(i + "번째 학생");
  console.log(">> 학번: " + classRoom.student[i].studno);
  console.log(">> 학번: " + classRoom.student[i].grade);
  console.log(">> 학번: " + classRoom.student[i].name);
}

const example = {
	key: [{
    	key1: 1,
        key2: 2,
        key3: '3'
	}, {
    	key1: 4,
        key2: 5,
        key3: '6'
    }]
};
console.log(example);