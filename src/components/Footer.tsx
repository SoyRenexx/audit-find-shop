
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              DiarioShop
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              Tu tienda preferida para encontrar productos y accesorios para el día a día.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Cocina</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Baño</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Dormitorio</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Organización</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Decoración</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Sobre nosotros</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Preguntas frecuentes</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Política de privacidad</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicio al cliente</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Mi cuenta</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Mis pedidos</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Seguimiento de envío</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Devoluciones</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Ayuda</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DiarioShop. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="ApplePay" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
