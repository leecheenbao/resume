document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的 active 類
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加當前按鈕的 active 類
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 當元素進入視窗時觸發動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    // 觀察所有進度條
    document.querySelectorAll('.progress-bar').forEach((bar) => {
        observer.observe(bar);
    });

    // 添加到現有的 main.js 中
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 獲取表單數據
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // 這裡可以添加表單提交邏輯
        console.log('Form submitted:', data);
        
        // 顯示提交成功訊息
        alert('訊息已發送！我們會盡快回覆您。');
        
        // 重置表單
        this.reset();
    });
}); 