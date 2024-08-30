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
    const emailInputElement = document.getElementById('emailInput');
    const emailInput = emailInputElement.value; // 입력된 이메일 값을 가져옴
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput === '') {
        alert('Please enter your email address.');
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
    } else {
        openModal();
    }
    emailInputElement.value = ''; // 이메일 입력 필드를 비움

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

    document.getElementById('emailInput').addEventListener('keypress', function(event) {
        const emailInputElement = document.getElementById('emailInput');
        if (event.key === 'Enter') {
            event.preventDefault();
            emailInputElement.value = ''; // 이메일 입력 필드를 비움
        }
    });
});
