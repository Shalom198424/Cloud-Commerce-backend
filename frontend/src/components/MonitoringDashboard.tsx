import { motion } from 'framer-motion';
import { Thermometer, Droplets, Sun, Wind, CheckCircle2, BarChart3, Clock, Sprout, Leaf, Zap } from 'lucide-react';

const MonitoringDashboard = () => {
    const environmentMetrics = [
        { name: 'Temperatura', status: 'Ideal', value: '22°C', icon: Thermometer },
        { name: 'Pureza del Aire', status: 'Ideal', value: '98%', icon: Wind },
        { name: 'Índice UV', status: 'Alerta', value: 'Mod. Bajo', icon: Sun },
    ];

    const soilMetrics = [
        { name: 'Humedad Suelo', status: 'Ideal', value: '68%', icon: Droplets },
        { name: 'Grado Brix', status: 'Ideal', value: '14.2', icon: Sprout },
    ];

    const stats = [
        { label: 'Cosecha del Día', value: '245kg', icon: BarChart3 },
        { label: 'Frescura Media', value: '4h post-cosecha', icon: Clock },
    ];

    return (
        <section id="frescura" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#10b98103] blur-[150px] -z-10" />

            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[#10b981] font-bold text-sm tracking-widest uppercase mb-2 block font-heading">Certificación de Origen</span>
                        <h2 className="text-5xl font-bold">Estado del <span className="vibrant-text">Cultivo</span></h2>
                    </div>
                    <div className="flex gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="glass-card px-4 py-2 flex items-center gap-3 border-[#10b98111]">
                                <stat.icon size={16} className="text-[#10b981]" />
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-bold">{stat.label}</p>
                                    <p className="font-bold text-sm italic">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Panel: Environment Status */}
                    <motion.div
                        className="lg:col-span-3 flex flex-col gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xs font-bold text-white/40 uppercase mb-2 px-2 flex items-center gap-2">
                            <Wind size={14} /> Factores Ambientales
                        </h4>
                        {environmentMetrics.map((metric, i) => (
                            <div key={metric.name} className="glass-card p-4 flex items-center justify-between border-[#10b9810a] hover:border-[#10b98133] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#10b98111] flex items-center justify-center">
                                        <metric.icon size={16} className="text-[#10b981]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold">{metric.name}</p>
                                        <p className={`text-[9px] uppercase font-bold ${metric.status === 'Ideal' ? 'text-[#10b981]' : 'text-[#f59e0b]'}`}>
                                            {metric.status}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold opacity-80">{metric.value}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Center Panel: Main Growth Chart */}
                    <motion.div
                        className="lg:col-span-6 glass-card p-8 flex flex-col justify-between h-[450px] relative overflow-hidden border-[#10b98122]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="z-10 relative">
                            <h3 className="text-2xl font-bold mb-1">Índice Nutricional</h3>
                            <p className="text-white/40 text-sm">Bio-disponibilidad de nutrientes en tiempo real</p>
                        </div>

                        {/* Animated Visual Growth Chart */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end gap-1 px-8 pb-4">
                            {[...Array(40)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-grow bg-[#10b981]"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${Math.random() * 60 + 40}%` }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2.5,
                                        repeatType: 'reverse',
                                        delay: i * 0.05,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        borderRadius: '6px 6px 0 0',
                                        opacity: 0.1 + (i / 40) * 0.4
                                    }}
                                />
                            ))}
                        </div>

                        <div className="mt-auto z-10 relative flex justify-between items-end">
                            <div className="w-16 h-16 rounded-full bg-[#10b9811a] flex items-center justify-center neon-pulse">
                                <CheckCircle2 className="text-[#10b981]" size={32} />
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-white/40 font-bold uppercase">Estado General</p>
                                <p className="text-2xl font-bold text-[#10b981]">ÓPTIMO</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: Soil & Biodiversity */}
                    <motion.div
                        className="lg:col-span-3 flex flex-col gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Soil Group */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold text-white/40 uppercase mb-2 px-2 flex items-center gap-2">
                                <Droplets size={14} /> Análisis de Suelo
                            </h4>
                            {soilMetrics.map((metric) => (
                                <div key={metric.name} className="glass-card p-4 flex items-center justify-between border-[#10b9810a]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#84cc1611] flex items-center justify-center">
                                            <metric.icon size={16} className="text-[#84cc16]" />
                                        </div>
                                        <p className="text-xs font-bold">{metric.name}</p>
                                    </div>
                                    <span className="text-sm font-bold text-[#84cc16]">{metric.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Recent Alerts / Updates */}
                        <div className="glass-card p-5 bg-gradient-to-br from-[#10b9810a] to-transparent border-[#10b98111]">
                            <h4 className="text-xs font-bold mb-4 flex items-center gap-2 uppercase tracking-tighter">
                                <Zap size={14} className="text-[#fbbf24]" /> Historial Reciente
                            </h4>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <div className="w-1 h-8 bg-[#10b981] rounded-full" />
                                    <p className="text-[10px] text-white/40 leading-tight">
                                        <span className="text-white block font-bold">Fertirrigación</span>
                                        Completada hace 50min
                                    </p>
                                </div>
                                <div className="flex gap-3 opacity-60">
                                    <div className="w-1 h-8 bg-white/20 rounded-full" />
                                    <p className="text-[10px] text-white/40 leading-tight">
                                        <span className="text-white block font-bold">Control de Plagas</span>
                                        Purín aplicado ayer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MonitoringDashboard;
