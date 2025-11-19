document.addEventListener('DOMContentLoaded', () => {
    const propertiesGrid = document.getElementById('properties-grid');

    // Function to render properties
    function renderProperties(properties) {
        // Clear existing content (loading skeleton)
        propertiesGrid.innerHTML = '';

        properties.forEach(property => {
            const card = document.createElement('div');
            card.className = 'property-card';

            // Create card HTML structure
            card.innerHTML = `
                <div class="card-image">
                    <img src="${property.image}" alt="${property.title}" loading="lazy">
                    <span class="card-tag">${property.type}</span>
                </div>
                <div class="card-content">
                    <div class="card-price">${property.currency} ${property.price} <span>/ mes</span></div>
                    <h3 class="card-title">${property.title}</h3>
                    <div class="card-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        ${property.location}
                    </div>
                    <div class="card-features">
                        <div class="feature" title="Habitaciones">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path><path d="M3 18h18"></path></svg>
                            <span>${property.beds} hab.</span>
                        </div>
                        <div class="feature" title="Baños">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1.1L4 2v20h16V2l-1.5.4a1.5 1.5 0 0 0-1 1.1L15 6"></path><path d="M2 10h20"></path></svg>
                            <span>${property.baths} baños</span>
                        </div>
                        <div class="feature" title="Superficie">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
                            <span>${property.area} m²</span>
                        </div>
                    </div>
                </div>
            `;

            propertiesGrid.appendChild(card);
        });
    }

    // Simulate loading delay for realism
    setTimeout(() => {
        if (typeof propertiesData !== 'undefined') {
            renderProperties(propertiesData);
        } else {
            propertiesGrid.innerHTML = '<p class="error">Error al cargar los datos.</p>';
        }
    }, 500);

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const spans = mobileBtn.querySelectorAll('span');
            // Simple animation toggle
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});
