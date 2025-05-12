
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Verificar estado de login al cargar componente
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redireccionar a home
  };

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
          <Link to="/productos" className="hover:text-primary transition-colors">
            Productos
          </Link>
          <Link to="/categorias" className="hover:text-primary transition-colors">
            Categorías
          </Link>
          <Link to="/ofertas" className="hover:text-primary transition-colors">
            Ofertas
          </Link>
          <Link to="/contacto" className="hover:text-primary transition-colors">
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
          
          {isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Iniciar sesión
              </Button>
            </Link>
          )}
          
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
                <Link to="/productos" className="text-lg hover:text-primary transition-colors">
                  Productos
                </Link>
                <Link to="/categorias" className="text-lg hover:text-primary transition-colors">
                  Categorías
                </Link>
                <Link to="/ofertas" className="text-lg hover:text-primary transition-colors">
                  Ofertas
                </Link>
                <Link to="/contacto" className="text-lg hover:text-primary transition-colors">
                  Contacto
                </Link>
                <hr className="my-2" />
                {isLoggedIn ? (
                  <Button variant="outline" onClick={handleLogout} className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                  </Button>
                ) : (
                  <Link to="/login" className="text-lg hover:text-primary transition-colors">
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
