import React from 'react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const GalleryPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Gallery" 
        backgroundImage="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
      />
      
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Explore our collection of memorable moments and culinary delights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Gallery Grid */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                  alt="Fine Dining" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" 
                  alt="Restaurant Interior" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" 
                  alt="Culinary Creation" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" 
                  alt="Dining Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" 
                  alt="Special Events" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg" 
                  alt="Signature Dishes" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;