// Databron met blogartikelen
const blogPosts = [
    {
        id: 1,
        title: "Mijn eerste ervaringen met Web Programming",
        date: "12 februari 2026",
        readTime: "3 min leestijd",
        summary: "Een terugblik op het opzetten van de eerste HTML5 & CSS3 structuren, mobile-first design en het behalen van WCAG AA toegankelijkheid.",
        content: "Tijdens de eerste weken van de WPFW module hebben we geleerd hoe belangrijk een goede basis is. Door te werken met semantische HTML5-tags en een gestructureerd CSS-stylesheet blijft de code overzichtelijk en toegankelijk voor iedereen.",
        category: "Studie"
    },
    {
        id: 2,
        title: "Waarom toegankelijkheid (WCAG AA) belangrijk is",
        date: "28 februari 2026",
        readTime: "4 min leestijd",
        summary: "Toegankelijkheid op het web is geen optie meer, maar een vereiste. Lees hoe ik ARIA-labels en contrastverhoudingen toepas.",
        content: "Het bouwen van een toegankelijke website zorgt ervoor dat mensen met een visuele of motorische beperking net zo makkelijk je site kunnen gebruiken. Met goede contrasten, toetsenbordnavigatie en duidelijke focus-states maken we het web voor iedereen beter.",
        category: "Webdev"
    },
    {
        id: 3,
        title: "Van Statische HTML naar Dynamische DOM Manipulatie",
        date: "10 maart 2026",
        readTime: "5 min leestijd",
        summary: "Hoe JavaScript wordt ingezet om content dynamisch in te laden, te filteren en de gebruiker interactie te bieden.",
        content: "Door het scheiden van data (JSON/Arrays) en weergave (DOM) wordt je website vele malen flexibeler. Met functies als document.createElement() en appendChild() bouwen we de pagina op vanuit de achtergrond.",
        category: "JavaScript"
    }
];

// Functie om blogberichten dynamisch op de pagina te bouwen
function renderBlogPosts(posts) {
    const container = document.getElementById('blog-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';

        // Header van het artikel (titel & meta)
        const title = document.createElement('h3');
        title.textContent = post.title;

        const meta = document.createElement('p');
        meta.className = 'blog-meta';
        meta.textContent = `${post.date} • ${post.readTime} • ${post.category}`;

        // Samenvatting en volledige tekst
        const summary = document.createElement('p');
        summary.className = 'blog-summary';
        summary.textContent = post.summary;

        const fullContent = document.createElement('p');
        fullContent.className = 'blog-full-content';
        fullContent.style.display = 'none'; // Standaard verborgen
        fullContent.textContent = post.content;

        // Lees meer knop (Interactie)
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'read-more-btn';
        toggleBtn.textContent = 'Lees meer';

        toggleBtn.addEventListener('click', () => {
            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                toggleBtn.textContent = 'Lees minder';
            } else {
                fullContent.style.display = 'none';
                toggleBtn.textContent = 'Lees meer';
            }
        });

        // Alles samenvoegen
        article.appendChild(title);
        article.appendChild(meta);
        article.appendChild(summary);
        article.appendChild(fullContent);
        article.appendChild(toggleBtn);

        container.appendChild(article);
    });
}

// Uitvoeren bij laden
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts(blogPosts);
});