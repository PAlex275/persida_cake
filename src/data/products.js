// Local images from public folder
const images = [
  '/images/014B5A3B-68DF-4743-8D6D-0E1453294562.JPG',
  '/images/016F7D94-0B39-4F8B-B2B6-8C82BB1F3599.JPG',
  '/images/1601F8F8-9936-495F-9501-52FEC341407E.JPG',
  '/images/1A16345F-6A16-4EFF-95E7-5F2A96501D94.JPG',
  '/images/1B27DEEA-3A61-4CB1-A4AE-7D09AE5CB9AF.JPG',
  '/images/1EB5476C-35CE-4E51-A4F5-37AD99D7090F.JPG',
  '/images/20863B51-F576-4BA4-B935-7CB0E074209C.JPG',
  '/images/20922F8B-55CA-4B23-9B29-93F90981090E.JPG',
  '/images/2C3A46DD-1975-4289-8CB4-7878426D53F6.JPG',
  '/images/2D1A9D77-0D59-4526-B1F0-D606ED8F0FF6.JPG',
  '/images/31D40C21-8498-407D-BE18-E8E748BCA4F6.JPG',
  '/images/3ABE5558-B58D-4408-9FB8-DA5E88BBE55B.JPG',
  '/images/4300F420-38D3-4065-A4E6-FEE8846D20F2.JPG',
  '/images/531563B9-C85B-4FD8-99DB-531B9393FB3D.JPG',
  '/images/5459D3E4-4E77-4172-812C-09AFA9CCA6D6.JPG',
  '/images/616FEE09-ACC8-4539-A7B0-F8F7E40205B1.JPG',
  '/images/70F75940-43EE-48D4-A648-D0D10ADEB927.JPG',
  '/images/735FE0BB-6B39-4D26-AF3D-4E535D4676E4.JPG',
  '/images/76233A8B-0053-4B3C-80DB-A2B0124AE7F8.JPG',
  '/images/79E44754-BEB6-494B-A74D-CEB7A4E72BCC.JPG',
  '/images/8134040D-AC59-478D-8500-36F88728676B.JPG',
  '/images/872BFE00-3FA3-4EA5-9D80-3403B93330B8.JPG',
  '/images/8B926798-400C-4F9D-8217-BF341AB006BB.JPG',
  '/images/95565082-CC27-485C-B426-87D861851BA5.JPG',
  '/images/99804491-F10C-4298-AB39-3CE809C2F995.JPG',
  '/images/A2BC99B4-1F5C-47C3-B4AE-D0370159CB69.JPG',
  '/images/A49042D4-C979-46D3-8E5E-FC5BABC99DF7.JPG',
  '/images/AAF00902-83E1-48ED-9160-468B0D974A24.JPG',
  '/images/AB56D028-1ACD-4607-B3D2-590AA4C3415D.JPG',
  '/images/AC9D2967-BA8A-4CE4-9D6E-875115FA3DE2.JPG',
  '/images/B24546AB-1861-4869-A8E0-DDF874D67415.JPG',
  '/images/B8F7B8B1-4C34-4077-BB7E-32911EED0389.JPG',
  '/images/B9C2A4C1-F2A1-424C-8F56-42CD83CF73E2.JPG',
  '/images/C29E45C0-0DA0-48BA-870D-EC98EEF4AF50.JPG',
  '/images/C40E19B0-1075-4B38-BD2D-44E2E53EDFA6.JPG',
  '/images/D0A57A2C-7503-41B5-AAA7-1608FC128ED1.JPG',
  '/images/D0F561DB-4061-4B0B-9A8C-9B27260190DA.JPG',
  '/images/D93E8032-26B3-45F1-92CB-4EDAB63CDA5A.JPG',
  '/images/E3B79D1B-7A44-4A62-B651-BF2FC9E056C8.JPG',
  '/images/F03BF9CD-387A-4331-B6A0-DF7CBA7EDA5A.JPG',
  '/images/F461741A-17DF-4A00-B8E6-430F2B427482.JPG',
]

