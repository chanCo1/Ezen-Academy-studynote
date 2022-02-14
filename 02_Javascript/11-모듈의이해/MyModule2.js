
// exprots의 하위 속성으로 변수, JSON, 함수 추가하기
module.exports.name = "nord";
module.exports.property = {
  id: "node.js",
  type: "javascrpit"
};

module.exports.say = function() {
  console.log("Hello World");
};

// exprots 속성으로 객체 추가
module.exports.home = {
  postcode: "12345",
  adress: "서울시 강남구 역삼동",
  agetAddress: function() {
    console.log(this.postcode + ' ' + this.adress);
  }
};

/*
{
  name: 'nord',
  property: { id: 'nodejs', type: 'javascrpit' },
  say: [Function (anonymous)],
  home: {
    postcode: '12345',
    adress: '서울시 강남구 역삼동',
    agetAddress: [Function: agetAddress]
  }
}
*/

// // 변수
// module.exports.name = "Hello";

// // JSON
// module.exports.property = {
//   id: "Node.js",
//   type: "Javascript",
//   getDevelop: function() {
//     console.log(`${this.id}와 ${this.type}`);
//   }
// };

// // 함수
// module.exports.func = function() {
//   console.log("나는 함수다");
// }

