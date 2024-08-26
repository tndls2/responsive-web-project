// 스크립트가 로드된 후 실행되도록 설정
window.onload = () => {
    var container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    var options = {
        center: new kakao.maps.LatLng(33.442350330462986, 126.57150355336688), // 지도의 중심좌표(제주특별자치도 제주시 첨단로 330)
        level: 3 // 확대, 축소 정도
    };

    var map = new kakao.maps.Map(container, options);  // 지도 생성

    // 마커가 표시될 위치 (제주특별자치도 제주시 첨단로 330)
    var markerPosition = new kakao.maps.LatLng(33.442350330462986, 126.57150355336688);

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map); // 마커 표시

    // 일반 지도-스카이뷰로 지도 타입 전환
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤 추가 (TOPRIGHT = 오른쪽 위)
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대
    function zoomIn() {
        map.setLevel(map.getLevel() - 1);
    }

    // 지도 축소
    function zoomOut() {
        map.setLevel(map.getLevel() + 1);
    }

    // 확대/축소 초기화
    function resetMap() {
        map.setCenter(new kakao.maps.LatLng(33.442350330462986, 126.5715035533668));
        map.setLevel(3);
    }

    // 지도 전체화면
    // 참고: https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
    function expandScreen(element) {
        if (!document.fullscreenElement) {
            element.requestFullscreen().catch((err) => {
                alert(
                    `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
                );
            });
        } else {
            document.exitFullscreen();
        }
    }

    // 버튼 클릭 이벤트 리스너 추가
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
    document.getElementById('resetBtn').addEventListener('click', resetMap);
    document.getElementById("expandBtn").onclick = function () {
        expandScreen(container)
    };
};
