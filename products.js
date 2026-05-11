// ============================================================
//  PRODUCTOS — Edita este archivo para añadir tus productos
//
//  Campos:
//    id       → número único, no repetir
//    brand    → marca (ej: "Nike", "Gucci")
//    name     → nombre del producto
//    category → zapatillas | ropa | bolsos | cinturones | accesorios
//    price    → precio de referencia como texto (ej: "89,99€")
//    image    → URL de la imagen del producto
//    link     → tu enlace de afiliado a CNFans / USFans / etc.
//    desc     → descripción corta del producto
//    isNew    → true si quieres mostrar badge "NEW"
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Force 1 Low White",
    category: "zapatillas",
    price: "28,50€",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Clásico atemporal. Piel sintética de alta calidad, suela de goma duradera. Batch PK.",
    isNew: true
  },
  {
    id: 2,
    brand: "Jordan",
    name: "Air Jordan 4 Retro Yellow Thunder",
    category: "zapatillas",
    price: "54,00€",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a6cc?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Colorway icónico amarillo/negro. Construcción sólida, amortiguación Air original.",
    isNew: false
  },
  {
    id: 3,
    brand: "Gucci",
    name: "Bolso de Hombro GG Marmont",
    category: "bolsos",
    price: "78,00€",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Cuero acolchado blanco, herraje dorado con logo GG. Calidad de primera.",
    isNew: true
  },
  {
    id: 4,
    brand: "Louis Vuitton",
    name: "Cinturón Monogram LV",
    category: "cinturones",
    price: "32,00€",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Cuero genuino con hebilla de metal dorado y patrón monogram LV.",
    isNew: false
  },
  {
    id: 5,
    brand: "Essentials",
    name: "Hoodie Fear of God Beige",
    category: "ropa",
    price: "38,00€",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Sudadera oversize de algodón pesado. Logo tonal en pecho. Acabado premium.",
    isNew: false
  },
  {
    id: 6,
    brand: "Adidas",
    name: "Yeezy Boost 350 V2 Bone",
    category: "zapatillas",
    price: "43,00€",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Upper en Primeknit, suela Boost completa. Uno de los mejores batches disponibles.",
    isNew: true
  },
  {
    id: 7,
    brand: "MCM",
    name: "Mochila Visetos Monogram",
    category: "bolsos",
    price: "62,00€",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Coñac, lona con patrón Visetos y herrajes dorados. Dos compartimentos principales.",
    isNew: false
  },
  {
    id: 8,
    brand: "Rolex",
    name: "Submariner Date Black",
    category: "accesorios",
    price: "95,00€",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
    link: "https://cnfans.com/TU-ENLACE-AQUI",
    desc: "Movimiento automático, bisel negro rotante, correa Oyster. Alta precisión.",
    isNew: false
  }
];
