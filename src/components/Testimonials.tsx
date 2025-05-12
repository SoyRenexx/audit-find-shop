
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "María López",
    position: "Cliente Frecuente",
    text: "Los productos son de excelente calidad y duran muchísimo. Siempre encuentro lo que necesito para mi hogar a precios razonables.",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Cliente Nuevo",
    text: "Primera vez comprando aquí y quedé impresionado con la rapidez del envío y la calidad de los productos. Definitivamente volveré.",
    avatar: "https://i.pravatar.cc/150?img=69"
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Cliente VIP",
    text: "Llevo años comprando todos mis accesorios del hogar aquí. El servicio al cliente es excelente y los productos son innovadores.",
    avatar: "https://i.pravatar.cc/150?img=44"
  },
  {
    id: 4,
    name: "Javier Sánchez",
    position: "Cliente Frecuente",
    text: "Los organizadores que compré revolucionaron mi cocina. Todo es de muy buena calidad y el diseño es moderno y funcional.",
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Lo que dicen nuestros clientes</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Miles de personas han mejorado su día a día con nuestros productos
        </p>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">{testimonial.text}</p>
                      <div className="flex items-center mt-auto">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
