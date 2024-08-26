// 모달 열기 함수
function openModal() {
    document.getElementById('subscribeModal').style.display = 'block';
}

// 모달 닫기 함수
function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
}

// 이메일 유효성 검사 함수
function validateEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput === '') {
        alert('Please enter your email address.');
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
    } else {
        openModal();
    }
}

// DOMContentLoaded 이벤트를 통해 DOM이 완전히 로드된 후에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // OK 버튼을 클릭했을 때 폼 제출 및 모달 닫기
    document.getElementById('modalSubmitBtn').addEventListener('click', function() {
        alert('Form has been submitted!');
        closeModal();
    });

    // 모달 외부를 클릭했을 때 모달 닫기
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('subscribeModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});
