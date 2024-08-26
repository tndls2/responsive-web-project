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

    // 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
    function setMapType(maptype) {
        var roadmapControl = document.getElementById('btnRoadmap');
        var skyviewControl = document.getElementById('btnSkyview');
        if (maptype === 'roadmap') {
            map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            roadmapControl.className = 'selected_btn';
            skyviewControl.className = 'unselected_btn';
        } else {
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            skyviewControl.className = 'selected_btn';
            roadmapControl.className = 'unselected_btn';
        }
    }

    // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomIn() {
        map.setLevel(map.getLevel() - 1);
    }

    // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomOut() {
        map.setLevel(map.getLevel() + 1);
    }

    // 버튼 클릭 이벤트 리스너 추가
    document.getElementById('btnRoadmap').addEventListener('click', () => setMapType('roadmap'));
    document.getElementById('btnSkyview').addEventListener('click', () => setMapType('skyview'));
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
};
