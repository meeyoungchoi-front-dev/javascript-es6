async function init() {
    // 1. 메뉴 선언
    let menu;
    // 2. 메뉴 데이터 호출해서 할당
    // promise를 반환하는 함수 앞에다 await를 붙여주면 된다
    menu = await fetchMenu();
    // 3. 메뉴 데이터 콘솔에 출력
    console.log(menu);
}

init();
