import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="À Propos" 
        backgroundImage="https://images.pexels.com/photos/5490385/pexels-photo-5490385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Notre Histoire</h2>
            <p className="section-text mb-16">
              Fondé en 1997, La Terrasse de Dakar est née d'une passion pour la gastronomie 
              et d'un amour profond pour le cadre exceptionnel qu'offre le bord de mer de Dakar.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.3}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5490376/pexels-photo-5490376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Notre restaurant" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div>
                <h3 className="font-serif text-gold-600 text-3xl mb-6">Un lieu d'exception</h3>
                <p className="text-gray-300 mb-6">
                  Niché au sein du complexe Terrou-Bi, La Terrasse de Dakar vous accueille dans un cadre idyllique 
                  face à l'océan Atlantique. Notre restaurant allie élégance, raffinement et atmosphère détendue 
                  pour vous offrir une expérience unique.
                </p>
                <p className="text-gray-300">
                  Depuis plus de 25 ans, nous nous efforçons de créer des moments inoubliables pour nos clients, 
                  en proposant une cuisine d'exception, un service attentionné et une ambiance chaleureuse.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.3}>
              <div className="order-2 lg:order-1">
                <h3 className="font-serif text-gold-600 text-3xl mb-6">Notre Philosophie</h3>
                <p className="text-gray-300 mb-6">
                  Chez La Terrasse de Dakar, nous croyons que la gastronomie est une forme d'art qui doit éveiller tous les sens. 
                  Notre cuisine est fondée sur trois piliers essentiels :
                </p>
                <ul className="text-gray-300 space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    <span>La <strong className="text-gold-500">fraîcheur</strong> des produits, sélectionnés chaque jour avec soin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    <span>Le <strong className="text-gold-500">savoir-faire</strong> de notre équipe passionnée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    <span>L'<strong className="text-gold-500">innovation</strong> culinaire, tout en respectant les traditions</span>
                  </li>
                </ul>
                <p className="text-gray-300">
                  Nous mettons un point d'honneur à soutenir les producteurs locaux et à mettre en valeur 
                  les ingrédients du terroir sénégalais.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Notre équipe" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Notre Équipe</h2>
            <p className="section-text mb-16">
              Derrière chaque plat se cache une équipe passionnée et dévouée, qui travaille avec cœur 
              pour vous offrir une expérience inoubliable.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                  <img 
                    src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Chef Amadou Diop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-gold-600 text-2xl mb-2">Amadou Diop</h3>
                <p className="text-gold-500 mb-4">Chef Exécutif</p>
                <p className="text-gray-300">
                  Fort de 20 ans d'expérience dans les plus grands restaurants du monde, 
                  le Chef Amadou Diop apporte sa créativité et sa passion à La Terrasse de Dakar.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Marie Faye" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-gold-600 text-2xl mb-2">Marie Faye</h3>
                <p className="text-gold-500 mb-4">Directrice</p>
                <p className="text-gray-300">
                  Avec son sens de l'accueil et son attention aux détails, Marie veille à ce que 
                  chaque client vive une expérience parfaite de l'entrée au dessert.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.7}>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                  <img 
                    src="https://images.pexels.com/photos/5490397/pexels-photo-5490397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Omar Sall" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-gold-600 text-2xl mb-2">Omar Sall</h3>
                <p className="text-gold-500 mb-4">Sommelier</p>
                <p className="text-gray-300">
                  Passionné par l'art du vin, Omar saura vous guider dans le choix du vin parfait 
                  pour accompagner votre repas et sublimer vos plats.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;