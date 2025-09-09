import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const MenuPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Notre Menu" 
        backgroundImage="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Découvrez nos saveurs</h2>
            <p className="section-text mb-16">
              Notre chef s'inspire des produits frais de saison et des saveurs locales pour créer 
              une cuisine raffinée qui éveillera vos sens.
            </p>
          </AnimatedSection>
          
          {/* Menu Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="section-subheading text-center lg:text-left">Entrées</h3>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Carpaccio de Saint-Jacques</h4>
                    <span className="menu-price text-lg">2800 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Fines tranches de Saint-Jacques, huile d'olive citronnée, copeaux de parmesan
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Salade de poulpe</h4>
                    <span className="menu-price text-lg">2500 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Poulpe grillé, mesclun de salade, tomates confites, vinaigrette aux agrumes
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Foie gras maison</h4>
                    <span className="menu-price text-lg">3200 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Terrine de foie gras mi-cuit, chutney de mangue, pain brioché toasté
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Tartare d'avocat aux crevettes</h4>
                    <span className="menu-price text-lg">2300 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Avocat, crevettes roses, pamplemousse, sauce cocktail légère
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="section-subheading text-center lg:text-left">Plats Principaux</h3>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Filet de thiof grillé</h4>
                    <span className="menu-price text-lg">4500 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Thiof frais du jour grillé, purée de patate douce, légumes de saison
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Filet de bœuf</h4>
                    <span className="menu-price text-lg">5200 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Filet de bœuf grillé, sauce au poivre vert, gratin dauphinois
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Risotto aux fruits de mer</h4>
                    <span className="menu-price text-lg">4800 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Risotto crémeux, crevettes, calamars, moules, bisque de homard
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Suprême de poulet fermier</h4>
                    <span className="menu-price text-lg">3900 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Poulet fermier, sauce aux morilles, écrasé de pommes de terre à l'huile d'olive
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div>
                <h3 className="section-subheading text-center lg:text-left">Desserts</h3>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Tarte au citron meringuée</h4>
                    <span className="menu-price text-lg">1800 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Pâte sablée, crème de citron, meringue italienne
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Crème brûlée à la vanille</h4>
                    <span className="menu-price text-lg">1600 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Crème infusée à la vanille de Madagascar, caramel craquant
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Mousse au chocolat</h4>
                    <span className="menu-price text-lg">1700 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Mousse légère au chocolat noir 70%, éclats de noisettes caramélisées
                  </p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Assortiment de fruits frais</h4>
                    <span className="menu-price text-lg">1500 FCFA</span>
                  </div>
                  <p className="text-gray-400">
                    Sélection de fruits de saison, sirop léger à la menthe fraîche
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div>
                <h3 className="section-subheading text-center lg:text-left">Vins et Champagnes</h3>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Champagne Moët & Chandon</h4>
                    <span className="menu-price text-lg">15000 FCFA</span>
                  </div>
                  <p className="text-gray-400">Brut Impérial, France</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Chablis Premier Cru</h4>
                    <span className="menu-price text-lg">8500 FCFA</span>
                  </div>
                  <p className="text-gray-400">Domaine William Fèvre, France</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Saint-Émilion Grand Cru</h4>
                    <span className="menu-price text-lg">9200 FCFA</span>
                  </div>
                  <p className="text-gray-400">Château Pavie Macquin, France</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-xl text-white">Sancerre</h4>
                    <span className="menu-price text-lg">6800 FCFA</span>
                  </div>
                  <p className="text-gray-400">Domaine Vacheron, France</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;