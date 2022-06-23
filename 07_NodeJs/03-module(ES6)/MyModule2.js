
const name = "node";
const property = {
  id: "node.js",
  type: "javascrpit"
};

const say = function() {
  console.log("Hello World");
};

const home = {
  postcode: "12345",
  adress: "서울시 강남구 역삼동",
  agetAddress: function() {
    console.log(this.postcode + ' ' + this.adress);
  }
};

// 여러개의 기능을 내보낼 경우 default를 적용하지 않는다.
// -> 내보내고자 하는 기능을 { }로 묶는다.
export { name, property, say, home };