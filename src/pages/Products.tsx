
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const productData = [
  {
    id: 1,
    name: "Botella térmica premium",
    description: "Mantiene tus bebidas calientes o frías por 24 horas",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    category: "Cocina"
  },
  {
    id: 2,
    name: "Organizador de escritorio",
    description: "Mantén tu espacio de trabajo ordenado",
    price: 19.50,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    category: "Oficina"
  },
  {
    id: 3,
    name: "Auriculares inalámbricos",
    description: "Con cancelación de ruido y 20h de batería",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    category: "Tecnología"
  },
  {
    id: 4,
    name: "Set de cuidado facial",
    description: "Todo lo que necesitas para una rutina completa",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1556228578-8d89a59a3237",
    category: "Belleza"
  },
  {
    id: 5,
    name: "Lámpara de escritorio LED",
    description: "Diseño moderno con luz ajustable",
    price: 34.95,
    image: "https://images.unsplash.com/photo-1534799539114-4d45f36d9bd9",
    category: "Hogar"
  },
  {
    id: 6,
    name: "Cuaderno premium",
    description: "Papel de alta calidad para tus notas diarias",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c",
    category: "Oficina"
  },
  {
    id: 7,
    name: "Mochila resistente al agua",
    description: "Perfecta para el día a día y viajes cortos",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7",
    category: "Accesorios"
  },
  {
    id: 8,
    name: "Kit de herramientas básico",
    description: "15 piezas esenciales para reparaciones en el hogar",
    price: 28.75,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
    category: "Hogar"
  }
];

const Products = () => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = productData.filter(product => 
    filter ? product.category.toLowerCase() === filter.toLowerCase() : true
  ).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return a.name.localeCompare(b.name); // default sort by name
  });

  const categories = Array.from(new Set(productData.map(p => p.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Productos</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por categoría
            </label>
            <select
              id="category-filter"
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
              Ordenar por
            </label>
            <select
              id="sort-by"
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Nombre (A-Z)</option>
              <option value="price-low">Precio (menor a mayor)</option>
              <option value="price-high">Precio (mayor a menor)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.image}
              category={product.category}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No se encontraron productos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
