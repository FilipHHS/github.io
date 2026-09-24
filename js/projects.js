// 1. Databron met lokale projecten
const projects = [
    {
        title: "Portfolio Website",
        category: "Frontend",
        description: "Een toegankelijke, responsieve portfolio site gebouwd volgens W3C- en WCAG AA-standaarden.",
        link: "https://github.com/FilipHHS/filiphhs.github.io"
    },
    {
        title: "Shiftleider Planner Tool",
        category: "Tooling",
        description: "Een handige tool ter ondersteuning van shiftleiders bij Albert Heijn voor dagelijkse planningen.",
        link: "https://github.com/FilipHHS"
    },
    {
        title: "Database Management System",
        category: "Backend",
        description: "Een SQL database-ontwerp voor het gestructureerd beheren van voorraad- en klantgegevens.",
        link: "https://github.com/FilipHHS"
    }
];

// 2. Functie om lokale projecten op het scherm te tekenen
function renderProjects(projectsArray) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    projectsArray.forEach(project => {
        const card = document.createElement('article');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'card-button';
        link.textContent = 'Bekijk Project';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        container.appendChild(card);
    });
}

// 3. Functie om het filteren af te handelen
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            if (selectedCategory === 'all') {
                renderProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => project.category === selectedCategory);
                renderProjects(filteredProjects);
            }
        });
    });
}

// 4. NIEUW: Async functie om live repositories op te halen via de GitHub API
async function fetchGitHubRepos() {
    const container = document.getElementById('github-container');
    if (!container) return;

    try {
        // Haal de 6 laatst bijgewerkte repositories op van jouw account
        const response = await fetch('https://api.github.com/users/FilipHHS/repos?sort=updated&per_page=6');

        if (!response.ok) {
            throw new Error(`Netwerkfout: ${response.status}`);
        }

        const repos = await response.json();
        container.innerHTML = ''; // Maak laadtekst leeg

        if (repos.length === 0) {
            container.innerHTML = '<p>Geen openbare repositories gevonden.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('article');
            card.className = 'card';

            const title = document.createElement('h3');
            title.textContent = repo.name;

            const description = document.createElement('p');
            description.textContent = repo.description || 'Geen beschrijving beschikbaar voor deze repository.';

            const link = document.createElement('a');
            link.href = repo.html_url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.className = 'card-button';
            link.textContent = 'Bekijk op GitHub';

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('API Fout:', error);
        container.innerHTML = '<p style="color: #ef4444;">Het is niet gelukt om live GitHub data op te halen.</p>';
    }
}

// 5. Alles starten zodra de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    setupFilters();
    fetchGitHubRepos();
});