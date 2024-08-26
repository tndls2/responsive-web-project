document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerOffset = header.offsetTop; // 헤더가 원래 위치한 지점의 y 좌표

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > headerOffset) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    });
});
