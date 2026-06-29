import { handleDownload, getAppLink } from '../utils/download';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section className="py-16 bg-burgundy relative overflow-hidden">
      {/* Decorative */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Available Now
        </motion.div>

        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to get{' '}
          <span className="text-white">
            started?
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-white/80 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join Shramico and experience a faster, smarter way to connect employers
          with skilled workers — right from your phone.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? "_blank" : undefined}
            rel={getAppLink() ? "noopener noreferrer" : undefined}
            className="group relative inline-flex items-center gap-4 bg-white hover:bg-gray-50 border border-transparent px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-burgundy/5 rounded-xl flex items-center justify-center shadow-sm transition-all duration-500">
                <Download size={24} className="text-burgundy" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Download on</p>
                <p className="text-xl font-extrabold text-gray-900">Google Play</p>
              </div>
            </div>
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { label: 'Free to register', icon: '✨' },
            { label: 'OTP verified accounts', icon: '🔒' },
            { label: 'Instant job matching', icon: '⚡' }
          ].map((point, index) => (
            <motion.div 
              key={point.label} 
              className="flex items-center gap-3 text-white/90 text-sm font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <span className="text-xl">{point.icon}</span>
              {point.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
