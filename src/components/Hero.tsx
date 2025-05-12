
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Todo lo que necesitas para tu día a día
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Descubre nuestra selección de productos y accesorios esenciales que harán tu vida más fácil y divertida.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg">Ver Productos</Button>
                <Button variant="outline" size="lg">
                  Ofertas Especiales
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Productos esenciales"
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
