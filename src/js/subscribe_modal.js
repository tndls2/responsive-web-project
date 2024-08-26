// 모달 열기 함수
function openModal() {
    document.getElementById('subscribeModal').style.display = 'block';
}

// 모달 닫기 함수
function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
}

// DOMContentLoaded 이벤트를 통해 DOM이 완전히 로드된 후에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // 모달을 여는 버튼을 클릭했을 때
    document.querySelector('.btn--orange').addEventListener('click', openModal);
    // 모달 닫기 버튼을 클릭했을 때
    document.querySelector('.modal__close-btn').addEventListener('click', closeModal);

    // 모달 외부를 클릭했을 때
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('subscribeModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});
