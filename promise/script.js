// 콜백함수를 통해 비동기처리를 실행할 수 있다
// 콜백함수가 여러개가 되면 콜백 지옥에 빠지게 되고 에러처리에 어려움이 생기게 된다
// 이를 개선하기 위해 나온것인 promise이다
// then과 catch를 통해 콜백함수 콜백지옥 에러처리 문제를 해결해준다
let menu;
fetchMenu()
    // 체이닝을 통해 훨씬더 코드가 간결해진다
    .then(renderPageUi(response))
    .then(function(result) {
    // 호출되면 실행될 콬드
    console.log("5초뒤 실행", result);
    menu = result;
   
}).catch(function(error) {
    console.log("에러 처리");
    return;
});

renderPageUi(function(response) {
    response;
    menu;
})