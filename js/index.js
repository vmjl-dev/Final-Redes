// Efecto de partículas para simular luz en fibra óptica
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            const colors = ['#00d9a6', '#00ffcc', '#80ffdb', '#b3ffe6'];
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 3 + 1 + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.boxShadow = '0 0 5px 2px ' + particle.style.backgroundColor;
                particle.style.opacity = Math.random() * 0.6 + 0.2;
                
                // Posición aleatoria pero dentro del contenedor
                const posX = Math.random() * 90 + 5;
                const posY = Math.random() * 80 + 10;
                particle.style.left = posX + '%';
                particle.style.top = posY + '%';
                
                // Animación
                const duration = Math.random() * 10 + 5;
                particle.style.animation = `float ${duration}s infinite ease-in-out`;
                
                const keyframes = `
                    @keyframes float {
                        0% { transform: translate(0, 0); opacity: ${particle.style.opacity}; }
                        25% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
                        50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px); opacity: ${Math.random() * 0.4 + 0.1}; }
                        75% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
                        100% { transform: translate(0, 0); opacity: ${particle.style.opacity}; }
                    }
                `;
                
                const styleSheet = document.styleSheets[0];
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                
                container.appendChild(particle);
            }
        });