export const products = [
  {
    id: 1,
    name: "Tort Red Velvet",
    category: "torturi",
    price: 280,
    description: "Blat catifela roșie, cremă mascarpone, decor elegant",
    image: images[0]
  },
  {
    id: 2,
    name: "Tort Ciocolată Belgiană",
    category: "torturi",
    price: 320,
    description: "Trei straturi de ciocolată, ganache premium, trufe artizanale",
    image: images[1]
  },
  {
    id: 3,
    name: "Tort Fructe de Pădure",
    category: "torturi",
    price: 290,
    description: "Mousse vanilie, fructe proaspete, glazură oglindă",
    image: images[2]
  },
  {
    id: 4,
    name: "Macarons Asortate",
    category: "macarons",
    price: 12,
    description: "Set 6 bucăți, arome la alegere",
    image: images[3]
  },
  {
    id: 5,
    name: "Macarons Champagne",
    category: "macarons",
    price: 15,
    description: "Cremă cu șampanie, frunze de aur comestibil",
    image: images[4]
  },
  {
    id: 6,
    name: "Eclair Paris-Brest",
    category: "deserturi",
    price: 28,
    description: "Choux praline alune, cremă mousseline",
    image: images[5]
  },
  {
    id: 7,
    name: "Eclair Ciocolată",
    category: "deserturi",
    price: 25,
    description: "Glazură oglindă, cremă diplomatică cacao",
    image: images[6]
  },
  {
    id: 8,
    name: "Cheesecake New York",
    category: "deserturi",
    price: 35,
    description: "Rețetă originală, bază graham, topping fructe",
    image: images[7]
  },
  {
    id: 9,
    name: "Tort Nuntă Clasic",
    category: "candy-bar",
    price: 850,
    description: "3 etaje, decor personalizat, flori comestibile",
    image: images[8]
  },
  {
    id: 10,
    name: "Tiramisu Premium",
    category: "deserturi",
    price: 32,
    description: "Mascarpone italian, piscoturi casa, cafea arabica",
    image: images[9]
  },
  {
    id: 11,
    name: "Tort Caramel Sărat",
    category: "torturi",
    price: 310,
    description: "Blat vanilie, caramel artizanal, fleur de sel",
    image: images[10]
  },
  {
    id: 12,
    name: "Croissant Ciocolată",
    category: "deserturi",
    price: 18,
    description: "Aluat 72 straturi, ciocolată Valrhona",
    image: images[11]
  },
  {
    id: 13,
    name: "Macarons Trandafiri",
    category: "macarons",
    price: 14,
    description: "Aromă naturală trandafir, cremă ganache alb",
    image: images[12]
  },
  {
    id: 14,
    name: "Tort Botez",
    category: "candy-bar",
    price: 450,
    description: "Design personalizat, figurine fondant",
    image: images[13]
  },
  {
    id: 15,
    name: "Tort Opera",
    category: "torturi",
    price: 340,
    description: "Stratificat, cafea, ciocolată, migdale",
    image: images[14]
  },
  {
    id: 16,
    name: "Profiterole Trio",
    category: "deserturi",
    price: 30,
    description: "Înghețată vanilie, sos ciocolată caldă",
    image: images[15]
  },
  {
    id: 17,
    name: "Macarons Fistic",
    category: "macarons",
    price: 14,
    description: "Cremă fistic sicilian, aromă naturală",
    image: images[16]
  },
  {
    id: 18,
    name: "Tort Aniversar Premium",
    category: "candy-bar",
    price: 350,
    description: "Personalizat, decorațiuni speciale",
    image: images[17]
  },
  {
    id: 19,
    name: "Mousse Ciocolată",
    category: "deserturi",
    price: 28,
    description: "Ciocolată 70%, textură cremoasă",
    image: images[18]
  },
  {
    id: 20,
    name: "Tort Nuntă Royal",
    category: "candy-bar",
    price: 1200,
    description: "4-5 etaje, flori naturale, 80+ porții",
    image: images[19]
  },
  {
    id: 21,
    name: "Tarta Fructe",
    category: "deserturi",
    price: 35,
    description: "Cremă patisieră, fructe de sezon proaspete",
    image: images[20]
  },
  {
    id: 22,
    name: "Macarons Lavandă",
    category: "macarons",
    price: 15,
    description: "Aromă delicată de lavandă, cremă mascarpone",
    image: images[21]
  },
  {
    id: 23,
    name: "Tort Mousse Mango",
    category: "torturi",
    price: 300,
    description: "Mousse mango exotic, glazură oglindă",
    image: images[22]
  },
  {
    id: 24,
    name: "Candy Bar Complet",
    category: "candy-bar",
    price: 600,
    description: "50 invitați, 8 tipuri deserturi",
    image: images[23]
  },
  {
    id: 25,
    name: "Cremșnit Premium",
    category: "deserturi",
    price: 25,
    description: "Cremă vanilie Bourbon, foietaj crocant",
    image: images[24]
  },
  {
    id: 26,
    name: "Tort Lemon Curd",
    category: "torturi",
    price: 280,
    description: "Cremă de lămâie, bezea elvețiană",
    image: images[25]
  },
  {
    id: 27,
    name: "Macarons Café",
    category: "macarons",
    price: 13,
    description: "Aromă cafea arabica, cremă mocha",
    image: images[26]
  },
  {
    id: 28,
    name: "Panna Cotta Berries",
    category: "deserturi",
    price: 28,
    description: "Cremă vanilie, coulis fructe de pădure",
    image: images[27]
  },
  {
    id: 29,
    name: "Tort Migdale Fără Gluten",
    category: "fara-gluten",
    price: 320,
    description: "Făină de migdale, cremă mascarpone, fără zahăr adăugat",
    image: images[28]
  },
  {
    id: 30,
    name: "Cheesecake Keto",
    category: "fara-gluten",
    price: 45,
    description: "Fără zahăr, bază de nuci, îndulcit cu eritritol",
    image: images[29]
  },
  {
    id: 31,
    name: "Brownie Avocado",
    category: "fara-gluten",
    price: 25,
    description: "Fără gluten, fără zahăr, cacao premium",
    image: images[30]
  },
  {
    id: 32,
    name: "Mousse Cocos Sugar-Free",
    category: "fara-gluten",
    price: 30,
    description: "Lapte de cocos, îndulcitor natural, fără gluten",
    image: images[31]
  }
]

