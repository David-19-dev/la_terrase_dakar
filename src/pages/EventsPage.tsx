import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

// Event Type Definition
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  featured?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: "Brunch Musical du Dimanche",
    date: "Tous les dimanches",
    time: "11h00 - 15h00",
    description: "Profitez d'un brunch exceptionnel avec vue sur l'océan, accompagné de performances musicales live par des artistes locaux.",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    featured: true
  },
  {
    id: 2,
    title: "Soirée Jazz & Fruits de Mer",
    date: "Dernier vendredi du mois",
    time: "19h30 - 23h00",
    description: "Une soirée dédiée aux amateurs de jazz et de fruits de mer, avec un menu spécial et des musiciens de talent.",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "Dégustation de Vins",
    date: "Premier jeudi du mois",
    time: "18h30 - 21h00",
    description: "Découvrez une sélection de vins d'exception accompagnés d'amuse-bouches raffinés, en compagnie de notre sommelier.",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    title: "Concert Xiirsa",
    date: "15 juin 2024",
    time: "20h00 - 22h30",
    description: "Une soirée exceptionnelle avec le groupe Xiirsa qui vous fera voyager à travers les rythmes traditionnels sénégalais revisités.",
    image: "https://images.pexels.com/photos/4062561/pexels-photo-4062561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    title: "Soirée Jigueen Ni",
    date: "28 juillet 2024",
    time: "19h30 - 23h00",
    description: "Une célébration de la musique féminine sénégalaise avec le collectif Jigueen Ni. Menu spécial et ambiance festive au rendez-vous.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const EventsPage: React.FC = () => {
  const featuredEvent = events.find(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <>
      <PageHeader 
        title="Nos Événements" 
        backgroundImage="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Vivez des moments inoubliables</h2>
            <p className="section-text mb-16">
              Découvrez nos événements réguliers et spéciaux qui combinent gastronomie, 
              musique et ambiance exceptionnelle en bord de mer.
            </p>
          </AnimatedSection>
          
          {/* Featured Event */}
          {featuredEvent && (
            <AnimatedSection delay={0.3}>
              <div className="mb-20">
                <h3 className="section-subheading text-center">Événement Signature</h3>
                <div className="bg-dark-900 rounded-lg overflow-hidden mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto">
                      <img 
                        src={featuredEvent.image} 
                        alt={featuredEvent.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h4 className="font-serif text-gold-600 text-3xl mb-2">{featuredEvent.title}</h4>
                      <div className="flex items-center text-gold-500 mb-4">
                        <span className="mr-6">{featuredEvent.date}</span>
                        <span>{featuredEvent.time}</span>
                      </div>
                      <p className="text-gray-300 mb-8">{featuredEvent.description}</p>
                      <div>
                        <Link to="/reservation" className="gold-button">
                          RÉSERVER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
          
          {/* Regular Events */}
          <h3 className="section-subheading text-center mb-12">Calendrier des Événements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={0.3 + index * 0.2}>
                <div className="bg-dark-900 rounded-lg overflow-hidden">
                  <div className="h-48">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-gold-600 text-2xl mb-2">{event.title}</h4>
                    <div className="flex items-center text-gold-500 mb-4 text-sm">
                      <span className="mr-4">{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-300 mb-6 text-sm">{event.description}</p>
                    <div>
                      <Link to="/reservation" className="text-gold-500 hover:text-gold-600 transition-colors duration-300">
                        Réserver →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call-to-action section */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading">Événement Privé ?</h2>
            <p className="section-text mb-12">
              Nous organisons également des événements privés pour vos occasions spéciales : 
              anniversaires, mariages, séminaires d'entreprise...
            </p>
            <Link to="/contact" className="gold-button-solid">
              NOUS CONTACTER
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default EventsPage;