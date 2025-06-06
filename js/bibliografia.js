document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            const colors = ['#00d9a6', '#00ffcc', '#80ffdb', '#b3ffe6'];
            
            // Crear partículas flotantes
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 4 + 1 + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.boxShadow = '0 0 8px 2px ' + particle.style.backgroundColor;
                particle.style.opacity = Math.random() * 0.7 + 0.2;
                
                const posX = Math.random() * 90 + 5;
                const posY = Math.random() * 80 + 10;
                particle.style.left = posX + '%';
                particle.style.top = posY + '%';
                
                const duration = Math.random() * 12 + 6;
                particle.style.animation = `float ${duration}s infinite ease-in-out`;
                
                const keyframes = `
                    @keyframes float {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: ${particle.style.opacity}; }
                        25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 30 - 15}px) rotate(90deg); }
                        50% { transform: translate(${Math.random() * 70 - 35}px, ${Math.random() * 50 - 25}px) rotate(180deg); opacity: ${Math.random() * 0.5 + 0.1}; }
                        75% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 30 - 15}px) rotate(270deg); }
                        100% { transform: translate(0, 0) rotate(360deg); opacity: ${particle.style.opacity}; }
                    }
                `;
                
                const styleSheet = document.styleSheets[0];
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                
                container.appendChild(particle);
            }
            
            // Efecto de aparición escalonada para las referencias
            const references = document.querySelectorAll('.reference-item');
            references.forEach((ref, index) => {
                ref.style.opacity = '0';
                setTimeout(() => {
                    ref.classList.add('fade-in');
                }, 100 * index);
            });
        });
