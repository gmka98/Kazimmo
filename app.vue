<template>
    <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
</Head>
  <div>
    <header>
      <nav>
        <div class="logo">KAZIMMO</div>
        <ul class="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#tarifs">Tarifs</a></li>
          <li><a href="#avantages">Avantages</a></li>
          <li><a href="#" class="cta-button-nav">Contact</a></li>
        </ul>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="swiper-container hero-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image: url('/hero-image.png');"></div>
            <div class="swiper-slide" style="background-image: url('/hero-image-2.png');"></div>
            <div class="swiper-slide" style="background-image: url('/hero-image-3.png');"></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="hero-content">
          <h1>CONNEXION PROPRIÉTAIRE | LOCATAIRE</h1>
          <p>La gestion locative simple, transparente et efficace pour optimiser votre investissement.</p>
          <a href="#services" class="cta-button">Découvrir nos services</a>
        </div>
      </section>
       <section id="problemes" class="content-section animate-on-scroll">
            <h2 class="section-title">La gestion locative traditionnelle est un casse-tête</h2>
            <p class="section-subtitle">Vous perdez du temps, de l'énergie et de l'argent.</p>
            <div class="grid">
                <div class="card">
                    <img src="/icon-problem-1.png" alt="Icône paperasse" class="card-icon">
                    <h3>Paperasse Complexe</h3>
                    <p>Contrats, états des lieux, quittances... Une montagne de documents à gérer.</p>
                </div>
                <div class="card">
                    <img src="/icon-problem-2.png" alt="Icône communication" class="card-icon">
                    <h3>Communication Difficile</h3>
                    <p>Disponibilité limitée pour répondre aux demandes des locataires et aux urgences.</p>
                </div>
                <div class="card">
                    <img src="/icon-problem-3.png" alt="Icône loyers impayés" class="card-icon">
                    <h3>Risques d'Impayés</h3>
                    <p>La crainte des loyers impayés et des procédures longues et coûteuses.</p>
                </div>
            </div>
        </section>

        <section id="solution" class="content-section light-bg animate-on-scroll">
             <h2 class="section-title">KAZIMMO est la solution digitale</h2>
             <p class="section-subtitle">Reprenez le contrôle avec une gestion simplifiée et sereine.</p>
             <div class="grid">
                <div class="card">
                    <img src="/icon-solution-1.png" alt="Icône sécurité" class="card-icon">
                    <h3>Tranquillité d'Esprit</h3>
                    <p>Nous gérons tout de A à Z, de la recherche de locataire à la gestion quotidienne.</p>
                </div>
                <div class="card">
                    <img src="/icon-solution-2.png" alt="Icône transparence" class="card-icon">
                    <h3>Transparence Totale</h3>
                    <p>Suivez vos revenus et vos dépenses en temps réel depuis votre espace personnel.</p>
                </div>
                <div class="card">
                    <img src="/icon-solution-3.png" alt="Icône rentabilité" class="card-icon">
                    <h3>Rentabilité Optimale</h3>
                    <p>Nous minimisons la vacance locative et optimisons vos revenus locatifs.</p>
                 </div>
             </div>
        </section>

        <section id="featured-properties" class="content-section animate-on-scroll">
            <h2 class="section-title">Exemples de Biens en Gestion</h2>
            <p class="section-subtitle">Découvrez le type de propriétés que nous aidons nos clients à gérer avec succès.</p>
            <div class="grid properties-grid">
                <div class="property-card">
                    <div class="property-card-image">
                        <img src="/featured-property-1.png" alt="Appartement moderne à Paris">
                        <div class="property-card-badge new-badge">Nouveau</div>
                    </div>
                    <div class="property-card-content">
                        <h3>Appartement T2 - Paris 15ème</h3>
                        <p class="property-details">55 m² • Loyer: 1600€/mois</p>
                        <p>Idéalement situé, entièrement rénové. Parfait pour jeune couple ou professionnel.</p>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-card-image">
                        <img src="/featured-property-2.png" alt="Maison familiale à Bordeaux">
                        <div class="property-card-badge rented-badge">Loué</div>
                    </div>
                    <div class="property-card-content">
                        <h3>Maison Familiale - Bordeaux</h3>
                        <p class="property-details">120 m² • Loyer: 2100€/mois</p>
                        <p>Maison avec jardin dans un quartier calme. Récemment louée en moins d'une semaine.</p>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-card-image">
                        <img src="/featured-property-3.png" alt="Studio étudiant à Lyon">
                         <div class="property-card-badge rented-badge">Loué</div>
                    </div>
                    <div class="property-card-content">
                        <h3>Studio Étudiant - Lyon</h3>
                        <p class="property-details">25 m² • Loyer: 650€/mois</p>
                        <p>Proche des universités, forte demande locative. Rentabilité assurée.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="temoignages" class="content-section light-bg animate-on-scroll">
            <h2 class="section-title">Nos clients sont nos meilleurs ambassadeurs</h2>
            <p class="section-subtitle">Découvrez pourquoi ils nous font confiance pour la gestion de leurs biens.</p>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <img src="/client-1.png" alt="Client satisfait" class="client-photo">
                    <div class="testimonial-stars" data-rating="5"></div>
                    <blockquote>
                        "Une équipe réactive et une plateforme hyper intuitive. Ma gestion locative n'a jamais été aussi simple. Je recommande KAZIMMO les yeux fermés !"
                    </blockquote>
                    <cite>— Sophie & Marc D.</cite>
                </div>
                <div class="testimonial-card">
                    <img src="/client-2.png" alt="Client satisfait" class="client-photo">
                    <div class="testimonial-stars" data-rating="5"></div>
                    <blockquote>
                        "La garantie loyers impayés m'a vraiment apporté la tranquillité que je cherchais. Un service professionnel et transparent."
                    </blockquote>
                    <cite>— Caroline L.</cite>
                </div>
                <div class="testimonial-card">
                    <img src="/client-3.png" alt="Client satisfait" class="client-photo">
                    <div class="testimonial-stars" data-rating="4.5"></div>
                    <blockquote>
                        "Enfin une solution qui allie digital et humain. J'ai un conseiller dédié qui connaît parfaitement mon dossier, c'est très rassurant."
                    </blockquote>
                    <cite>— Jean-Pierre F.</cite>
                </div>
            </div>
            <div class="counters-grid">
                <div class="counter-item">
                    <div class="counter" data-target="98">0</div>
                    <span>% de clients satisfaits</span>
                </div>
                <div class="counter-item">
                    <div class="counter" data-target="500">0</div>
                    <span>Biens sous gestion</span>
                </div>
                <div class="counter-item">
                    <div class="counter" data-target="24">0</div>
                    <span>Heures pour trouver un locataire</span>
                </div>
            </div>
        </section>

        <section id="services" class="content-section animate-on-scroll">
            <h2 class="section-title">Nos services sur-mesure</h2>
            <p class="section-subtitle">Choisissez la formule qui vous correspond.</p>
            <div class="grid services-grid">
                <div class="card service-card">
                    <h3>Essentiel</h3>
                    <p>La gestion locative fondamentale pour bien démarrer.</p>
                </div>
                <div class="card service-card premium-card">
                    <h3>Premium</h3>
                    <p>La solution complète pour une tranquillité absolue.</p>
                </div>
                <div class="card service-card">
                    <h3>Gold</h3>
                    <p>Le service d'excellence avec garanties et options exclusives.</p>
                </div>
            </div>
        </section>

        <section id="calculator" class="content-section light-bg animate-on-scroll">
            <h2 class="section-title">Estimez votre rentabilité locative</h2>
            <p class="section-subtitle">Utilisez notre simulateur pour obtenir une estimation de la performance de votre investissement.</p>
            <div class="calculator-container">
                <div class="calculator-form">
                    <h3>Informations sur le bien</h3>
                    <div class="input-group">
                        <label for="purchase-price">Prix d'achat (€)</label>
                        <input type="number" id="purchase-price" placeholder="Ex: 200000">
                    </div>
                    <div class="input-group">
                        <label for="renovation-costs">Coût des travaux (€)</label>
                        <input type="number" id="renovation-costs" placeholder="Ex: 10000">
                    </div>
                    <div class="input-group">
                        <label for="notary-fees">Frais de notaire (en %)</label>
                        <input type="number" id="notary-fees" value="7.5" placeholder="Ex: 7.5">
                    </div>
                    <h3>Revenus et charges</h3>
                     <div class="input-group">
                        <label for="monthly-rent">Loyer mensuel HC (€)</label>
                        <input type="number"id="monthly-rent" placeholder="Ex: 800">
                    </div>
                    <div class="input-group">
                        <label for="monthly-charges">Taxe foncière annuelle (€)</label>
                        <input type="number" id="annual-tax" placeholder="Ex: 700">
                    </div>
                     <button id="calculate-btn" class="cta-button">Calculer la rentabilité</button>
                </div>
                <div class="calculator-results">
                    <h3>Résultats de la simulation</h3>
                    <div class="result-item">
                        <span class="result-label">Rentabilité Brute</span>
                        <span class="result-value" id="gross-yield">- %</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Rentabilité Nette</span>
                        <span class="result-value" id="net-yield">- %</span>
                    </div>
                    <p class="result-disclaimer">Cette simulation est une estimation. Pour une analyse complète, <a href="#">contactez un expert KAZIMMO</a>.</p>
                </div>
            </div>
        </section>

        <section id="tarifs" class="content-section animate-on-scroll">
            <h2 class="section-title">Des tarifs clairs et compétitifs</h2>
            <div class="pricing-table">
                <div class="pricing-col">
                    <h3>Essentiel</h3>
                    <div class="price">4.9% <span>/mois</span></div>
                    <ul>
                        <li>✔ Recherche de locataire</li>
                        <li>✔ Rédaction du bail</li>
                        <li>✔ Encaissement des loyers</li>
                        <li>✖ Garantie loyers impayés</li>
                        <li>✖ Gestion des travaux</li>
                    </ul>
                    <a href="#" class="cta-button-outline">Choisir Essentiel</a>
                </div>
                <div class="pricing-col featured">
                    <h3>Premium</h3>
                    <div class="price">6.9% <span>/mois</span></div>
                    <ul>
                        <li>✔ Recherche de locataire</li>
                        <li>✔ Rédaction du bail</li>
                        <li>✔ Encaissement des loyers</li>
                        <li>✔ Garantie loyers impayés</li>
                        <li>✖ Gestion des travaux</li>
                    </ul>
                    <a href="#" class="cta-button">Choisir Premium</a>
                </div>
                <div class="pricing-col">
                    <h3>Gold</h3>
                    <div class="price">9.9% <span>/mois</span></div>
                     <ul>
                        <li>✔ Recherche de locataire</li>
                        <li>✔ Rédaction du bail</li>
                        <li>✔ Encaissement des loyers</li>
                        <li>✔ Garantie loyers impayés</li>
                        <li>✔ Gestion des travaux</li>
                    </ul>
                    <a href="#" class="cta-button-outline">Choisir Gold</a>
                </div>
            </div>
        </section>

        <section id="avantages" class="content-section light-bg animate-on-scroll">
             <h2 class="section-title">Pourquoi choisir KAZIMMO ?</h2>
             <div class="grid">
                <div class="card">
                    <img src="/icon-advantage-1.png" alt="Icône expert" class="card-icon">
                    <h3>Experts dédiés</h3>
                    <p>Une équipe de professionnels à votre écoute pour vous conseiller.</p>
                </div>
                <div class="card">
                    <img src="/icon-advantage-2.png" alt="Icône digital" class="card-icon">
                    <h3>Plateforme intuitive</h3>
                    <p>Un outil en ligne simple pour suivre votre gestion 24/7.</p>
                </div>
                <div class="card">
                    <img src="/icon-advantage-3.png" alt="Icône réseau" class="card-icon">
                    <h3>Réseau de confiance</h3>
                    <p>Des artisans qualifiés pour des interventions rapides et de qualité.</p>
                </div>
             </div>
        </section>

    </main>
  </div>
