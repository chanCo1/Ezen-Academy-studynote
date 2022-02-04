// 가장 일반적인 형태의 목록 구조
// 목록을 구성하는 배열 외에 목록을 설명하기 위한 부가 정보도 함께 포함
const bbs = {
  title: "공지사항",
  count: 4,
  item: [
    {id: 1, subject: "첫 번째 게시물 제목"},
    {id: 2, subject: "두 번째 게시물 제목"},
    {id: 3, subject: "세 번째 게시물 제목"},
    {id: 4, subject: "네 번째 게시물 제목"},
  ]
};

console.log("게시판이름: " + bbs.title);
console.log("전체 게시물 수: " + bbs.count);

// 일반 for문
for(let i = 0; i < bbs.item.length; i++) {
  console.log(bbs.item[i].id + " // " + bbs.item[i].subject);
}
console.log("-----");

// for-of문
for(let k of bbs.item) {
  console.log(k.id + " // " + k.subject);
}


const example = {
	title: "공지사항",
    	count: 4,
    	item: [
    		{id: 1, subject: "첫 번째 게시물 제목"},
            	{id: 2, subject: "두 번째 게시물 제목"},
            	{id: 3, subject: "세 번째 게시물 제목"},
            	{id: 4, subject: "네 번째 게시물 제목"}
        ]
};
console.log("제목: " + example.title); // 제목: 공지사항
console.log("게시물 수: " + example.count); // 게시물 수: 4

for(let i = 0; i < example.item.length; i++) {
  console.log(`${example.item[i].id}번-${example.item[i].subject}`);
}