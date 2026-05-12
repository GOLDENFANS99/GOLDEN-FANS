// ===== GOLD FANS — APP.JS =====

// NAV scroll effect
const navbar = document.getElementById(‘navbar’);
window.addEventListener(‘scroll’, () => {
navbar.classList.toggle(‘scrolled’, window.scrollY > 60);
});

// Mobile menu
const hamburger = document.getElementById(‘navHamburger’);
const mobileMenu = document.getElementById(‘mobileMenu’);
hamburger.addEventListener(‘click’, () => mobileMenu.classList.toggle(‘open’));
document.querySelectorAll(’.mobile-link’).forEach(l => l.addEventListener(‘click’, () => mobileMenu.classList.remove(‘open’)));

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(‘visible’); } });
}, { threshold: 0.1 });

// FEATURED GRID
const featuredGrid = document.getElementById(‘featuredGrid’);
const featured = PRODUCTS.filter(p => p.featured);
featured.forEach((p, i) => {
const card = createCard(p, i);
featuredGrid.appendChild(card);
});

// CATALOG GRID
const grid = document.getElementById(‘productGrid’);
const searchInput = document.getElementById(‘searchInput’);
const categoryFilter = document.getElementById(‘categoryFilter’);
const brandFilter = document.getElementById(‘brandFilter’);
const sortFilter = document.getElementById(‘sortFilter’);

// Populate category filter with all unique categories
const allCats = […new Set(PRODUCTS.map(p => p.category))].sort();
allCats.forEach(c => {
const opt = document.createElement(‘option’);
opt.value = c; opt.textContent = c.replace(/-/g, ’ ’).toUpperCase();
categoryFilter.appendChild(opt);
});

// Populate brand filter
const brands = […new Set(PRODUCTS.map(p => p.brand))].sort();
brands.forEach(b => {
const opt = document.createElement(‘option’);
opt.value = b; opt.textContent = b;
brandFilter.appendChild(opt);
});

function createCard(p, i) {
const card = document.createElement(‘div’);
card.className = ‘card reveal’;
card.style.animationDelay = `${i * 50}ms`;
card.innerHTML = `${p.isNew ? '<div class="card-new">NEW</div>' : ''} <div class="card-img-wrap"> <img class="card-img" src="${p.image}" alt="${p.name}" loading="lazy" /> </div> <div class="card-body"> <div class="card-brand">${p.brand}</div> <div class="card-name">${p.name}</div> <div class="card-footer"> <span class="card-price">${p.price}</span> <span class="card-cat">${p.category.replace(/-/g, ' ')}</span> </div> </div>`;
card.addEventListener(‘click’, () => openModal(p));
setTimeout(() => revealObserver.observe(card), 0);
return card;
}

function render() {
const search = searchInput.value.toLowerCase().trim();
const category = categoryFilter.value;
const brand = brandFilter.value;
const sort = sortFilter.value;

let list = PRODUCTS.filter(p => {
const matchSearch = !search || p.name.toLowerCase().includes(search) || p.brand.toLowerCase().includes(search);
const matchCat = !category || p.category === category || p.category.startsWith(category);
const matchBrand = !brand || p.brand === brand;
return matchSearch && matchCat && matchBrand;
});

if (sort === ‘price-asc’) list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
if (sort === ‘price-desc’) list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

grid.innerHTML = ‘’;
if (list.length === 0) {
grid.innerHTML = ‘<div class="empty">No se encontraron productos.</div>’;
return;
}
list.forEach((p, i) => grid.appendChild(createCard(p, i)));
}

searchInput.addEventListener(‘input’, render);
categoryFilter.addEventListener(‘change’, render);
brandFilter.addEventListener(‘change’, render);
sortFilter.addEventListener(‘change’, render);

// Category cards → filter catalog
document.querySelectorAll(’.cat-sub-item’).forEach(item => {
item.addEventListener(‘click’, (e) => {
e.stopPropagation();
const cat = item.dataset.cat;
categoryFilter.value = cat;
render();
document.getElementById(‘catalogo’).scrollIntoView({ behavior: ‘smooth’ });
});
});

// MODAL
const modalOverlay = document.getElementById(‘modalOverlay’);
const modalClose = document.getElementById(‘modalClose’);

function openModal(p) {
document.getElementById(‘modalImg’).src = p.image;
document.getElementById(‘modalImg’).alt = p.name;
document.getElementById(‘modalBrand’).textContent = p.brand;
document.getElementById(‘modalTitle’).textContent = p.name;
document.getElementById(‘modalPrice’).textContent = p.price;
document.getElementById(‘modalDesc’).textContent = p.desc;
document.getElementById(‘modalLink’).href = p.link;
modalOverlay.classList.add(‘open’);
document.body.style.overflow = ‘hidden’;
}
function closeModal() {
modalOverlay.classList.remove(‘open’);
document.body.style.overflow = ‘’;
}
modalClose.addEventListener(‘click’, closeModal);
modalOverlay.addEventListener(‘click’, e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener(‘keydown’, e => { if (e.key === ‘Escape’) closeModal(); });

render();