</template>
<script setup>

onMounted(() => {
  const script = document.createElement("script")
  script.src = "https://unpkg.com/swiper/swiper-bundle.min.js"
  script.defer = true
  document.head.appendChild(script)

  script.onload = () => {
    // Initialisation de Swiper (si tu n'utilises pas `swiper/vue`)
    new window.Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }
})
</script>

<style lang="css">
:root {
    --navy: #1a365d;
    --blue: #3182ce;
    --light-gray: #f7fafc;
    --white: #ffffff;
    --text-color: #4a5568;
    --header-font: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--header-font);
    color: var(--text-color);
    line-height: 1.6;
}

/* --- Typography & Global --- */
h1, h2, h3 {
    color: var(--navy);
    font-weight: 600;
}

h1 {
    font-size: 2.5rem;
    line-height: 1.2;
}

.section-title {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 1rem;
}

.section-subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3rem auto;
    font-size: 1.1rem;
}

p {
    margin-bottom: 1rem;
}

a {
    color: var(--blue);
    text-decoration: none;
}

/* --- Layout --- */
.content-section {
    padding: 5rem 2rem;
}

.light-bg {
    background-color: var(--light-gray);
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* --- Header & Navigation --- */
header {
    background: var(--white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--navy);
}

.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    color: var(--navy);
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--blue);
}

