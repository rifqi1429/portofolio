// ========================================
// PORTFOLIO ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ==================== TEXT ANIMATIONS ====================
    
    // Typing Effect for Description
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        element.style.borderRight = '3px solid #8B5CF6';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                // Remove cursor after typing completes
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        }, 50);
    });

    // Letter Bounce Animation
    const letterBounceElements = document.querySelectorAll('.letter-bounce-text');
    letterBounceElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'letter-bounce';
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });

    // Glitch Effect Trigger on Scroll
    const glitchElements = document.querySelectorAll('.glitch');
    const triggerGlitch = () => {
        glitchElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('glitch-active');
            }
        });
    };
    window.addEventListener('scroll', triggerGlitch);
    triggerGlitch();

    // Text Highlight Animation on Scroll
    const highlightElements = document.querySelectorAll('.text-highlight-animated');
    const triggerHighlight = () => {
        highlightElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('text-highlight-animated');
            }
        });
    };
    window.addEventListener('scroll', triggerHighlight);
    triggerHighlight();

    // Neon Text Pulse
    const neonElements = document.querySelectorAll('.neon-text');
    neonElements.forEach(element => {
        element.style.animation = 'neonPulse 1.5s ease-in-out infinite alternate';
    });

    // Rainbow Text
    const rainbowElements = document.querySelectorAll('.rainbow-text');
    rainbowElements.forEach(element => {
        element.style.animation = 'rainbowMove 3s linear infinite';
    });
    
    // ==================== SCROLL REVEAL ANIMATION ====================
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check


    // ==================== NAVBAR SCROLL EFFECT ====================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.add('bg-transparent');
        }
    });


    // ==================== MOUSE FOLLOWER GLOW ====================
    const mouseGlow = document.getElementById('mouseGlow');
    
    if (mouseGlow) {
        document.addEventListener('mousemove', (e) => {
            mouseGlow.style.left = e.clientX + 'px';
            mouseGlow.style.top = e.clientY + 'px';
        });

        // Hide on mobile
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                mouseGlow.style.display = 'none';
            } else {
                mouseGlow.style.display = 'block';
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
    }


    // ==================== FLOATING PARTICLES ====================
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        const particleCount = 20;

        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            
            // Random size
            const size = Math.random() * 6 + 2 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            // Random color
            const colors = ['rgba(139, 92, 246, 0.4)', 'rgba(99, 102, 241, 0.4)', 'rgba(167, 139, 250, 0.4)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
                particle.remove();
            }, 25000);
        }

        // Create initial particles
        for (let i = 0; i < particleCount; i++) {
            setTimeout(createParticle, i * 500);
        }

        // Keep creating particles
        setInterval(createParticle, 2000);
    }


    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // ==================== PARALLAX EFFECT ====================
    // Disabled - causing tech cards to move away from cursor
    // const cards = document.querySelectorAll('.tech-card, .about-card');
    // document.addEventListener('mousemove', (e) => { ... });


    // ==================== ACTIVE LINK HIGHLIGHTING ====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-purple-400');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('text-purple-400');
            }
        });
    });


    // ==================== SCROLL PROGRESS BAR ====================
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });


    // ==================== 3D TILT EFFECT FOR TECH CARDS ====================
    const tiltCards = document.querySelectorAll('.tech-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });


    // ==================== STAGGERED ANIMATIONS ====================
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });


    // ==================== BUTTON HOVER EFFECTS ====================
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });


    // ==================== COUNTER ANIMATION (for future stats) ====================
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });


    // ==================== SKELETON LOADING ====================
    const skeletons = document.querySelectorAll('.skeleton');
    
    setTimeout(() => {
        skeletons.forEach(skeleton => {
            skeleton.classList.remove('skeleton');
        });
    }, 1500);


// Add ripple keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


    // ==================== TOGGLE PROJEK/DESAIN ====================
    window.showContent = function(type) {
        const contentProjek = document.getElementById('content-projek');
        const contentDesain = document.getElementById('content-desain');
        const btnProjek = document.getElementById('btn-projek');
        const btnDesain = document.getElementById('btn-desain');
        
        if (type === 'projek') {
            contentProjek.classList.remove('hidden');
            contentDesain.classList.add('hidden');
            btnProjek.classList.add('active');
            btnDesain.classList.remove('active');
        } else {
            contentProjek.classList.add('hidden');
            contentDesain.classList.remove('hidden');
            btnProjek.classList.remove('active');
            btnDesain.classList.add('active');
        }
    };


    // ==================== LOADING SCREEN ====================
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        
        // Wait for loading bar animation to complete (2.5s)
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            
            // Remove loading screen from DOM after fade out
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2500);
    });

});

