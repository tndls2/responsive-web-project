// 버튼 요소 가져오기
const scrollTopBtn = document.getElementById('scrollTopBtn');

// 버튼 클릭 시 페이지 상단으로 부드럽게 스크롤
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
});

// 스크롤 위치 구하기
// 참고: https://velog.io/@ksh4820/JS-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9C%84%EC%B9%98-%EA%B5%AC%ED%95%98%EA%B8%B0
window.addEventListener('scroll', () => {
    let scrollTopBtn = document.querySelector(".scroll-top-btn")
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight;

    if (scrollLocation === 0) {
        scrollTopBtn.style.display = "none";
    } else {
        scrollTopBtn.style.display = "flex";
    }

    if (fullHeight - windowHeight - scrollLocation >= 19) {
        scrollTopBtn.style.position = "fixed";
        scrollTopBtn.style.bottom = "19px";  // bottom에서 19px 떨어져있어야 함
    } else {
        scrollTopBtn.style.position = "fixed";
        scrollTopBtn.style.bottom = `${
            Math.abs(fullHeight - windowHeight - scrollLocation) + 50 + 19 // scroll-top-btn 크기 50px
        }px`;
    }

})