/* --- Buttons --- */
.cta-button, .cta-button-nav, .cta-button-outline {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.cta-button {
    background-color: var(--blue);
    color: var(--white);
    animation: pulse 2s infinite;
}

.cta-button:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(49, 130, 206, 0.3);
}

.cta-button-nav {
    background-color: var(--blue);
    color: var(--white);
    padding: 0.6rem 1.2rem;
}
.cta-button-nav:hover {
    color: var(--white);
    background-color: #2b6cb0;
}

.cta-button-outline {
    background-color: transparent;
    border-color: var(--blue);
    color: var(--blue);
}

.cta-button-outline:hover {
    background-color: var(--blue);
    color: var(--white);
}

/* --- Animation Keyframes --- */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(49, 130, 206, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(49, 130, 206, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(49, 130, 206, 0);
    }
}

/* --- Hero Section --- */
.hero {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 54, 93, 0.6);
    z-index: 2;
}

.hero-content {
    position: relative;
    z-index: 3;
    max-width: 800px;
    padding: 0 2rem;
}

.hero-content h1 {
    color: var(--white);
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2rem;
}

.swiper-button-next,
.swiper-button-prev {
    color: var(--white);
    transition: transform 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    transform: scale(1.2);
}

.swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.7);
    width: 10px;
    height: 10px;
    opacity: 0.8;
}

