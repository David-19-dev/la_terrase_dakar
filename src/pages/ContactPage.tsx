import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(data);
    
    setSubmitting(false);
    setSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <>
      <PageHeader 
        title="Contact" 
        backgroundImage="https://images.pexels.com/photos/5604510/pexels-photo-5604510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Contactez-nous</h2>
            <p className="section-text mb-16">
              Nous sommes à votre disposition pour toute question ou demande d'information.
              N'hésitez pas à nous contacter.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="font-serif text-gold-600 text-3xl mb-8">Informations</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-gold-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-serif text-white text-xl mb-2">Adresse</h4>
                      <p className="text-gray-300">
                        Restaurant La Terrasse<br />
                        Complexe Terrou-Bi<br />
                        Dakar, Sénégal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-gold-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-serif text-white text-xl mb-2">Téléphone</h4>
                      <p className="text-gray-300">
                        <a 
                          href="tel:+221123456789" 
                          className="hover:text-gold-500 transition-colors duration-300"
                        >
                          +221 12 345 67 89
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-gold-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-serif text-white text-xl mb-2">Email</h4>
                      <p className="text-gray-300">
                        <a 
                          href="mailto:contact@laterrassededakar.com" 
                          className="hover:text-gold-500 transition-colors duration-300"
                        >
                          contact@laterrassededakar.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-gold-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-serif text-white text-xl mb-2">Horaires d'ouverture</h4>
                      <p className="text-gray-300">
                        Mardi - Dimanche : 12h00-15h00, 19h00-23h00<br />
                        Fermé le lundi
                      </p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-serif text-white text-xl mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark-900 rounded-full p-3 text-white hover:text-gold-500 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark-900 rounded-full p-3 text-white hover:text-gold-500 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div>
                <h3 className="font-serif text-gold-600 text-3xl mb-8">Envoyez-nous un message</h3>
                
                {success ? (
                  <div className="bg-green-800/30 border border-green-500 text-white p-6 rounded-lg">
                    <h4 className="font-serif text-gold-500 text-2xl mb-4">Message Envoyé !</h4>
                    <p>
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Nom Complet</label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.name ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('name', { required: 'Ce champ est requis' })}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.email ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('email', { 
                          required: 'Ce champ est requis',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Adresse email invalide'
                          }
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">Sujet</label>
                      <input
                        type="text"
                        id="subject"
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.subject ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('subject', { required: 'Ce champ est requis' })}
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.message ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('message', { required: 'Ce champ est requis' })}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`gold-button-solid ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? 'Envoi en cours...' : 'ENVOYER LE MESSAGE'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-0">
        <div className="h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4980260915723!2d-17.48861642411456!3d14.722772275348662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d2f3e0c3e51%3A0x6c1ccf0ac09118e8!2sTerrou-Bi!5e0!3m2!1sfr!2sfr!4v1649866688954!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;