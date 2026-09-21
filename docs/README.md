Portfolio Documentatie & Onderbouwing - WPFW Opdracht 1

Student: Filip Wiśniowski  
Opleiding: HBO Software Engineering (De Haagse Hogeschool)  
Live Website: https://filiphhs.github.io/github.io/  
Repository: https://github.com/filiphhs/github.io/  

 Request / Response - Schema

[ Browser / Client ]                                    [ Webserver / GitHub Pages ]
         |                                                           |
         | --- (1) HTTP GET /index.html ---------------------------> |
         | <-- (2) 200 OK + index.html (HTML5 code) ---------------- |
         |                                                           |
   (Browser leest HTML & ontdekt CSS + Afbeelding)                   |
         |                                                           |
         | --- (3) HTTP GET /css/style.css ------------------------> |
         | <-- (4) 200 OK + style.css (CSS3 code) ------------------ |
         |                                                           |
         | --- (5) HTTP GET /img/profiel.jpg ----------------------> |
         | <-- (6) 200 OK + profiel.jpg (Image data) --------------- |
         |                                                           |
   (Browser rendert de volledige, gestylde pagina)                   |




Gebruikersscenario's
Scenario 1: Op mobiel

Website op mobiel. De persoon wil binnen 10 seconden zien wie Filip is en snel kunnen doorklikken naar afgeronde projecten om zijn technische vaardigheden te beoordelen.

Scenario 2: Docent / Beoordelaar op desktop

Een docent opent het portfolio op een laptop om de code, structuur en uitwerking te controleren voor het vak WPFW. De docent wil eenvoudig tussen alle pagina's kunnen navigeren en verwacht dat artikelen en blogposts overzichtelijk zijn ingedeeld.

Onderbouwing Ontwerpkeuzes & Bronnen

De keuze voor een semantische HTML5-structuur (`<header>`, `<main>`, `<article>`) zorgt voor een logische opbouw en optimale toegankelijkheid. Dit ondersteunt Scenario 2 (docent op desktop die de structuur beoordeeld) en helpt schermlezers, conform MDN Web Docs - HTML Semantics.

Voor Scenario 1 (mobiel) is een Mobile-First Flexbox layout toegepast (`display: flex`, `flex-wrap: wrap`). Dit voorkomt horizontaal scrollen op kleine schermen en laat elementen op grotere schermen automatisch naast elkaar schalen, zoals beschreven op MDN Web Docs - Basic concepts of flexbox.

Tot slot garandeert het sterke WCAG AA kleurcontrast donkerblauw #1a252f met lichte tekst uitstekende leesbaarheid onder alle omstandigheden voor beide scenario's, volgens de standaarden van MDN Web Docs - Color contrast.