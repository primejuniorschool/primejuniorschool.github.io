// 1. MOBILE MENU LOGIC
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// 2. ACTIVE PAGE NAVIGATION HIGHLIGHT (Updated Logic)
const currentHref = window.location.href;
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    // Remove any existing active class first to prevent duplicates
    link.classList.remove('active-page');

    // Highlight if the link URL is part of the current browser URL
    if (linkHref && currentHref.includes(linkHref) && linkHref !== "index.html") {
        link.classList.add('active-page');
    }
    
    // Special Rule for Home: If at the root (/) or index.html, highlight index link
    if ((currentPath === "/" || currentPath.endsWith("index.html")) && linkHref === "index.html") {
        link.classList.add('active-page');
    }
});

// 3. GALLERY FILTERING
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 4. LIGHTBOX LOGIC
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

galleryCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (img && lightbox) {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        }
    });
});

closeBtn?.addEventListener('click', () => {
    if (lightbox) lightbox.style.display = 'none';
});

lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});