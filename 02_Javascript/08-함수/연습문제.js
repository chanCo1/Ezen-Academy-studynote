// FIXME: 문제 1.

// function printStar(max) {
//   for(let i = 0; i < max; i++) {
//     let star = "";
//     for(let j = 0; j < i + 1; j++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }
// printStar(5);


// FIXME: 문제 2.

// function printRevStar(max) {
//   for(let i = 0; i < max; i++) {
//     let star = "";
//     for(let j = 0; j < max - i; j++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// }
// printRevStar(5);


// FIXME: 문제 3.

// function myGame(n) {
//   for(let i = 1; i <= n; i++) {
//     if(i < 10) {
//       if(i % 3 === 0) {
//         console.log("짝");
//       } else {
//         console.log(i);
//       }
//     } else if(i > 10) {
//       console.log(i);
//     }
//   }
// }
// myGame(35);

// TODO: 문제 3.
function myGame(n) {
  // 박수를 총 몇번 쳣는지에 대한 합계 값
  let count = 0;

  // 현재 숫자(i)를 문자열로 변환함. 33 -> "33"
  // 문자열은 그 자체가 배열이므로 각 자리의 숫자를 의미하는 글자를 원소로 갖는 배열이 된다고 볼 수 있다.
  for(let i = 1; i <= n; i++) {
    const str = i + ""; // 숫자열을 문자열로 바꿀 떄 쓰는 꼼수

    // 출력할 문자열(숫자 or 박수)
    let say = "";
    // 박수를 몇번 치는지 카운트하눈 변수
    let clap = 0;

    for(let j of str) {

      // 각 글자가 3,6,9 중의 하나라면?
      if(j == "3" || j == "6" | j == "9") {
        say += "짝";
        clap++;
      }
    }
    if(clap == 0) {
      console.log(i);
    } else {
      console.log("%s (%d) --> %d번", say, i , clap);
      count += clap;
    }
  }
  console.log("박수를 총 %d번 쳤습니다.", count);
}
myGame(35);


// FIXME: 문제 4
// 문제1번을 화살표 함수가 적용된 재귀함수 기법으로 다시 구현해 보세요.

// const printStar = (max, current=1) => {
//   if(max < current) {
//     return;
//   } else {
//     for(let i = 0; i < max; i++){
//       let star = "";
//       for(let j = 0; j < current; j++) {
//         star += "*";
//       }
//       console.log(star);
//     }
//     printStar(max, current+1);
//   }
// }
// printStar(5);

// TODO: 4
// 재귀함수는 반복문을 대체한다

function printStar(max, current=1) {
  if(current > max) {
    return;
  } else {
    // 한 줄을 출력하기 위한 코드 구성
    let star = "";
  
    for(let j = 0; j < current; j++) {
      star += "*";
    }
    console.log(star);
    printStar(max, current+1);
  }
}

printStar(5);



// FIXME: 문제 5
// 문제2번을 화살표 함수가 적용된 재귀함수 기법으로 다시 구현해 보세요.

function printRevStar(max, current=1) {
  if(current > max) {
    return;
  } else {
    // 한 줄을 출력하기 위한 코드 구성
    let star = "";
  
    for(let j = 0; j < max-current+1; j++) {
      star += "*";
    }
    console.log(star);
    printRevStar(max, current+1);
  }
}
printRevStar(5);


// FIXME: 문제 6
// 재귀함수로 구구단 중 5단 출력

function gugu(level, depth=1) {
  if(depth > 9) {
    return;
  } else {
    console.log(`${level} X ${depth} = ${(level*depth)}`);
    gugu(level, depth+1);
  }
}
gugu(5);
