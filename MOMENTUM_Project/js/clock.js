const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
    clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}

// 접속하자마자 현재 시간을 보기 위해 우선 호출
getClock();

// setInterval: 입력한 ms마다 함수 실행 (반복)
setInterval(getClock, 1000);

// setTimeout: 입력한 ms 기다렸다가 한번만 함수 실행
// setTimeout(getClock, 5000);

