
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const categoriesData = [
  {
    id: "cocina",
    name: "Cocina",
    description: "Utensilios, gadgets y accesorios para tu cocina",
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
    productCount: 24
  },
  {
    id: "oficina",
    name: "Oficina",
    description: "Todo lo que necesitas para tu espacio de trabajo",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    productCount: 18
  },
  {
    id: "tecnologia",
    name: "Tecnología",
    description: "Gadgets y accesorios electrónicos",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    productCount: 32
  },
  {
    id: "belleza",
    name: "Belleza",
    description: "Productos para tu rutina de cuidado personal",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da",
    productCount: 27
  },
  {
    id: "hogar",
    name: "Hogar",
    description: "Accesorios y decoración para tu casa",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    productCount: 41
  },
  {
    id: "accesorios",
    name: "Accesorios",
    description: "Complementos para tu día a día",
    image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b",
    productCount: 15
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nuestras Categorías</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <Link 
              to={`/products?category=${category.id}`} 
              key={category.id}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 group-hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{category.productCount} productos</span>
                    <span className="text-primary font-medium group-hover:underline">Ver productos</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
