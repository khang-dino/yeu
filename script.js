document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00d9ff,
        backgroundColor: 0x030014,
        points: 15.00,
        maxDistance: 25.00,
        spacing: 15.00,
        showDots: false
    });
     
    gsap.registerPlugin(ScrollTrigger);
     
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach(section => {
        gsap.fromTo(section, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
     
    const cursorGlow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.opacity = '1';
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
         
        clearTimeout(window.cursorTimeout);
        window.cursorTimeout = setTimeout(() => {
            cursorGlow.style.opacity = '0';
        }, 1500);
    });
     
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        ScrollTrigger.create({
            trigger: bar,
            start: "top 90%",
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: "power3.out"
                });
            },
            once: true
        });
    });
      
    const nameElement = document.querySelector('h1 .text-gradient');
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < name.length) {
            nameElement.textContent += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
     
    VanillaTilt.init(document.querySelectorAll(".card-3d"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true
    });
     
    const elements = document.querySelectorAll('.hover-lift');
    elements.forEach((el, index) => {
        gsap.to(el, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
        });
    });
     
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        gsap.to('#vanta-bg', {
            x: moveX,
            y: moveY,
            duration: 1,
            ease: "power1.out"
        });
    });
     
    const particlesContainer = document.getElementById('particles-container');
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
         
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
         
        const size = Math.random() * 3 + 1;
         
        const duration = Math.random() * 15 + 5;
         
        const delay = Math.random() * 5;
         
        particle.style.left = `${x}px`;
        particle.style.bottom = `-10px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
         
        setTimeout(() => {
            particle.remove();
            createParticle();
        }, (duration + delay) * 1000);
    }
     
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {  
            const cursor = document.createElement('div');
            cursor.classList.add('cursor-trail');
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
            
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 1000);
        }
    });
     
    const techPills = document.querySelectorAll('.tech-pill');
    techPills.forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            gsap.to(pill, {
                y: -5,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        pill.addEventListener('mouseleave', () => {
            gsap.to(pill, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
     
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
     
    const avatar = document.querySelector('.avatar-container');
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        gsap.to(avatar, {
            rotationY: xAxis,
            rotationX: yAxis,
            duration: 0.5,
            ease: "power1.out"
        });
    });
     
    document.addEventListener('mouseleave', () => {
        gsap.to(avatar, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power1.out"
        });
    });
     
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        setInterval(() => {
            el.classList.add('active-glitch');
            setTimeout(() => {
                el.classList.remove('active-glitch');
            }, 200);
        }, 5000);
    });
     
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
     
    const cards = document.querySelectorAll('.card-3d-wrapper');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.querySelector('.card-3d-content').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-3d-content').style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
     
    const neonButtons = document.querySelectorAll('.neon-button');
    neonButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                boxShadow: '0 0 10px rgba(0, 217, 255, 0.7), 0 0 20px rgba(0, 217, 255, 0.4)',
                duration: 0.3
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });
     
    const cyberpunkBadges = document.querySelectorAll('.cyberpunk-badge');
    cyberpunkBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.animation = 'badge-shine 1s';
            setTimeout(() => {
                badge.style.animation = '';
            }, 1000);
        });
    });
});  
 
function improveBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'interactive-bg';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
     
    const points = [];
    const numPoints = 100;
    const connectionDistance = 150;
    const pointSize = 1; 
    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
     
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
     
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.strokeStyle = 'rgba(0, 195, 255, 0.15)';
        ctx.beginPath();
        
        for (let i = 0; i < points.length; i++) {
            const p1 = points[i]; 
            const mouseDistance = Math.sqrt(Math.pow(p1.x - mouseX, 2) + Math.pow(p1.y - mouseY, 2));
            if (mouseDistance < connectionDistance * 1.5) {
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(mouseX, mouseY);
                p1.x += (mouseX - p1.x) * 0.01;
                p1.y += (mouseY - p1.y) * 0.01;
            }
            for (let j = i + 1; j < points.length; j++) {
                const p2 = points[j];
                const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                
                if (distance < connectionDistance) {
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.globalAlpha = 1 - (distance / connectionDistance);
                }
            }
        }
        
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, pointSize, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
            if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
    });
} 
document.addEventListener('DOMContentLoaded', function() { 
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => { 
                const originalIcon = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    this.innerHTML = originalIcon;
                }, 1500);
            });
        });
    });
});
