import React from 'react';
import { Phone, MessageCircle, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-dark">Let's Connect</h3>
                <p className="text-slate-500 mt-2">Open for opportunities and collaborations.</p>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Github size={20} />
                </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Mail size={20} />
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-surface-light border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-full text-[#5865F2] shadow-sm">
                   <MessageCircle size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Discord</p>
                    <p className="font-semibold text-dark">nawat#1234</p>
                </div>
            </div>
             <div className="p-6 rounded-2xl bg-surface-light border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-full text-[#06C755] shadow-sm">
                   <MessageCircle size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Line</p>
                    <p className="font-semibold text-dark">nawat_line</p>
                </div>
            </div>
             <div className="p-6 rounded-2xl bg-surface-light border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                   <Phone size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Phone</p>
                    <p className="font-semibold text-dark">081-234-5678</p>
                </div>
            </div>
        </div>

        <div className="text-center border-t border-slate-100 pt-8">
            <p className="text-slate-400 text-sm">© 2024 Nawat S. All rights reserved. Designed with ❤️ in Thailand.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;