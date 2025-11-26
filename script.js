document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu-mobile");
    const navIconOpen = document.getElementById("nav-icon-open");
    const navIconClose = document.getElementById("nav-icon-close");
    const portfolioGrid = document.getElementById('portfolio-grid');
    const detalhesProjetoContainer = document.getElementById('detalhes-projeto');
    const pagInicialContainer = document.getElementById('pagInicial');
    const voltarBotao = document.getElementById('voltar-portfolio');
    const filterButtons = document.querySelectorAll('[data-filter]');

    if (navToggle && navMenu) {
        const toggleMenu = () => {
            navMenu.classList.toggle("hidden");
            navIconOpen.classList.toggle("hidden");
            navIconClose.classList.toggle("hidden");
            const isExpanded = !navMenu.classList.contains('hidden');
            navToggle.setAttribute('aria-expanded', isExpanded);
        }
        navToggle.addEventListener("click", toggleMenu);
    }

    function generateLineNumbers() {
        const lineNumbersContainer = document.getElementById('line-numbers');
        const totalLines = 205 + 24; 
        let numbersHTML = '';
        for (let i = 1; i <= totalLines; i++) {
            numbersHTML += `<div class="line-number-item">${i}</div>`;
        }
        lineNumbersContainer.innerHTML = numbersHTML;
    }

    function createProjectCardHtml(id, projeto, index) {
        const delay = 0.1 + (index * 0.05);
        const limitedTechIcons = projeto.tecnologias.slice(0, 10).map(tech => `<img src="${tech.src}" alt="${tech.alt}" title="${tech.alt}">`).join('');
        const primeiraImagemSrc = projeto.imagens.length > 0 ? projeto.imagens[0].src : '';
        const primeiraImagemAlt = projeto.imagens.length > 0 ? projeto.imagens[0].alt : 'Imagem do Projeto';
        const snippetDescricao = projeto.descricaoCurta.substring(0, 80) + (projeto.descricaoCurta.length > 80 ? '...' : '');

        return `
            <a href="#detalhe-projeto-${id}"
                id="${id}"
                class="item-card block scroll-reveal" style="--delay: ${delay}s;"
                data-category="${projeto.categoria}">
                <div class="image-container">
                    <img src="${primeiraImagemSrc}" alt="${primeiraImagemAlt}">
                </div>
                <div class="item-content">
                    <div class="tech-icons">
                        ${limitedTechIcons}
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-[white]">${projeto.titulo}</h3>
                    <p class="text-sm text-[#768390]">${snippetDescricao}</p>
                </div>
            </a>
        `;
    }

    function renderPortfolioGrid() {
        let allCardsHtml = '';
        let index = 0;
        if (typeof projetos !== 'undefined') {
            for (const id in projetos) {
                if (projetos.hasOwnProperty(id)) {
                    allCardsHtml += createProjectCardHtml(id, projetos[id], index);
                    index++;
                }
            }
            portfolioGrid.innerHTML = allCardsHtml;
        } else {
            console.error("O objeto 'projetos' não está definido. Verifique a inclusão de 'projetos-data.js'.");
        }
    }

    function resetToInitialView(event, hash) {
        if (event) event.preventDefault();
        detalhesProjetoContainer.classList.add('hidden');
        pagInicialContainer.classList.remove('hidden');

        if (hash) {
            window.location.hash = hash;
            setTimeout(() => {
                if (hash === '#inicio') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const targetElement = document.querySelector(hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 10);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    document.getElementById('quem-sou-link-desktop').addEventListener('click', (e) => {
        resetToInitialView(e, '#inicio');
    });
    document.getElementById('meus-projetos-link-desktop').addEventListener('click', (e) => {
        resetToInitialView(e, '#secion-projetos');
    });
    document.getElementById('quem-sou-link-mobile').addEventListener('click', (e) => {
        resetToInitialView(e, '#inicio');
        if (!navMenu.classList.contains('hidden')) navToggle.click();
    });
    document.getElementById('meus-projetos-link-mobile').addEventListener('click', (e) => {
        resetToInitialView(e, '#secion-projetos');
        if (!navMenu.classList.contains('hidden')) navToggle.click();
    });

    portfolioGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.item-card');
        if (!card) return;
        e.preventDefault();
        const projectId = card.id;
        const projeto = projetos[projectId];
        
        if (!projeto) {
            console.error(`Detalhes do projeto com ID ${projectId} não encontrados.`);
            return;
        }

        document.getElementById('detalhe-titulo').textContent = projeto.titulo;
        document.getElementById('detalhe-descricao').textContent = projeto.descricaoCompleta;

        const linkExternoBotao = document.getElementById('detalhe-link-externo');
        const linkExternoUrl = projeto.linkExterno;

        if (linkExternoUrl && linkExternoUrl.trim() !== "") {
            linkExternoBotao.href = linkExternoUrl;
            linkExternoBotao.classList.remove('hidden');
        } else {
            linkExternoBotao.href = "#";
            linkExternoBotao.classList.add('hidden');
        }

        const techStackGridContainer = document.getElementById('detalhe-tech-stack');
        techStackGridContainer.innerHTML = projeto.tecnologias.map(tech => `
            <div class="tech-card">
                <img src="${tech.src}" alt="${tech.alt}" class="tech-icon">
                <span class="tech-name">${tech.alt}</span>
            </div>`).join('');

        const imagemEstatica = document.getElementById('detalhe-imagem-src');
        if (projeto.imagens && projeto.imagens.length > 0) {
            imagemEstatica.src = projeto.imagens[0].src;
            imagemEstatica.alt = projeto.imagens[0].alt;
            imagemEstatica.classList.remove('hidden');
        } else {
            imagemEstatica.src = '';
            imagemEstatica.alt = 'Sem Imagem de Visualização';
            imagemEstatica.classList.add('hidden');
        }

        pagInicialContainer.classList.add('hidden');
        detalhesProjetoContainer.classList.remove('hidden');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    voltarBotao.addEventListener('click', (e) => {
        resetToInitialView(e, '#inicio');
    });

    renderPortfolioGrid();

    function filterPortfolio(category) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const clickedButton = document.querySelector(`[data-filter="${category}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        document.querySelectorAll('.item-card').forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.classList.remove('hidden', 'opacity-0', 'scale-95');
                if (item.classList.contains('scroll-reveal-visible')) {
                    item.classList.add('opacity-100', 'scale-100');
                }
            } else {
                item.style.display = 'none';
                item.classList.add('hidden', 'opacity-0', 'scale-95');
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.currentTarget.getAttribute('data-filter');
            filterPortfolio(category);
        });
    });

    filterPortfolio('all');
    generateLineNumbers();

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(element => {
            if (element.style.display !== 'none' && !element.classList.contains('hidden')) {
                observer.observe(element);
            }
        });
    }, 100);
});
