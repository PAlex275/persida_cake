export const products = [
  {
    id: 1,
    name: "Tort Red Velvet",
    category: "torturi",
    price: 280,
    description: "Blat catifela roșie, cremă mascarpone, decor elegant",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&q=80"
  },
  {
    id: 2,
    name: "Tort Ciocolată Belgiană",
    category: "torturi",
    price: 320,
    description: "Trei straturi de ciocolată, ganache premium, trufe artizanale",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
  },
  {
    id: 3,
    name: "Tort Fructe de Pădure",
    category: "torturi",
    price: 290,
    description: "Mousse vanilie, fructe proaspete, glazură oglindă",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80"
  },
  {
    id: 4,
    name: "Macarons Asortate",
    category: "macarons",
    price: 12,
    description: "Set 6 bucăți, arome la alegere",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80"
  },
  {
    id: 5,
    name: "Macarons Champagne",
    category: "macarons",
    price: 15,
    description: "Cremă cu șampanie, frunze de aur comestibil",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80"
  },
  {
    id: 6,
    name: "Eclair Paris-Brest",
    category: "deserturi",
    price: 28,
    description: "Choux praline alune, cremă mousseline",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80"
  },
  {
    id: 7,
    name: "Eclair Ciocolată",
    category: "deserturi",
    price: 25,
    description: "Glazură oglindă, cremă diplomatică cacao",
    image: "https://images.unsplash.com/photo-1525059337994-b939ed724e88?w=600&q=80"
  },
  {
    id: 8,
    name: "Cheesecake New York",
    category: "deserturi",
    price: 35,
    description: "Rețetă originală, bază graham, topping fructe",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80"
  },
  {
    id: 9,
    name: "Tort Nuntă Clasic",
    category: "evenimente",
    price: 850,
    description: "3 etaje, decor personalizat, flori comestibile",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80"
  },
  {
    id: 10,
    name: "Tiramisu Premium",
    category: "deserturi",
    price: 32,
    description: "Mascarpone italian, piscoturi casa, cafea arabica",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80"
  },
  {
    id: 11,
    name: "Tort Caramel Sărat",
    category: "torturi",
    price: 310,
    description: "Blat vanilie, caramel artizanal, fleur de sel",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80"
  },
  {
    id: 12,
    name: "Croissant Ciocolată",
    category: "deserturi",
    price: 18,
    description: "Aluat 72 straturi, ciocolată Valrhona",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80"
  },
  {
    id: 13,
    name: "Macarons Trandafiri",
    category: "macarons",
    price: 14,
    description: "Aromă naturală trandafir, cremă ganache alb",
    image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?w=600&q=80"
  },
  {
    id: 14,
    name: "Tort Botez",
    category: "evenimente",
    price: 450,
    description: "Design personalizat, figurine fondant",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&q=80"
  }
]

export const categories = [
  { id: 'all', name: 'Toate', icon: '✦' },
  { id: 'torturi', name: 'Torturi', icon: '🎂' },
  { id: 'deserturi', name: 'Deserturi', icon: '🍰' },
  { id: 'macarons', name: 'Macarons', icon: '🌸' },
  { id: 'evenimente', name: 'Evenimente', icon: '💒' },
]

export const menuItems = {
  torturi: {
    title: "Torturi Artizanale",
    description: "Creații unice pentru momente speciale",
    items: [
      { name: "Tort Red Velvet", price: "280 lei", desc: "Blat catifela, cremă mascarpone, 8 porții" },
      { name: "Tort Ciocolată Belgiană", price: "320 lei", desc: "Ciocolată 70%, ganache, trufe, 10 porții" },
      { name: "Tort Fructe de Pădure", price: "290 lei", desc: "Mousse vanilie, fructe proaspete, 8 porții" },
      { name: "Tort Caramel Sărat", price: "310 lei", desc: "Caramel artizanal, fleur de sel, 10 porții" },
      { name: "Tort Opera", price: "340 lei", desc: "Stratificat, cafea, ciocolată, migdale, 8 porții" },
    ]
  },
  deserturi: {
    title: "Deserturi Individuale",
    description: "Perfecțiune în fiecare îmbucătură",
    items: [
      { name: "Eclair Paris-Brest", price: "28 lei", desc: "Choux, cremă praline, alune caramelizate" },
      { name: "Eclair Ciocolată", price: "25 lei", desc: "Glazură oglindă, cremă diplomatică" },
      { name: "Cheesecake New York", price: "35 lei", desc: "Mascarpone, bază graham, fructe" },
      { name: "Tiramisu Premium", price: "32 lei", desc: "Mascarpone italian, cafea arabica" },
      { name: "Croissant Ciocolată", price: "18 lei", desc: "72 straturi, ciocolată Valrhona" },
      { name: "Profiterole Trio", price: "30 lei", desc: "Înghețată vanilie, sos ciocolată caldă" },
    ]
  },
  macarons: {
    title: "Macarons Premium",
    description: "Delicatese franțuzești făcute cu măiestrie",
    items: [
      { name: "Set Clasic (6 buc)", price: "72 lei", desc: "Vanilie, ciocolată, zmeură, fistic, caramel, cafea" },
      { name: "Set Champagne (6 buc)", price: "90 lei", desc: "Cremă șampanie, frunze aur comestibil" },
      { name: "Set Trandafiri (6 buc)", price: "84 lei", desc: "Aromă naturală trandafir, ganache alb" },
      { name: "Set Seasonal", price: "78 lei", desc: "Arome de sezon, surpriză" },
      { name: "Cutie Cadou (12 buc)", price: "140 lei", desc: "Ambalaj premium, arome la alegere" },
    ]
  },
  evenimente: {
    title: "Evenimente Speciale",
    description: "Torturi de vis pentru momentele importante",
    items: [
      { name: "Tort Nuntă Clasic", price: "de la 850 lei", desc: "3 etaje, decor personalizat, 50+ porții" },
      { name: "Tort Nuntă Royal", price: "de la 1200 lei", desc: "4-5 etaje, flori naturale, 80+ porții" },
      { name: "Tort Botez", price: "de la 450 lei", desc: "Design personalizat, figurine, 30 porții" },
      { name: "Candy Bar Complet", price: "de la 600 lei", desc: "50 invitați, 8 tipuri deserturi" },
      { name: "Tort Aniversar Premium", price: "de la 350 lei", desc: "Personalizat, 20+ porții" },
    ]
  }
}

