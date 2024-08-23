// 스크립트가 로드된 후 실행되도록 설정
window.onload = () => {
    var container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    var options = {
        center: new kakao.maps.LatLng(33.442350330462986, 126.57150355336688), // 지도의 중심좌표(제주특별자치도 제주시 첨단로 330)
        level: 3 // 확대, 축소 정도
    };

    var map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치 (제주특별자치도 제주시 첨단로 330)
    var markerPosition = new kakao.maps.LatLng(33.442350330462986, 126.57150355336688);

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커 표시
    marker.setMap(map);
};
