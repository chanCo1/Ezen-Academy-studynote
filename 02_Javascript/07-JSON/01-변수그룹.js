// 변수들의 그룹으로서의 JSON 정의
const student = {
  // key: value, key: value ... 의 형식으로 나열
  // 숫자, boolean, null, undefined는 따옴포 적용 안함

  studno: 10101,
  grade: 1,
  name: "학생",
  phoneno: "010-1234-2345"
};

// 각 데이터 출력하기
// 데이터에 접근하는 기본적인 방법은 객체이름.하위정보이름 -> 90% 이상의 경우에서 이 방식 사용됨

console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);

// 접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 type2가 활용된다
const keyName = "phoneno";
console.log(student[keyName]);

// JSON의 key를 배열로 변환하는 명령
const keys = Object.getOwnPropertyNames(student);
console.log(keys);

// 추출한 key 이름은 배열이므로 반복문 처리가 가능하다.
for(const k of keys) {
  console.log(student[k]);
}

// 통신 프로토콜 = 규격