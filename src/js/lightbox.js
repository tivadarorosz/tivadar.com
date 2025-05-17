document.addEventListener('DOMContentLoaded', function() {
    // Only activate on desktop (viewport > 992px)
    if (window.innerWidth <= 992) return;
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <button class="lightbox-prev">‹</button>
            <button class="lightbox-next">›</button>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Get all story page images
    const storyContent = document.querySelector('.story-content');
    if (!storyContent) return;
    
    // Collect all images: cover image + story content images
    const allImages = [];
    const coverImg = document.querySelector('.story-feature-img');
    if (coverImg) {
        allImages.push({
            src: coverImg.src,
            alt: coverImg.alt || 'Cover image',
            element: coverImg
        });
    }
    
    // Get all story content images
    storyContent.querySelectorAll('.story-feature-img').forEach(img => {
        allImages.push({
            src: img.src,
            alt: img.alt || '',
            element: img
        });
    });
    
    if (allImages.length === 0) return;
    
    let currentIndex = 0;
    const lightboxEl = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    function showImage(index) {
        if (index < 0) index = allImages.length - 1;
        if (index >= allImages.length) index = 0;
        currentIndex = index;
        
        lightboxImg.src = allImages[index].src;
        lightboxImg.alt = allImages[index].alt;
        lightboxCaption.textContent = allImages[index].alt;
        
        // Update navigation button visibility
        prevBtn.style.display = allImages.length > 1 ? 'block' : 'none';
        nextBtn.style.display = allImages.length > 1 ? 'block' : 'none';
    }
    
    function openLightbox(index) {
        lightboxEl.classList.add('active');
        document.body.classList.add('lightbox-open');
        showImage(index);
    }
    
    function closeLightbox() {
        lightboxEl.classList.remove('active');
        document.body.classList.remove('lightbox-open');
    }
    
    // Add click handlers to all images
    allImages.forEach((img, index) => {
        img.element.style.cursor = 'pointer';
        img.element.addEventListener('click', () => openLightbox(index));
    });
    
    // Navigation handlers
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxEl.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showImage(currentIndex - 1);
                break;
            case 'ArrowRight':
                showImage(currentIndex + 1);
                break;
        }
    });
    
    // Disable on mobile resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992 && lightboxEl.classList.contains('active')) {
            closeLightbox();
        }
    });
});