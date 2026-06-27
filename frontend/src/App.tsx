import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <ProductCatalog />

        {/* Footer Minimalista */}
        <footer className="py-12 border-t border-white/5 mt-20">
          <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm italic font-heading">
              © 2026 AgroMarket Premium. Del campo a tu conciencia.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-white/40 hover:text-[#10b981] transition-colors text-sm">Privacidad</a>
              <a href="#" className="text-white/40 hover:text-[#10b981] transition-colors text-sm">Términos</a>
              <a href="#" className="text-white/40 hover:text-[#10b981] transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
