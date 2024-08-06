// 비동기 처리란 무엇인가 
// 한시간 걸리는 동안 다른거 먼저 처리해줘: 비동기처리
// 특정 코드의 실행을 기다리지 않고 다른 코드를 실행한다
// 왜 콜백 함수로 비동기 처리를 해야 하는가
// 데이터를 받아왔을때 특정 로직을 실행되게 하고 싶다면 콜백함수를 사용하면 된다
function fetchMenuInfo() {
    let menu
    return axios.get("https://domain.com/api/menu", function (response) {
        menu = response;
    });
}

// 1. 사용자 정보 요청
fetchuser(); // 0.1s
// 2. 좌측 메뉴 정보 요청
let menu; // 변수 초기값을 할당하지 않으면 undefined
fetchMenuInfo(function (response) {
    menu = response;
    // 4. 페이지 UI 표시
    renderPageUi(menu); // 2초
}); // 1시간 => 실행하는동안 3번과 4번은 실행된다
// 3, 영상 본문 요청
fetchContents(); // 1초


// 총합 : 최소 1시간