export const categories = [
  { id: 'all', name: 'Toate', icon: '✦' },
  { id: 'torturi', name: 'Torturi', icon: '🎂' },
  { id: 'deserturi', name: 'Deserturi', icon: '🍰' },
  { id: 'macarons', name: 'Macarons', icon: '🌸' },
  { id: 'candy-bar', name: 'Candy Bar', icon: '🍭' },
  { id: 'fara-gluten', name: 'Fără Gluten/Zahăr', icon: '🌿' },
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
  "candy-bar": {
    title: "Candy Bar",
    description: "Deserturi asortate pentru evenimente speciale",
    items: [
      { name: "Candy Bar Basic", price: "de la 400 lei", desc: "30 invitați, 5 tipuri deserturi" },
      { name: "Candy Bar Standard", price: "de la 600 lei", desc: "50 invitați, 8 tipuri deserturi" },
      { name: "Candy Bar Premium", price: "de la 900 lei", desc: "80 invitați, 12 tipuri deserturi" },
      { name: "Candy Bar Deluxe", price: "de la 1200 lei", desc: "100+ invitați, 15 tipuri deserturi" },
      { name: "Candy Bar Personalizat", price: "la cerere", desc: "Configurație la alegere" },
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
    image: images[29]
  },
  {
    id: 2,
    title: "Evenimente Private",
    description: "Petreceri aniversare, botezuri, zile de naștere sau orice celebrare merită deserturi pe măsură. Cream experiențe dulci memorabile.",
    features: ["Candy bar complet", "Deserturi personalizate", "Torturi tematice", "Pachete corporate"],
    image: images[30]
  },
  {
    id: 3,
    title: "Comenzi Personalizate",
    description: "Ai o idee specială? O transformăm în realitate! Deserturi unicat pentru ocazii unice, cu atenție la fiecare detaliu.",
    features: ["Design unic", "Ingrediente premium", "Arome personalizate", "Ambalaj elegant"],
    image: images[31]
  },
  {
    id: 4,
    title: "Livrare Premium",
    description: "Livrăm cu grijă creațiile noastre direct la tine. Ambalaj special pentru păstrarea prospețimii și aspectului impecabil.",
    features: ["Livrare în oraș", "Ambalaj refrigerat", "Tracking în timp real", "Livrare în ziua comenzii"],
    image: images[32]
  }
]
