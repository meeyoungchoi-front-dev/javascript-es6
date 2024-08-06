function fetchMenu(callbackFunction) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // #2
            let data = {firstName: "구독", secondName: "인기"};
            
            if (error) {
                reject(error);
            }
            resolve(data);
        }, 5000);
    })
}

let menu;
fetchMenu() // Promise 객체여야만 then, catch가 유효하게 동작한다
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