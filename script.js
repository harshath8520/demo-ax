// ===================================
// AURAX CREATIVE MARKETING AGENCY
// Interactive JavaScript
// ===================================

// YouTube Reels Data
const reelsData = [
    { id: 'VH3vPv7sZKs', title: "Premium Brand Story", category: "Social Media" },
    { id: 'qP-B9Imqz9o', title: "Visual Excellence", category: "Commercial" },
    { id: '0Mf7PQC9ScI', title: "Creative Motion", category: "Short Film" },
    { id: 'FXtGuFEvHVI', title: "Urban Content", category: "Brand Growth" },
    { id: '8Pt6eNb2i80', title: "Cinematic Showcase", category: "Ads & Promos" },
    { id: 'FtGy0NEdJcY', title: "Modern Strategy", category: "Consulting" },
    { id: 'Ez9o_F5Re4Y', title: "Strategic Visuals", category: "Engagement" }
];

let activePlayers = []; // Track YouTube players to control playback

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// ===================================
// HEADER SCROLL EFFECT
// ===================================

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// ===================================
// GENERATE REEL CARDS
// ===================================

const reelsGrid = document.getElementById('reelsGrid');

function generateReelCards() {
    reelsGrid.innerHTML = '';

    reelsData.forEach((reel, index) => {
        const card = document.createElement('div');
        card.className = 'reel-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 3) * 100);

        // Use YouTube thumbnail
        const thumbUrl = `https://img.youtube.com/vi/${reel.id}/maxresdefault.jpg`;

        card.innerHTML = `
            <img src="${thumbUrl}" alt="${reel.title}" class="reel-thumbnail">
            <div class="reel-play-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
            </div>
            <div class="reel-info">
                <h3 class="reel-title">${reel.title}</h3>
                <span class="reel-category">${reel.category}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            openReelModal(reel.id);
        });

        reelsGrid.appendChild(card);
    });
}

// ===================================
// REEL MODAL & YOUTUBE API
// ===================================

const reelModal = document.getElementById('reelModal');
const modalClose = document.getElementById('modalClose');
let player;

function onYouTubeIframeAPIReady() {
    // API is ready
}

function openReelModal(videoId) {
    reelModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const origin = window.location.origin === 'null' ? '*' : window.location.origin;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=${videoId}&enablejsapi=1&origin=${encodeURIComponent(origin)}`;

    // Using a direct iframe replacement for better reliability on local files
    const container = document.getElementById('player-container');
    container.innerHTML = `<iframe 
        width="100%" 
        height="100%" 
        src="${embedUrl}" 
        frameborder="0" 
        allow="autoplay; encrypted-media; picture-in-picture" 
        allowfullscreen></iframe>`;
}

function closeReelModal() {
    reelModal.classList.remove('active');
    const container = document.getElementById('player-container');
    container.innerHTML = ''; // Completely remove iframe to stop playback
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeReelModal);
reelModal.addEventListener('click', (e) => {
    if (e.target === reelModal) closeReelModal();
});

modalClose.addEventListener('click', closeReelModal);

reelModal.addEventListener('click', (e) => {
    if (e.target === reelModal) {
        closeReelModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reelModal.classList.contains('active')) {
        closeReelModal();
    }
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
});

// ===================================
// SCROLL ANIMATIONS (AOS Alternative)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.5;
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
    }
});

// ===================================
// CURSOR GLOW EFFECT (Desktop Only)
// ===================================

if (window.innerWidth > 768) {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

// ===================================
// PERFORMANCE: LAZY LOAD IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    generateReelCards();
    initScrollAnimations();
    updateActiveNav();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// PERFORMANCE: REQUEST ANIMATION FRAME
// ===================================

let ticking = false;
let lastKnownScrollPosition = 0;

function updateOnScroll(scrollPos) {
    // Batch scroll-based updates here
    updateActiveNav();
}

window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateOnScroll(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatStatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatStatNumber(Math.floor(current));
        }
    }, 16);
}

function formatStatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num + '+';
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(statNumber.textContent.replace(/\D/g, ''));

            if (statNumber.textContent.includes('M')) {
                animateCounter(statNumber, targetValue * 1000000);
            } else if (statNumber.textContent.includes('K')) {
                animateCounter(statNumber, targetValue * 1000);
            } else {
                animateCounter(statNumber, targetValue);
            }

            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

const stats = document.querySelectorAll('.stat');
stats.forEach(stat => statsObserver.observe(stat));

// ===================================
// FLOATING CARDS ANIMATION
// ===================================

const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 6 + Math.random() * 4;

    card.style.animationDelay = `${randomDelay}s`;
    card.style.animationDuration = `${randomDuration}s`;
});

// ===================================
// GRADIENT ORBS MOUSE INTERACTION
// ===================================

const orbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===================================
// PRELOAD CRITICAL RESOURCES
// ===================================

function preloadImages() {
    const images = [
        'images/mountain-landscape.jpg',
        'images/forest-path.jpg',
        'images/serene-water-mirroring.jpg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// ===================================
// SERVICE WORKER (Optional - for PWA)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ===================================
// CONSOLE BRANDING
// ===================================

console.log(
    '%c🚀 AURAX Creative Marketing Agency',
    'font-size: 20px; font-weight: bold; color: #4F46E5;'
);
console.log(
    '%cWebsite designed and developed with ❤️',
    'font-size: 12px; color: #06B6D4;'
);
console.log(
    '%cKakkanad, Kochi, Kerala',
    'font-size: 12px; color: #7C3AED;'
);
