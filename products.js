// ============================================================
// GOLD FANS — PRODUCTOS
// Edita este archivo para añadir o modificar productos.
//
// CATEGORÍAS DISPONIBLES:
// camisetas | camisetas-cortas | polos | camisetas-manga-larga
// pantalones | pantalones-largos | vaqueros | pantalones-cortos
// chandals | chandals-completos | sudaderas | pantalones-chandal
// zapatillas | zapatillas-nike | zapatillas-adidas | zapatillas-armani | zapatillas-guess
// accesorios | gorras | bolsos | mochilas | cinturones
//
// featured: true → aparece en la sección DESTACADOS del inicio
// ============================================================

const PRODUCTS = [
{
id: 1,
brand: “Emporio Armani”,
name: “Chándal Completo Logo EA7”,
category: “chandals-completos”,
price: “189€”,
image: “https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Chándal completo Emporio Armani EA7. Tejido técnico premium, logo bordado en pecho. Disponible en negro y azul marino.”,
isNew: true,
featured: true
},
{
id: 2,
brand: “Guess”,
name: “Camiseta Logo Triángulo”,
category: “camisetas-cortas”,
price: “49€”,
image: “https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Camiseta Guess clásica con logo triángulo bordado. Algodón 100%, corte regular.”,
isNew: false,
featured: true
},
{
id: 3,
brand: “Lacoste”,
name: “Polo Piqué Classic Fit”,
category: “polos”,
price: “95€”,
image: “https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “El polo más icónico de Lacoste. Algodón piqué petit, cocodrilo bordado. Corte classic fit.”,
isNew: true,
featured: true
},
{
id: 4,
brand: “Nike”,
name: “Air Force 1 ’07 White”,
category: “zapatillas-nike”,
price: “115€”,
image: “https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “El clásico atemporal. Piel sintética blanca, suela de goma cupsole. Icono del streetwear.”,
isNew: false,
featured: true
},
{
id: 5,
brand: “Emporio Armani”,
name: “Bolso Shopper Logo”,
category: “bolsos”,
price: “220€”,
image: “https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Shopper Emporio Armani en nylon resistente. Logo all-over, asas largas y cortas.”,
isNew: true,
featured: true
},
{
id: 6,
brand: “Adidas”,
name: “Superstar Classic White”,
category: “zapatillas-adidas”,
price: “100€”,
image: “https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “La zapatilla más vendida de la historia. Upper de piel, puntera shell. Tres rayas icónicas.”,
isNew: false,
featured: false
},
{
id: 7,
brand: “Guess”,
name: “Mochila Logo Negra”,
category: “mochilas”,
price: “85€”,
image: “https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Mochila Guess en nylon con logo metálico frontal. Varios compartimentos y acabado resistente.”,
isNew: false,
featured: false
},
{
id: 8,
brand: “Lacoste”,
name: “Gorra Cocodrilo Logo”,
category: “gorras”,
price: “40€”,
image: “https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Gorra Lacoste con logo cocodrilo bordado. Ajuste trasero, varios colores disponibles.”,
isNew: true,
featured: false
},
{
id: 9,
brand: “Tommy Hilfiger”,
name: “Vaquero Slim Fit”,
category: “vaqueros”,
price: “89€”,
image: “https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Vaquero Tommy Hilfiger corte slim. Denim elástico de alta calidad. Logo en bolsillo trasero.”,
isNew: false,
featured: false
},
{
id: 10,
brand: “Emporio Armani”,
name: “Cinturón Piel Logo EA”,
category: “cinturones”,
price: “75€”,
image: “https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80”,
link: “https://TU-ENLACE-AFILIADO-AQUI”,
desc: “Cinturón Emporio Armani en piel genuina. Hebilla metálica con logo EA grabado.”,
isNew: false,
featured: false
}
];
