
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";

const offersData = [
  {
    id: 1,
    name: "Set de tazas de cerámica",
    description: "Set de 4 tazas artesanales",
    originalPrice: 39.99,
    offerPrice: 24.99,
    discount: "38%",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    category: "Cocina"
  },
  {
    id: 2,
    name: "Reloj de pared minimalista",
    description: "Diseño escandinavo moderno",
    originalPrice: 45.00,
    offerPrice: 29.95,
    discount: "33%",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    category: "Hogar"
  },
  {
    id: 3,
    name: "Power bank 10000mAh",
    description: "Carga rápida para todos tus dispositivos",
    originalPrice: 49.99,
    offerPrice: 34.95,
    discount: "30%",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    category: "Tecnología"
  },
  {
    id: 4,
    name: "Manta de algodón orgánico",
    description: "Perfecta para todas las estaciones",
    originalPrice: 59.99,
    offerPrice: 39.99,
    discount: "33%",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad",
    category: "Hogar"
  },
  {
    id: 5,
    name: "Auriculares deportivos",
    description: "Resistentes al agua y al sudor",
    originalPrice: 29.99,
    offerPrice: 19.99,
    discount: "33%",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689",
    category: "Tecnología"
  },
  {
    id: 6,
    name: "Set de cuchillos de cocina",
    description: "5 piezas esenciales con soporte",
    originalPrice: 75.00,
    offerPrice: 49.99,
    discount: "33%",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546",
    category: "Cocina"
  }
];

const Offers = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredOffers = activeFilter === "all" 
    ? offersData 
    : offersData.filter(offer => offer.category.toLowerCase() === activeFilter.toLowerCase());

  const categories = Array.from(new Set(offersData.map(offer => offer.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Ofertas Especiales</h1>
          <p className="text-center text-muted-foreground mb-8">
            Descubre nuestras mejores ofertas con descuentos imperdibles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Badge 
            variant={activeFilter === "all" ? "default" : "outline"} 
            className="cursor-pointer text-sm py-1.5 px-3"
            onClick={() => setActiveFilter("all")}
          >
            Todas las ofertas
          </Badge>
          {categories.map(category => (
            <Badge 
              key={category}
              variant={activeFilter === category.toLowerCase() ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5 px-3"
              onClick={() => setActiveFilter(category.toLowerCase())}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map(offer => (
            <div key={offer.id} className="relative">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-red-500 hover:bg-red-600">-{offer.discount}</Badge>
              </div>
              <ProductCard 
                title={offer.name}
                price={offer.offerPrice}
                originalPrice={offer.originalPrice}
                imageUrl={offer.image}
                category={offer.category}
              />
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No hay ofertas disponibles para esta categoría.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
