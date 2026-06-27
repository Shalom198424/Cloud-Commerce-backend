import { Leaf, Menu, User, ShoppingBasket } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="section-container">
                <div className="glass-card px-6 py-3 flex justify-between items-center bg-[#0a0e0a/80]">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#065f46] to-[#10b981] rounded-lg flex items-center justify-center neon-pulse">
                            <Leaf className="text-white" size={24} />
                        </div>
                        <span className="font-heading text-xl font-bold tracking-tight">AgroMarket <span className="text-[#10b981]">Premium</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#inicio" className="text-sm font-medium hover:text-[#10b981] transition-colors">Huerta</a>
                        <a href="#proposito" className="text-sm font-medium hover:text-[#10b981] transition-colors">Propósito</a>
                        <a href="#catalogo" className="text-sm font-medium hover:text-[#10b981] transition-colors">Cosecha</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer hover:text-[#10b981] transition-colors">
                            <ShoppingBasket size={22} />
                            <span className="absolute -top-2 -right-2 bg-[#10b981] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                        </div>
                        <button className="btn-secondary hidden sm:flex items-center gap-2 py-2 px-4 text-sm">
                            <User size={16} />
                            Mi Cuenta
                        </button>
                        <Menu className="md:hidden cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
