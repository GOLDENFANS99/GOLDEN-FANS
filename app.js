// ===== APP.JS =====

const grid       = document.getElementById('productGrid');
const searchInput   = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const brandFilter   = document.getElementById('brandFilter');
const sortFilter    = document.getElementById('sortFilter');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');

// Populate brand filter dynamically from products
const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort();
brands.forEach(b => {
  const opt = document.createElement('option');
  opt.value = b;
  opt.textContent = b;
  brandFilter.appendChild(opt);
});

// ---- RENDER ----
function render() {
  const search   = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const brand    = brandFilter.value;
  const sort     = sortFilter.value;

  let list = PRODUCTS.filter(p => {
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search);
    const matchCat  = !category || p.category === category;
    const matchBrand = !brand || p.brand === brand;
    return matchSearch && matchCat && matchBrand;
  });

  if (sort === 'price-asc')  list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  if (sort === 'price-desc') list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty">No se encontraron productos.</div>';
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <img class="card-img" src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <div class="card-brand">${p.brand}${p.isNew ? ' <span style="background:var(--accent);color:#000;padding:2px 6px;border-radius:20px;font-size:0.55rem;margin-left:6px;">NEW</span>' : ''}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-footer">
          <span class="card-price">${p.price}</span>
          <span class="card-cat">${p.category}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

// ---- MODAL ----
function openModal(p) {
  document.getElementById('modalImg').src    = p.image;
  document.getElementById('modalImg').alt    = p.name;
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalLink').href         = p.link;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ---- EVENTS ----
searchInput.addEventListener('input', render);
categoryFilter.addEventListener('change', render);
brandFilter.addEventListener('change', render);
sortFilter.addEventListener('change', render);

// ---- INIT ----
render();
