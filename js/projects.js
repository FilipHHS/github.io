// 1. Databron met projecten
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

// 2. Functie om projecten op het scherm te tekenen
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
            // Verwijder 'active' class van alle knoppen en voeg toe aan de geklikte knop
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            if (selectedCategory === 'all') {
                renderProjects(projects);
            } else {
                // Filter de array op de gekozen categorie
                const filteredProjects = projects.filter(project => project.category === selectedCategory);
                renderProjects(filteredProjects);
            }
        });
    });
}

// 4. Starten zodra de pagina klaar is
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    setupFilters();
});