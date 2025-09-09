import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  people: number;
  message: string;
}

const ReservationPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>('19:00');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormData>();
  
  const availableTimes = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];
  
  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    if (!date) return;
    
    setSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log({
      ...data,
      date: date.toISOString().split('T')[0],
      time
    });
    
    setSubmitting(false);
    setSuccess(true);
    reset();
    setDate(null);
    setTime('19:00');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <>
      <PageHeader 
        title="Réservation" 
        backgroundImage="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="section-heading">Réservez votre table</h2>
            <p className="section-text mb-16">
              Pour vivre une expérience gastronomique inoubliable en bord de mer, 
              réservez votre table dès maintenant.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.3}>
              {success ? (
                <div className="bg-green-800/30 border border-green-500 text-white p-6 rounded-lg text-center mb-8">
                  <h3 className="font-serif text-gold-500 text-2xl mb-4">Réservation Confirmée !</h3>
                  <p>
                    Merci pour votre réservation. Nous vous avons envoyé un e-mail de confirmation.
                    Notre équipe vous attend avec impatience !
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-dark-900 p-8 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.phone ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('phone', { required: 'Ce champ est requis' })}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="people" className="block text-white mb-2">Nombre de personnes</label>
                      <select
                        id="people"
                        className={`w-full bg-dark-800 border rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 ${errors.people ? 'border-red-500' : 'border-dark-600'}`}
                        {...register('people', { required: 'Ce champ est requis' })}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'personne' : 'personnes'}</option>
                        ))}
                        <option value="10+">Plus de 10 personnes</option>
                      </select>
                      {errors.people && <p className="text-red-500 text-sm mt-1">{errors.people.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-white mb-2">Date</label>
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        minDate={new Date()}
                        className="w-full bg-dark-800 border border-dark-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                        placeholderText="Sélectionnez une date"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-white mb-2">Heure</label>
                      <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-dark-800 border border-dark-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {availableTimes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white mb-2">Message (optionnel)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-dark-800 border border-dark-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="Précisions, demandes particulières..."
                      {...register('message')}
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`gold-button-solid w-full sm:w-auto ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitting ? 'Traitement en cours...' : 'CONFIRMER LA RÉSERVATION'}
                    </button>
                    
                    <div className="flex items-center gap-4">
                      <a
                        href="tel:+221123456789"
                        className="flex items-center justify-center gap-2 text-gold-500 hover:text-gold-600 transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Par téléphone
                      </a>
                      
                      <a
                        href="https://wa.me/221123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-gold-500 hover:text-gold-600 transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationPage;