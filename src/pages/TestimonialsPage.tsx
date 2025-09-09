import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Diop",
    role: "Cliente régulière",
    content: "Une expérience culinaire inoubliable avec une vue à couper le souffle. Le service était impeccable et les plats absolument délicieux. La terrasse offre un cadre magique au coucher du soleil.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    date: "Mars 2024"
  },
  {
    id: 2,
    name: "Jean-Paul Martin",
    role: "Voyageur d'affaires",
    content: "Le brunch musical du dimanche est devenu notre tradition familiale. L'ambiance, la nourriture, la musique, tout est parfait ! Un véritable havre de paix en plein cœur de Dakar.",
    rating: 5,
    date: "Février 2024"
  },
  {
    id: 3,
    name: "Sophie Lambert",
    content: "Un cadre élégant, une cuisine raffinée et un service attentionné. La Terrasse de Dakar est sans conteste la meilleure table de la ville. Les fruits de mer sont d'une fraîcheur exceptionnelle.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    date: "Janvier 2024"
  },
  {
    id: 4,
    name: "Amadou Sall",
    role: "Chef d'entreprise",
    content: "J'organise régulièrement des dîners d'affaires à La Terrasse et je ne suis jamais déçu. L'équipe est professionnelle, la cuisine excellente et le cadre parfait pour des discussions importantes.",
    rating: 5,
    date: "Décembre 2023"
  },
  {
    id: 5,
    name: "Claire Dubois",
    content: "La vue sur l'océan est magnifique, surtout au coucher du soleil. Les cocktails sont créatifs et les plats sont présentés avec beaucoup de finesse. Une adresse incontournable à Dakar.",
    rating: 5,
    image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    date: "Novembre 2023"
  },
  {
    id: 6,
    name: "Omar Ndiaye",
    role: "Gastronome",
    content: "La fusion entre cuisine française et produits locaux est parfaitement maîtrisée. Le chef réalise des merveilles et le sommelier propose des accords mets-vins très pertinents.",
    rating: 5,
    date: "Octobre 2023"
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Témoignages" 
        backgroundImage="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Ce que disent nos clients</h2>
            <p className="section-text mb-16">
              Découvrez les expériences de nos clients qui ont partagé leurs moments passés 
              à La Terrasse de Dakar.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={0.2 * index}>
                <div className="bg-dark-900 p-8 rounded-lg h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center">
                          <span className="text-dark-900 font-serif text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className="font-serif text-gold-600">{testimonial.name}</h3>
                        {testimonial.role && (
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{testimonial.date}</span>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold-500">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic flex-grow">"{testimonial.content}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call-to-action Section */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading">Vivez votre propre expérience</h2>
            <p className="section-text mb-12">
              Rejoignez nos clients satisfaits et créez vos propres souvenirs à La Terrasse de Dakar.
            </p>
            <a href="/reservation" className="gold-button-solid">
              RÉSERVER UNE TABLE
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;