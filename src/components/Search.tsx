
import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Datos de todos los productos (combinamos los de Products y Offers)
// En una aplicación real, esto vendría de una API o contexto
const allProducts = [
  // Productos regulares
  {
    id: 1,
    name: "Botella térmica premium",
    price: 24.99,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
  },
  {
    id: 2,
    name: "Organizador de escritorio",
    price: 19.50,
    category: "Oficina",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
  {
    id: 3,
    name: "Auriculares inalámbricos",
    price: 59.99,
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
  },
  {
    id: 4,
    name: "Set de cuidado facial",
    price: 45.00,
    category: "Belleza",
    image: "https://images.unsplash.com/photo-1556228578-8d89a59a3237",
  },
  // Ofertas
  {
    id: 101,
    name: "Set de tazas de cerámica",
    price: 24.99, 
    originalPrice: 39.99,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    isOffer: true,
  },
  {
    id: 102,
    name: "Reloj de pared minimalista",
    price: 29.95,
    originalPrice: 45.00,
    category: "Hogar",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    isOffer: true,
  },
  {
    id: 103,
    name: "Power bank 10000mAh",
    price: 34.95,
    originalPrice: 49.99,
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    isOffer: true,
  },
];

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (productId: number) => {
    setOpen(false);
    // En una aplicación real, aquí navegaríamos a la página de detalle del producto
    // Por ahora, simplemente vamos a la página de productos o ofertas según el producto
    const product = allProducts.find(p => p.id === productId);
    if (product?.isOffer) {
      navigate("/ofertas");
    } else {
      navigate("/productos");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Command className="rounded-lg">
          <div className="flex items-center border-b px-3">
            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput placeholder="Buscar productos..." className="flex-1 focus:outline-none" />
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup heading="Productos">
              {allProducts.map((product) => (
                <CommandItem
                  key={product.id}
                  value={`${product.id}-${product.name}`}
                  onSelect={() => handleSelect(product.id)}
                  className="flex items-center py-2"
                >
                  <div className="mr-2 h-10 w-10 rounded overflow-hidden border">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="truncate">{product.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{product.category}</span>
                      <span className="mx-1">•</span>
                      <div className="flex items-center">
                        {product.originalPrice ? (
                          <>
                            <span className="text-primary">${product.price.toFixed(2)}</span>
                            <span className="ml-1 text-xs line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span>${product.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