.swiper-pagination-bullet-active {
    background: var(--white);
    transform: scale(1.2);
}

/* --- Cards --- */
.card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.card-icon {
    height: 50px;
    margin-bottom: 1.5rem;
}

.card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.service-card {
    padding: 3rem 2rem;
}
.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.premium-card {
    background-color: var(--navy);
}

.premium-card h3, .premium-card p {
    color: var(--white);
}

/* --- Testimonials Section --- */
#temoignages {
    background-color: var(--white);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 4rem auto;
}

.testimonial-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.client-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-photo:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.testimonial-card blockquote {
    font-style: italic;
    color: var(--text-color);
    margin-bottom: 1rem;
    border: none;
    padding: 0;
}

.testimonial-card cite {
    font-weight: 600;
    color: var(--navy);
}

.counters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.counter-item .counter {
    font-size: 3rem;
    font-weight: 700;
    color: var(--blue);
}

.counter-item span {
    font-size: 1.1rem;
    color: var(--navy);
    font-weight: 500;
}

/* --- Pricing Table --- */
.pricing-table {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.pricing-col {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
}

.pricing-col.featured {
    border: 3px solid var(--blue);
    transform: scale(1.05);
}

.pricing-col:not(.featured) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-col:not(.featured):hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.pricing-col h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.price {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 1.5rem;
}

.price span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-color);
}

.pricing-col ul {
    list-style: none;
    text-align: left;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.pricing-col ul li {
    margin-bottom: 0.8rem;
}

/* --- Footer --- */
footer {
    background-color: var(--navy);
    color: #a0aec0;
    text-align: center;
    padding: 2rem;
}

footer a {
    color: #a0aec0;
}

footer a:hover {
    color: var(--white);
}

/* --- Scroll Animations --- */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Responsive --- */
.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: var(--navy);
    margin: 5px;
    transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
    body {
        overflow-x: hidden;
    }

    .nav-links {
        position: fixed;
        right: 0px;
        top: 0;
        height: 100vh;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 60%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
        padding: 4rem 0;
    }

    .nav-links.nav-active {
        transform: translateX(0%);
    }

    .burger {
        display: block;
        z-index: 101;
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    h1 {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .content-section {
        padding: 3rem 1rem;
    }

    .pricing-col.featured {
        transform: scale(1);
    }
}
</style>



