# 🖥 responsive-web-project📱
<p align="center">
  <img src="https://github.com/user-attachments/assets/df75a3e3-3fdc-4d7d-a177-4393f3cc7e91" alt="Project Image">
</p>

### 목차
1. [프로젝트 개요 📖](#-프로젝트-개요)
2. [개발환경 🚀 ](#-기술스택)
3. [요구사항 명세서 📄](#-요구사항-명세서)
4. [기능 정의 🔎](#-기능-정의)
5. [폴더구조 🗂](#-폴더구조)
6. [성능 테스트 🔨](#-성능-테스트)
7. [배포 ⚙️](#%EF%B8%8F-배포)


# 📖 프로젝트 개요
HTML, CSS, JavaScript로 구현한 PC/Mobile 반응형 페이지
- 프로젝트 개요 : HTML, CSS, JavaScript를 사용하여 PC와 모바일 환경에 적합한 반응형 웹 페이지를 구현
- 프로젝트 목표 : 사용자 경험을 극대화하기 위해 데스크탑과 모바일 디바이스에서 모두 적절한 레이아웃을 제공   
     (화면 크기에 따라 레이아웃과 스타일이 동적으로 변화하도록 설계)
- 개발기간 : 2024.08.22 - 2024.08.27

# 🚀 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 


- `HTML5`: 시멘틱 태그를 사용하여 웹 페이지의 구조 정의
- `CSS3`: Flexbox 및 Grid 레이아웃을 사용하여 반응형 디자인 구현, BEM(Block Element Modifier) 표기법 도입
- `JavaScript`: DOM 조작, 이벤트 핸들링 및 API 연동(카카오 지도 API 포함)

# 📄 요구사항 명세서
1. [피그마](https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-오르미(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=DkHqKMa1PBxYw4n3-0)를 참고하여 페이지 구현을 합니다.
2. 모바일 화면도 고려하여 페이지 구현을 합니다.
3. 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
4. 스크롤 탑 버튼을 구현합니다. 
    1. 스크롤 탑 버튼은 스크롤시 나타납니다.
    2. 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
    3. 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
5. 구독하기 모달창
    1. 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
    2. 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
    3. 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.

# 🔎 기능 정의
| **섹션** | **설명** | **주요 기능** |
|----------|----------|---------------|
| **헤더 및 내비게이션** | 페이지 상단 고정 메뉴 | 로고 이미지, 메뉴 아이콘, 내비게이션 링크 |
| **사이드바** | 모바일 메뉴 | 메뉴 리스트, 다운로드 버튼, 사이드바 토글 |
| **소개 섹션** | 고양이 '호두'에 대한 간략한 소개 제공 | 소개 텍스트, 다운로드 버튼, 대표 이미지 |
| **프로필 섹션** | 고양이 '호두' 프로필 | 텍스트와 이미지로 서비스 설명 |
| **포토 갤러리 섹션** | 이미지 그리드로 구성된 갤러리 | 이미지 그리드 |
| **위치 섹션** | 카카오 지도 API를 사용한 위치 표시 | 지도 컨트롤(확대/축소, 새로고침, 전체화면) |
| **구독 섹션** | 사용자가 이메일을 입력하여 블로그 구독을 신청 가능 | 이메일 입력 필드, 이메일 유효성 검중, 구독 버튼 |
| **모달** | 사용자가 구독을 완료한 후 나타나는 확인 메시지 | 모달 내용 표시, 열림/닫힘 제어, 모달 배경 어둡게 처리 |
| **스크롤 탑 버튼** | 페이지 하단에 위치한 버튼으로, 클릭 시 페이지 상단으로 부드럽게 스크롤 가능 | 부드러운 스크롤 동작, 스크롤 위치에 따른 이벤트 처리 |
| **푸터** | 페이지 하단 정보 영역 | 로고 이미지, SNS 아이콘, 네비게이션 링크 |

# 🗂 폴더구조
```
.
├── README.md
├── index.html
└── src
    ├── css
    │   ├── main
    │   │   ├── intro_section.css
    │   │   ├── location_section.css
    │   │   ├── photo-gallery_section.css
    │   │   ├── profile_section.css
    │   │   └── subscribe_section.css
    │   ├── mobile_style.css
    │   └── style.css
    ├── images
    │   ├── etc
    │   │   ├── scroll_arrow_up_click.png
    │   │   ├── scroll_arrow_up_not_click.png
    │   │   └── sidebar_arrow_right.png
    │   ├── footer
    │   │   ├── footer_cat.png
    │   │   ├── footer_icon_blog.png
    │   │   ├── footer_icon_facebook.png
    │   │   ├── footer_icon_instagram.png
    │   │   ├── footer_icon_youtube.png
    │   │   └── footer_logo.png
    │   ├── header
    │   │   ├── favicon.png
    │   │   ├── header_logo.png
    │   │   └── header_menu_icon.png
    │   ├── main
    │   │   ├── main_intro.png
    │   │   ├── main_location_map_expand_icon.png
    │   │   ├── main_location_map_refresh_icon.png
    │   │   ├── main_profile.png
    │   │   ├── main_subscribe_email_icon.png
    │   │   └── photo-gallery_section
    │   │       ├── gallery_item_01.png
    │   │       ├── gallery_item_02.png
    │   │       ├── gallery_item_03.png
    │   │       ├── gallery_item_04.png
    │   │       ├── gallery_item_05.png
    │   │       └── gallery_item_06.png
    │   └── modal
    │       ├── modal_background.png
    │       └── modal_cat.png
    └── js
        ├── map.js
        ├── scroll_top.js
        ├── sidebar.js
        └── subscribe_modal.js
```
# 🔨 성능 테스트
[Google PageSpeed Insights](https://pagespeed.web.dev/)를 사용하여 웹 페이지 성능을 평가하고 최적화 과정을 진행하였습니다.

[2024.08.30 테스트 기준]

| 지표                         | 데스크톱 | 모바일 |
|----------------------------|-------|-------|
| **First Contentful Paint**  | 0.4s | 1.5s |
| **Largest Contentful Paint** | 1.5s | 5.5s |
| **Total Blocking Time**      | 0ms | 0ms |
| **Cumulative Layout Shift**  | 0.442s | 0.312s |
| **Speed Index**              | 0.7s | 2.8s |

# ⚙️ 배포
`Github Page` 기능을 사용하여 배포  
https://tndls2.github.io/responsive-web-project/
