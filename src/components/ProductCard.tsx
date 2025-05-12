
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discountPrice?: number;
  isNew?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product?: Product;
  // Add new prop types that match how the component is being used
  title?: string;
  price?: number;
  originalPrice?: number;
  imageUrl?: string;
  category?: string;
}

const ProductCard = ({ product, title, price, originalPrice, imageUrl, category }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  // If product object is provided, use its properties, otherwise use the individual props
  const displayName = product?.name || title;
  const displayPrice = product?.price || price;
  const displayImage = product?.image || imageUrl;
  const displayDiscountPrice = product?.discountPrice;
  const isNewProduct = product?.isNew;
  const hasDiscount = displayDiscountPrice || originalPrice;

  // Crear un objeto de producto unificado para añadir al carrito
  const handleAddToCart = () => {
    const productToAdd: Product = {
      id: product?.id || Math.random(), // Usar ID existente o generar uno
      name: displayName || "",
      price: displayPrice || 0,
      image: displayImage || "",
      discountPrice: displayDiscountPrice || originalPrice,
      isNew: isNewProduct
    };
    
    addToCart(productToAdd);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="overflow-hidden relative">
        <img
          src={displayImage}
          alt={displayName}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        {isNewProduct && (
          <span className="absolute top-2 left-2 bg-primary py-1 px-2 text-xs text-white rounded-md">
            Nuevo
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-2 right-2 bg-red-500 py-1 px-2 text-xs text-white rounded-md">
            Oferta
          </span>
        )}
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-medium text-base mb-1 line-clamp-1">{displayName}</h3>
        <div className="flex items-center">
          {hasDiscount ? (
            <>
              <p className="font-semibold text-primary">${(displayDiscountPrice || originalPrice).toFixed(2)}</p>
              <p className="text-muted-foreground text-sm line-through ml-2">${displayPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="font-semibold text-primary">${displayPrice.toFixed(2)}</p>
          )}
        </div>
        {category && (
          <p className="text-xs text-muted-foreground mt-1">{category}</p>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full" size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
