function fetchMenu(callbackFunction) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // #2
            let data = {firstName: "구독", secondName: "인기"};
            resolve(data);
        }, 5000);
    })
}

async function init() {
    try {
        let menu;
        menu = await fetchMenu();
        await renderPageUi();
        console.log("5초뒤 실행", menu);
    } catch (error) {
        console.log("에러처리");
    }
}