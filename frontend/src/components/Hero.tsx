import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Organic Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#065f4622] blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#10b98111] blur-[100px] rounded-full" />

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#10b981] mb-6">
                        VEGETALES AGROECOLÓGICOS PREMIUM
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Sabor Real, <span className="vibrant-text">Directo</span> <br />
                        de Nuestra Tierra
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                        Descubre la excelencia de la cosecha artesanal. Sin agroquímicos,
                        totalmente sostenible y entregamos en menos de 12 horas
                        para garantizar la frescura absoluta.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                            Ver Cosecha de Hoy
                            <ArrowRight size={20} />
                        </button>
                        <button className="btn-secondary text-lg px-8 py-4">
                            Nuestra Misión
                        </button>
                    </div>
                </motion.div>

                {/* Agro Features */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="glass-card p-8 text-left hover:border-[#10b98133] transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10b98122] transition-colors">
                            <Leaf className="text-[#10b981]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic">100% Orgánico</h3>
                        <p className="text-white/40 text-sm">Certificación agroecológica estricta. Respetamos los ciclos naturales de la tierra.</p>
                    </div>

                    <div className="glass-card p-8 text-left hover:border-[#84cc1633] transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#84cc1622] transition-colors">
                            <Heart className="text-[#84cc16]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic">Calidad Premium</h3>
                        <p className="text-white/40 text-sm">Selección manual piece by piece. Solo lo mejor de cada cosecha llega a tu mesa.</p>
                    </div>

                    <div className="glass-card p-8 text-left hover:border-[#10b98133] transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10b98122] transition-colors">
                            <Globe className="text-[#10b981]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic">Impacto Positivo</h3>
                        <p className="text-white/40 text-sm">Apoyo directo a pequeños productores y reducción total de huella de carbono.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
