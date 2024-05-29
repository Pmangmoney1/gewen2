document.querySelectorAll('header nav ul li a, footer nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,  // 헤더 높이를 고려하여 약간 위로 조정
            behavior: 'smooth'
        });
    });
});

// 메뉴 토글 버튼 클릭 이벤트 추가
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header nav ul').classList.toggle('show');
});
