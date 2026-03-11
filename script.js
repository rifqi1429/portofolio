// ========================================
// PORTFOLIO ANIMATIONS - Enhanced Version
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ==================== FLOATING GRADIENT ORBS ====================
    function createGradientOrbs() {
        const orbs = [
            { class: 'orb-1', delay: 0 },
            { class: 'orb-2', delay: -7 },
            { class: 'orb-3', delay: -14 }
        ];
        
        orbs.forEach((orb, index) => {
            const orbElement = document.createElement('div');
            orbElement.className = `gradient-orb ${orb.class}`;
            orbElement.style.animationDelay = `${orb.delay}s`;
            document.body.appendChild(orbElement);
        });
    }
    
    // Only create orbs on desktop
    if (window.innerWidth >= 1024) {
        createGradientOrbs();
    }

    // ==================== ENHANCED PARTICLES ====================
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        const particleCount = 30;

        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            
            // Random size (more variety)
            const size = Math.random() * 8 + 2 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            // Random colors (more variety)
            const colors = [
                'rgba(139, 92, 246, 0.4)', 
                'rgba(99, 102, 241, 0.4)', 
                'rgba(167, 139, 250, 0.4)',
                'rgba(236, 72, 153, 0.4)',
                'rgba(6, 182, 212, 0.4)'
            ];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random shape
            if (Math.random() > 0.7) {
                particle.style.borderRadius = '0';
                particle.style.transform = `rotate(${Math.random() * 360}deg)`;
            }
            
            particlesContainer.appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
                particle.remove();
            }, 15000);
        }

        // Create initial particles
        for (let i = 0; i < particleCount; i++) {
            setTimeout(createParticle, i * 300);
        }

        // Keep creating particles
        setInterval(createParticle, 1500);
    }


    // ==================== MAGNETIC BUTTON EFFECT ====================
    const magneticButtons = document.querySelectorAll('.magnetic-btn, .btn-primary');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });


    // ==================== ENHANCED 3D TILT EFFECT ====================
    const tiltCards = document.querySelectorAll('.tech-card, .about-card, .contact-card');
    
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


    // ==================== PROJECT CARD HOVER EFFECTS ====================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shimmer-card');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shimmer-card');
        });
    });


    // ==================== NAV LINK ENHANCED ====================
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.add('nav-link');
        
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });


    // ==================== INPUT FIELD ENHANCED ANIMATIONS ====================
    const inputFields = document.querySelectorAll('input, textarea');
    
    inputFields.forEach(input => {
        const parent = input.parentElement;
        if (parent && !parent.classList.contains('input-animated')) {
            parent.classList.add('input-animated');
        }
        
        input.addEventListener('focus', () => {
            input.style.borderColor = '#8B5CF6';
        });
        
        input.addEventListener('blur', () => {
            input.style.borderColor = '#374151';
        });
    });


    // ==================== COUNTER ANIMATION ====================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }


    // ==================== PARALLAX EFFECT (SUBTLE) ====================
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.gradient-orb');
                
                parallaxElements.forEach((el, index) => {
                    const speed = (index + 1) * 0.1;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });


    // ==================== SMOOTH REVEAL STAGGER ====================
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 50);
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();


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


    // ==================== ACTIVE LINK HIGHLIGHTING ====================
    const sections = document.querySelectorAll('section');
    
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
            link.classList.remove('text-purple-400', 'active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('text-purple-400', 'active');
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


    // ==================== STAGGERED ANIMATIONS ====================
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
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });


    // ==================== TOGGLE PROJEK/DESAIN ====================
    window.showContent = function(type) {
        const contentProjek = document.getElementById('content-projek');
        const contentDesain = document.getElementById('content-desain');
        const btnProjek = document.getElementById('btn-projek');
        const btnDesain = document.getElementById('btn-desain');
        
        if (type === 'projek') {
            contentProjek.style.opacity = '0';
            contentProjek.style.transform = 'translateX(-20px)';
            contentDesain.style.opacity = '0';
            contentDesain.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                contentProjek.classList.remove('hidden');
                contentDesain.classList.add('hidden');
                btnProjek.classList.add('active');
                btnDesain.classList.remove('active');
                
                contentProjek.style.opacity = '1';
                contentProjek.style.transform = 'translateX(0)';
            }, 150);
        } else {
            contentProjek.style.opacity = '0';
            contentProjek.style.transform = 'translateX(-20px)';
            contentDesain.style.opacity = '0';
            contentDesain.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                contentProjek.classList.add('hidden');
                contentDesain.classList.remove('hidden');
                btnProjek.classList.remove('active');
                btnDesain.classList.add('active');
                
                contentDesain.style.opacity = '1';
                contentDesain.style.transform = 'translateX(0)';
            }, 150);
        }
    };


    // ==================== LOADING SCREEN ====================
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });


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


    // ==================== WAVE GREETING ANIMATION ====================
    const waveEmoji = document.querySelector('.wave');
    if (waveEmoji) {
        waveEmoji.style.animation = 'wave 2s ease-in-out infinite';
    }


    // ==================== SCROLL DOWN INDICATOR ====================
    function createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '<i class="fas fa-chevron-down text-2xl"></i>';
        indicator.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(139, 92, 246, 0.6);
            cursor: pointer;
            z-index: 100;
            animation: scrollBounce 2s ease-in-out infinite;
        `;
        
        indicator.addEventListener('click', () => {
            const tentang = document.getElementById('tentang');
            if (tentang) {
                tentang.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                indicator.style.opacity = '0';
                indicator.style.transition = 'opacity 0.3s ease';
            } else {
                indicator.style.opacity = '1';
            }
        });
    }
    
    if (window.innerWidth >= 1024) {
        createScrollIndicator();
    }


    // ==================== SKELETON LOADING ====================
    const skeletons = document.querySelectorAll('.skeleton');
    
    setTimeout(() => {
        skeletons.forEach(skeleton => {
            skeleton.classList.remove('skeleton');
        });
    }, 1500);


    // ==================== GLITCH EFFECT ====================
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

    // ==================== TEXT HIGHLIGHT ====================
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


    // ==================== COUNTER FOR STATS ====================
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

});

