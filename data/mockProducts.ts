import Product from "../interfaces/Product";

export const MOCK_CATEGORIES = ["Beers", "Soda & Juices", "Wines", "Spirits", "Snacks"];

// ✅ Dedicated image pools per category
const beerImages: string[] = [
  "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1695285406073-0424d330c075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" ];

const sodaJuiceImages: string[] = [
   "https://images.unsplash.com/photo-1629186235045-80d4147d90dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
   "https://plus.unsplash.com/premium_photo-1681487652640-9257693221d5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
];

const wineImages: string[] = [
  "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

const spiritImages: string[] = [
  "https://images.unsplash.com/photo-1566927599204-d5d3142481aa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670333182902-067f29c20107?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
];

const snackImages: string[] = [
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1788519037004-a7e003f0037d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
];

// Helper to pick random images from the targeted pool
function getRandomImages(source: string[], count: number): string[] {
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Raw configurations to loop over
const baseProductsConfig = [
  { id: "1", title: "Premium Lager Beer 6-Pack", price: 12.99, catId: 1, catTitle: "Beers", pool: beerImages },
  { id: "2", title: "Craft IPA Can", price: 3.49, catId: 1, catTitle: "Beers", pool: beerImages },
  { id: "3", title: "Belgian Witbier Bottle", price: 4.25, catId: 1, catTitle: "Beers", pool: beerImages },
  { id: "4", title: "Classic Cola 2L Bottle", price: 2.79, catId: 2, catTitle: "Soda & Juices", pool: sodaJuiceImages },
  { id: "5", title: "Fresh Orange Juice 1L", price: 4.19, catId: 2, catTitle: "Soda & Juices", pool: sodaJuiceImages },
  { id: "6", title: "Sparkling Lemon Lime Can", price: 1.25, catId: 2, catTitle: "Soda & Juices", pool: sodaJuiceImages },
  { id: "7", title: "Cabernet Sauvignon Red Wine", price: 18.99, catId: 3, catTitle: "Wines", pool: wineImages },
  { id: "8", title: "Chardonnay White Wine", price: 15.49, catId: 3, catTitle: "Wines", pool: wineImages },
  { id: "9", title: "Premium Vodka 750ml", price: 24.99, catId: 4, catTitle: "Spirits", pool: spiritImages },
  { id: "10", title: "Kentucky Bourbon Whiskey", price: 29.99, catId: 4, catTitle: "Spirits", pool: spiritImages },
  { id: "11", title: "Crispy Potato Chips BBQ", price: 1.99, catId: 5, catTitle: "Snacks", pool: snackImages },
  { id: "12", title: "Roasted Salted Peanuts Bag", price: 2.49, catId: 5, catTitle: "Snacks", pool: snackImages }
];

export const MOCK_PRODUCTS: Product[] = baseProductsConfig.map((prod) => {
  // Pulls random image variations from the specific category pool
  const chosenImages = getRandomImages(prod.pool, 1);

  return {
    id: prod.id,
    title: prod.title,
    price: prod.price,
    quantity: 0,
    category: { 
      id: prod.catId, 
      title: prod.catTitle 
    },
    image: chosenImages[0] // ✅ Dynamic direct string image assignment from designated pool
  };
});
