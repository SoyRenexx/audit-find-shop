
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 md:px-8 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          DiarioShop
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Productos
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Categorías
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Ofertas
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Contacto
          </Link>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link to="#" className="text-lg hover:text-primary transition-colors">
                  Productos
                </Link>
                <Link to="#" className="text-lg hover:text-primary transition-colors">
                  Categorías
                </Link>
                <Link to="#" className="text-lg hover:text-primary transition-colors">
                  Ofertas
                </Link>
                <Link to="#" className="text-lg hover:text-primary transition-colors">
                  Contacto
                </Link>
                <hr className="my-2" />
                <Link to="#" className="text-lg hover:text-primary transition-colors">
                  Mi Cuenta
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
