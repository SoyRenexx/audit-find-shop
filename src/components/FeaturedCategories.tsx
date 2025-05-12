
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Cocina",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Accesorios indispensables para tu cocina"
  },
  {
    id: 2,
    name: "Baño",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Todo para mantener tu baño organizado"
  },
  {
    id: 3,
    name: "Dormitorio",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Haz de tu dormitorio un lugar acogedor"
  },
  {
    id: 4,
    name: "Organización",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Mantén todo en orden con nuestros organizadores"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Categorías Destacadas</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explora nuestras categorías más populares y encuentra los productos que necesitas para tu día a día
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              to="#" 
              key={category.id} 
              className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