export const testimonials = [
  {
    id: 1,
    name: "Maria Ionescu",
    role: "Mireasă fericită",
    text: "Tortul nostru de nuntă a fost absolut spectaculos! Nu doar că arăta ca o operă de artă, dar gustul a depășit toate așteptările. Persida a înțeles perfect viziunea noastră și a creat ceva magic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 2,
    name: "Alexandru Popa",
    role: "Client fidel",
    text: "De când am descoperit Persida's Cake, nu mai pot mânca deserturi din altă parte. Macarons-urile lor sunt cele mai bune din oraș, iar croissantele... divine!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    role: "Event Planner",
    text: "Colaborez cu Persida's Cake pentru toate evenimentele pe care le organizez. Profesionalismul, creativitatea și calitatea sunt întotdeauna la cel mai înalt nivel. Recomand cu toată încrederea!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  },
  {
    id: 4,
    name: "Andrei Marinescu",
    role: "Tatăl miresei",
    text: "Am comandat tortul pentru nunta fiicei mele și a fost momentul culminant al serii. Toți invitații au fost impresionați. Mulțumim pentru această experiență deosebită!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    id: 5,
    name: "Cristina Vasilescu",
    role: "Food Blogger",
    text: "Ca blogger culinar, am încercat nenumărate cofetării, dar Persida's Cake se distinge prin atenția la detalii și ingredientele de calitate superioară. Fiecare desert spune o poveste.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
  },
  {
    id: 6,
    name: "Diana & Mihai",
    role: "Cuplu fericit",
    text: "Tortul pentru botezul fiului nostru a fost mai frumos decât ne-am imaginat. Persida a pus suflet în fiecare detaliu. Cu siguranță vom reveni pentru toate ocaziile speciale!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80"
  }
]

export const services = [
  {
    id: 1,
    title: "Torturi de Nuntă",
    description: "Creăm torturi de nuntă spectaculoase, personalizate pentru ziua ta specială. De la eleganță clasică la design modern, transformăm visurile în realitate dulce.",
    features: ["Consultație gratuită", "Degustare personalizată", "Livrare și montaj inclus", "Design 100% personalizat"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
  },
  {
    id: 2,
    title: "Evenimente Private",
    description: "Petreceri aniversare, botezuri, zile de naștere sau orice celebrare merită deserturi pe măsură. Cream experiențe dulci memorabile.",
    features: ["Candy bar complet", "Deserturi personalizate", "Torturi tematice", "Pachete corporate"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80"
  },
  {
    id: 3,
    title: "Comenzi Personalizate",
    description: "Ai o idee specială? O transformăm în realitate! Deserturi unicat pentru ocazii unice, cu atenție la fiecare detaliu.",
    features: ["Design unic", "Ingrediente premium", "Arome personalizate", "Ambalaj elegant"],
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?w=600&q=80"
  },
  {
    id: 4,
    title: "Livrare Premium",
    description: "Livrăm cu grijă creațiile noastre direct la tine. Ambalaj special pentru păstrarea prospețimii și aspectului impecabil.",
    features: ["Livrare în oraș", "Ambalaj refrigerat", "Tracking în timp real", "Livrare în ziua comenzii"],
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80"
  }
]
