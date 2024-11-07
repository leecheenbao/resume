document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const backToTopButton = document.getElementById('backToTop');
    
    // 初始化顯示所有專案
    projectCards.forEach(card => {
        card.classList.add('show');
    });

    // 過濾功能
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按鈕狀態
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            // 過濾卡片
            projectCards.forEach(card => {
                // 重置動畫
                card.style.animation = 'none';
                card.offsetHeight; // 強制重繪
                card.style.animation = null;

                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 50);
                } else {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }
            });
        });
    });

    // 置頂按鈕功能
    // 監聽滾動事件
    window.addEventListener('scroll', function() {
        // 當頁面滾動超過 300px 時顯示按鈕
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // 點擊按鈕時滾動到頂部
    backToTopButton.addEventListener('click', function() {
        // 使用平滑滾動效果
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 