
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

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
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, discountPrice, isNew } = product;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary py-1 px-2 text-xs text-white rounded-md">
            Nuevo
          </span>
        )}
        {discountPrice && (
          <span className="absolute top-2 right-2 bg-red-500 py-1 px-2 text-xs text-white rounded-md">
            Oferta
          </span>
        )}
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-medium text-base mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center">
          {discountPrice ? (
            <>
              <p className="font-semibold text-primary">${discountPrice.toFixed(2)}</p>
              <p className="text-muted-foreground text-sm line-through ml-2">${price.toFixed(2)}</p>
            </>
          ) : (
            <p className="font-semibold text-primary">${price.toFixed(2)}</p>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
