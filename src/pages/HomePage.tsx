import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
          backgroundAttachment: "fixed"
        }}></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-gold-600 mb-4">La Terrasse</h1>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-gold-500 tracking-widest mb-8">DE DAKAR</h2>
          </motion.div>
          
          <motion.p 
            className="text-white text-lg md:text-xl max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Un voyage culinaire en bord de mer depuis 1997
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link to="/reservation" className="gold-button-solid">
              RÉSERVER UNE TABLE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Bienvenue à La Terrasse</h2>
            <p className="section-text mb-12">
              Situé au cœur du complexe Terrou-Bi à Dakar, notre restaurant vous offre une expérience 
              gastronomique exceptionnelle face à l'océan. La Terrasse de Dakar combine une cuisine 
              raffinée, des ingrédients de première qualité et un cadre idyllique pour créer des 
              moments inoubliables.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <h3 className="font-serif text-gold-600 text-2xl mb-4">Cuisine Raffinée</h3>
                <p className="text-gray-300">
                  Des plats d'exception préparés par notre chef et son équipe passionnée.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center">
                <h3 className="font-serif text-gold-600 text-2xl mb-4">Vue Panoramique</h3>
                <p className="text-gray-300">
                  Une terrasse offrant une vue imprenable sur l'océan Atlantique.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="text-center">
                <h3 className="font-serif text-gold-600 text-2xl mb-4">Produits Locaux</h3>
                <p className="text-gray-300">
                  Des ingrédients frais et locaux, sélectionnés avec soin par nos équipes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.9}>
              <div className="text-center">
                <h3 className="font-serif text-gold-600 text-2xl mb-4">Brunchs Musicaux</h3>
                <p className="text-gray-300">
                  Des dimanches animés par des musiciens talentueux dans un cadre idyllique.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Notre Menu</h2>
            <p className="section-text mb-12">
              Découvrez notre sélection raffinée de plats, inspirés par les saveurs locales 
              et les produits de saison.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <AnimatedSection delay={0.3}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Entrées" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="bg-dark-800 p-6">
                  <h3 className="font-serif text-gold-600 text-2xl mb-2">Entrées</h3>
                  <p className="text-gray-300 mb-4">
                    Des entrées légères et savoureuses pour éveiller vos papilles.
                  </p>
                  <Link to="/menu" className="text-gold-500 hover:text-gold-600 transition-colors duration-300">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Plats" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="bg-dark-800 p-6">
                  <h3 className="font-serif text-gold-600 text-2xl mb-2">Plats</h3>
                  <p className="text-gray-300 mb-4">
                    Des créations raffinées qui mettent en valeur les produits de la mer et de la terre.
                  </p>
                  <Link to="/menu" className="text-gold-500 hover:text-gold-600 transition-colors duration-300">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Desserts" 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="bg-dark-800 p-6">
                  <h3 className="font-serif text-gold-600 text-2xl mb-2">Desserts</h3>
                  <p className="text-gray-300 mb-4">
                    Des douceurs exquises pour conclure votre expérience sur une note sucrée.
                  </p>
                  <Link to="/menu" className="text-gold-500 hover:text-gold-600 transition-colors duration-300">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-16">
            <AnimatedSection delay={0.9}>
              <Link to="/menu" className="gold-button">
                VOIR TOUT LE MENU
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-cover bg-center" style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
      }}>
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Événements</h2>
            <p className="section-text mb-12">
              Participez à nos soirées et brunchs face à l'océan, animés par des musiciens talentueux.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-dark-800/80 p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="font-serif text-gold-600 text-3xl mb-6 text-center">Brunch Musical du Dimanche</h3>
              <p className="text-gray-200 mb-6 text-center">
                Tous les dimanches de 11h à 15h, profitez d'un brunch exceptionnel accompagné 
                de performances musicales live par des artistes locaux talentueux.
              </p>
              <div className="text-center">
                <Link to="/evenements" className="gold-button">
                  TOUS NOS ÉVÉNEMENTS
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Ce que disent nos clients</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.3}>
              <div className="bg-dark-800 p-8 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic text-center mb-6">
                  "Une expérience culinaire inoubliable avec une vue à couper le souffle. 
                  Le service était impeccable et les plats absolument délicieux."
                </p>
                <p className="text-gold-600 font-serif text-center">— Marie D.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-dark-800 p-8 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic text-center mb-6">
                  "Le brunch musical du dimanche est devenu notre tradition familiale. 
                  L'ambiance, la nourriture, la musique, tout est parfait !"
                </p>
                <p className="text-gold-600 font-serif text-center">— Jean-Paul M.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-dark-800 p-8 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic text-center mb-6">
                  "Un cadre élégant, une cuisine raffinée et un service attentionné. 
                  La Terrasse de Dakar est sans conteste la meilleure table de la ville."
                </p>
                <p className="text-gold-600 font-serif text-center">— Sophie L.</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <AnimatedSection delay={0.9}>
              <Link to="/temoignages" className="gold-button">
                TOUS LES TÉMOIGNAGES
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="section-heading">Réservez votre table</h2>
            <p className="section-text mb-12">
              Pour vivre une expérience gastronomique exceptionnelle, réservez dès maintenant.
            </p>
            <Link to="/reservation" className="gold-button-solid">
              RÉSERVER MAINTENANT
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;