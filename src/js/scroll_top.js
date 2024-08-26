// 버튼 요소 가져오기
const scrollTopBtn = document.getElementById('scrollTopBtn');

// 버튼 클릭 시 페이지 상단으로 부드럽게 스크롤
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
});
