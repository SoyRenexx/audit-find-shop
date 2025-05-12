
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Organizador de escritorio",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    isNew: true,
  },
  {
    id: 2,
    name: "Set de tazas premium",
    price: 39.99,
    discountPrice: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
  {
    id: 3,
    name: "Lámpara de mesa moderna",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 4,
    name: "Dispensador de jabón automático",
    price: 19.99,
    discountPrice: 15.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: 5,
    name: "Cojín decorativo",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    isNew: true,
  },
  {
    id: 6,
    name: "Reloj de pared minimalista",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 7,
    name: "Set de utensilios de cocina",
    price: 49.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: 8,
    name: "Espejo de pared moderno",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Productos Destacados</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Descubre nuestra selección de productos más populares para mejorar tu día a día
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
