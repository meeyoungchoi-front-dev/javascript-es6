// 비동기 처리란 무엇인가 
// 한시간 걸리는 동안 다른거 먼저 처리해줘: 비동기처리
// 특정 코드의 실행을 기다리지 않고 다른 코드를 실행한다
// 왜 콜백 함수로 비동기 처리를 해야 하는가
function fetchMenuInfo() {
    let menu
    return axios.get("https://domain.com/api/menu", function (response) {
        menu = response;
    });
}

// 1. 사용자 정보 요청
fetchuser(); // 0.1s
// 2. 좌측 메뉴 정보 요청
// let menu = fetchMenuInfo(); // 1시간 => 밑에 있는 3, 4번 코드는 실행이 되지 않는단
// 3, 영상 본문 요청
fetchContents(); // 1초
// 4. 페이지 UI 표시
renderPageUi(menu); // 2초

// 총합 : 최소 1시간
