// 콜백함수를 통해 비동기처리를 실행할 수 있다
// 콜백함수가 여러개가 되면 콜백 지옥에 빠지게 되고 에러처리에 어려움이 생기게 된다
// 이를 개선하기 위해 나온것인 promise이다
function fetchMenu(callbackFunction) {
    setTimeout(() => {
        // #2.
        let data = {firstMenu: "구독", secondMenu: "기록"};
        callbackFunction(error, data);
        return data;
    },5000)
}

let menu;
fetchMenu(function(error, result) {
    if (error) {
        console.log("에러 처리");
        return;
    }

    // 호출되면 실행될 콬드
    console.log("5초뒤 실행", result);
    menu = result;
    // #1.
    console.log("출력 결과: ", menu);

    renderPageUi(function(response) {
        response;
        menu;
    })


});
