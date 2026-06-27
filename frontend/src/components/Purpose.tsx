import { motion } from 'framer-motion';
import { Sprout, Eye, Heart, Leaf, Quote, ArrowRight } from 'lucide-react';

const Purpose = () => {
    return (
        <section id="proposito" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -z-10 bg-green-500 opacity-5 blur-[120px] rounded-full"
                style={{ width: '600px', height: '600px', transform: 'translate(-50%, -50%)' }}
            />

            <div className="section-container">
                <motion.div
                    className="text-center mb-20 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-emerald-500 font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Más que una tienda</span>
                    <h2 className="text-5xl font-bold mb-6 italic text-white">Nuestro <span className="vibrant-text">Propósito</span></h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                        No solo vendemos vegetales; cultivamos conciencia. Entendemos que cada elección alimenticia es un voto por el tipo de mundo en el que queremos vivir.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-24 relative z-10">
                    {/* Mission Card */}
                    <motion.div
                        className="glass-card p-10 relative group overflow-hidden flex flex-col justify-between min-h-[400px] border-white/5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-decoration-icon">
                            <Sprout size={240} strokeWidth={0.5} className="text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                                <Heart className="text-emerald-500" size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-5 italic text-white">Misión</h3>
                            <p className="text-base text-white/70 leading-relaxed mb-8">
                                Regenerar la relación entre el ser humano y la tierra. Cultivamos sin químicos para devolverle la salud real a tu mesa.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest cursor-pointer group/link relative z-10 mt-auto">
                            Nuestra huerta <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="glass-card p-10 relative group overflow-hidden flex flex-col justify-between min-h-[400px] border-white/5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="bg-decoration-icon">
                            <Leaf size={240} strokeWidth={0.5} className="text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                                <Eye className="text-emerald-500" size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-5 italic text-white">Visión</h3>
                            <p className="text-base text-white/70 leading-relaxed mb-8">
                                Liderar la transición hacia un sistema alimentario transparente donde cada hogar esté conectado con la tierra.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest cursor-pointer group/link relative z-10 mt-auto">
                            Futuro circular <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Impact Card (Optional but fills the 3-col grid beautifully) */}
                    <motion.div
                        className="glass-card p-10 relative group overflow-hidden flex flex-col justify-between min-h-[400px] border-white/5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-decoration-icon">
                            <Quote size={240} strokeWidth={0.5} className="text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                                <Leaf className="text-emerald-500" size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-5 italic text-white">Impacto</h3>
                            <p className="text-base text-white/70 leading-relaxed mb-8">
                                Cada elección financia la regeneración de suelos. Tu compra es un motor de cambio real y medible.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest cursor-pointer group/link relative z-10 mt-auto">
                            Ver métricas <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>
                </div>

                {/* Quote section */}
                <motion.div
                    className="glass-card p-12 text-center bg-green-500/5 border-white/10 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Quote className="opacity-10 mx-auto mb-6 text-emerald-500" size={48} />
                    <h4 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto leading-tight italic text-white">
                        "La tierra no es una herencia de nuestros padres, sino un préstamo de nuestros hijos."
                    </h4>
                    <button className="btn-primary text-sm px-10 py-4 neon-pulse">
                        Únete al Cambio
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Purpose;
