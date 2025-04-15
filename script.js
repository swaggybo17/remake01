document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const closeButton = document.querySelector('.close-button');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const addToCartButton = document.querySelector('.add-to-cart');
    const sizeButtons = document.querySelectorAll('.size-selector button');

    // 为所有图片添加点击事件
    gallery.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('.gallery-item');
        if (clickedItem) {
            const img = clickedItem.querySelector('img');
            const title = clickedItem.querySelector('h3').textContent;
            const price = clickedItem.querySelector('p').textContent;

            modal.style.display = 'block';
            modalImg.src = img.src;
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
    });

    // 关闭模态框
    closeButton.addEventListener('click', () => {
        closeModal();
    });

    // 点击模态框背景也可以关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    }

    // 分类按钮点击事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');
            
            // 这里可以添加实际的筛选逻辑
            const category = button.textContent.toLowerCase();
            // 示例：console.log('Selected category:', category);
        });
    });

    // 尺码选择
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有尺码按钮的选中状态
            sizeButtons.forEach(btn => btn.style.borderColor = '#ddd');
            // 设置当前按钮的选中状态
            button.style.borderColor = '#1a1a1a';
        });
    });

    // 添加到购物车按钮点击事件
    addToCartButton.addEventListener('click', () => {
        const selectedSize = Array.from(sizeButtons).find(btn => 
            btn.style.borderColor === 'rgb(26, 26, 26)'
        );

        if (!selectedSize) {
            alert('请选择尺码');
            return;
        }

        // 这里可以添加实际的添加到购物车逻辑
        alert('商品已添加到购物袋！');
        closeModal();
    });

    // 添加图片加载动画
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // 导航栏滚动效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // 向下滚动
            nav.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            nav.style.transform = 'translateY(0)';
        }

        lastScrollTop = currentScrollTop;
    });
}); 