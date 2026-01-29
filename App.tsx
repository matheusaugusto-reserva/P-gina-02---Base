import React from 'react';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Creators } from './components/Creators';
import { Button } from './components/Button';
import { Comparison } from './components/Comparison';
import { Logic } from './components/Logic';
import { PackageDetails } from './components/PackageDetails';
import { Authority } from './components/Authority';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-dark overflow-x-hidden selection:bg-brand-pink selection:text-white">
      <Hero />
      
      <Methodology />
      
      <Creators />

      <div className="flex justify-center my-12">
        <Button>Quero Me Inscrever</Button>
      </div>

      <Comparison />
      <Logic />
      
      <PackageDetails />

      <Authority />
      
      <Offer />

      <Guarantee />

      <FAQ />
      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="fixed right-5 bottom-5 z-50 cursor-pointer hover:scale-110 transition-transform">
        <div className="bg-[#25D366] p-3 rounded-full shadow-lg">
             <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382C17.119 14.205 15.385 13.351 15.061 13.233C14.738 13.115 14.502 13.056 14.266 13.41C14.03 13.764 13.353 14.56 13.147 14.796C12.941 15.032 12.735 15.061 12.382 14.884C12.029 14.707 10.891 14.333 9.54203 13.13C8.47003 12.174 7.74603 10.993 7.54003 10.639C7.33403 10.285 7.51803 10.094 7.69503 9.918C7.85403 9.759 8.04903 9.505 8.22603 9.3C8.40303 9.094 8.46203 8.947 8.58003 8.711C8.69803 8.475 8.63903 8.269 8.55103 8.092C8.46303 7.915 7.75503 6.173 7.46103 5.465C7.17503 4.777 6.88503 4.871 6.66903 4.871H6.08003C5.87403 4.871 5.55003 4.949 5.25503 5.273C4.96003 5.597 4.13503 6.374 4.13503 7.967C4.13503 9.56 5.29403 11.094 5.45103 11.31C5.60803 11.526 7.74703 14.826 11.023 16.241C11.802 16.577 12.41 16.778 12.887 16.929C13.82 17.225 14.667 17.182 15.334 17.082C16.082 16.97 17.639 16.139 17.963 15.225C18.287 14.311 18.287 13.524 18.199 13.377C18.111 13.23 17.845 13.142 17.492 12.965" />
             </svg>
        </div>
      </div>
    </div>
  );
}

export default App;