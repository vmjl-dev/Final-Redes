document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            const colors = ['#00d9a6', '#00ffcc', '#80ffdb', '#b3ffe6'];
            
            // Crear partículas flotantes
            for (let i = 0; i < 25; i++) {
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
                        0% { transform: translate(0, 0); opacity: ${particle.style.opacity}; }
                        25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 30 - 15}px); }
                        50% { transform: translate(${Math.random() * 70 - 35}px, ${Math.random() * 50 - 25}px); opacity: ${Math.random() * 0.5 + 0.1}; }
                        75% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 30 - 15}px); }
                        100% { transform: translate(0, 0); opacity: ${particle.style.opacity}; }
                    }
                `;
                
                const styleSheet = document.styleSheets[0];
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                
                container.appendChild(particle);
            }
            
            // Efecto de destello al cargar la página
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100%';
            flash.style.height = '100%';
            flash.style.background = 'radial-gradient(circle, rgba(0, 217, 166, 0.3) 0%, transparent 70%)';
            flash.style.opacity = '0';
            flash.style.animation = 'flashEffect 1.5s ease-out';
            flash.style.zIndex = '1000';
            flash.style.pointerEvents = 'none';
            
            const flashKeyframes = `
                @keyframes flashEffect {
                    0% { opacity: 0.8; transform: scale(0.5); }
                    70% { opacity: 0.3; }
                    100% { opacity: 0; transform: scale(1.5); }
                }
            `;
            
            styleSheet.insertRule(flashKeyframes, styleSheet.cssRules.length);
            
            document.body.appendChild(flash);
            setTimeout(() => {
                document.body.removeChild(flash);
            }, 1500);
        });
