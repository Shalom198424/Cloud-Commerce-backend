import { motion } from 'framer-motion';
import { Search, Plus, ShoppingCart, Star, Tag, Leaf } from 'lucide-react';

const ProductCatalog = () => {
    const products = [
        { name: 'Tomate Reliquia Heirloom', price: '$4.50', stock: 15, rating: 5.0, type: 'Cosecha Selección', desc: 'Sabor ancestral, cultivado sin químicos.', image: '/assets/products/tomate.png' },
        { name: 'Kale Orgánico Toscano', price: '$2.80', stock: 45, rating: 4.8, type: 'Súperalimento', desc: 'Rico en nutrientes, recién cortado.', image: '/assets/products/kale.png' },
        { name: 'Zanahorias Arcoíris', price: '$3.20', stock: 22, rating: 4.9, type: 'Raíces Premium', desc: 'Cosechadas de suelo enriquecido.', image: '/assets/products/zanahoria.png' },
        { name: 'Mix Ensalada Gourmet', price: '$12.00', stock: 10, rating: 4.7, type: 'Artesanal', desc: 'Selección de hojas jóvenes y brotes.', image: '/assets/products/mix.png' },
        { name: 'Pimientos de Autor', price: '$6.50', stock: 12, rating: 4.9, type: 'Frutos de Verano', desc: 'Dulces, carnosos y de color vibrante.', image: '/assets/products/pimiento.png' },
        { name: 'Cesta Cosecha Mensual', price: '$45.00', stock: 5, rating: 5.0, type: 'Suscripción', desc: 'Lo mejor de nuestra huerta cada mes.', image: '/assets/products/cesta.png' },
    ];

    return (
        <section id="catalogo" className="py-20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <span className="text-[#10b981] font-bold text-sm tracking-widest uppercase mb-2 block font-heading">Cosecha Seleccionada</span>
                        <h2 className="text-5xl font-bold mb-4">Catálogo de <span className="vibrant-text">Productos</span></h2>
                        <p className="text-white/60">Frutos de la tierra tratados con respeto y excelencia.</p>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="glass-card flex items-center px-4 py-2 flex-grow md:w-64 border-[#10b98111]">
                            <Search size={18} className="text-white/20 mr-2" />
                            <input
                                type="text"
                                placeholder="Buscar verduras..."
                                className="bg-transparent border-none text-white outline-none text-sm w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            className="glass-card group relative border-[#10b9810a] overflow-hidden hover:border-[#10b98133] transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Product Image with Premium Styling */}
                            <div className="aspect-[4/3] bg-[#0a0f0a] overflow-hidden relative">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-transparent to-transparent opacity-80" />

                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#10b98122] px-3 py-1 rounded-full flex items-center gap-1 z-10">
                                    <Star size={10} className="text-[#fbbf24] fill-[#fbbf24]" />
                                    <span className="text-[10px] font-bold">{product.rating}</span>
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[9px] uppercase tracking-tighter font-bold text-[#10b981] bg-[#10b98111] px-2 py-1 rounded border border-[#10b98122]">
                                        {product.type}
                                    </span>
                                    <span className="font-heading text-xl font-bold italic text-white/90">{product.price}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#10b981] transition-colors">{product.name}</h3>
                                <p className="text-white/40 text-[10px] mb-4 h-8 leading-relaxed">{product.desc}</p>

                                <div className="flex justify-between items-center text-white/30 text-[9px] mb-6 border-t border-white/5 pt-4 uppercase font-bold tracking-widest">
                                    <div className="flex items-center gap-1">
                                        <Tag size={10} className="text-[#10b981]" />
                                        <span>Cosecha: Hoy</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Leaf size={10} className="text-[#10b981]" />
                                        <span>Disp: {product.stock} kg</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="btn-primary flex-grow py-2.5 px-0 text-xs flex items-center justify-center gap-2 group/btn">
                                        <ShoppingCart size={14} className="group-hover/btn:rotate-12 transition-transform" />
                                        Comprar Ahora
                                    </button>
                                    <button className="glass-card py-2 px-3 border-[#10b98133] hover:bg-[#10b98111]">
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
