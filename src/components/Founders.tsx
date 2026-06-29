import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Swapnil Rathod',
    role: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Swapnil+Rathod&background=71151a&color=fff&size=200',
    bio: 'Passionate about solving real-world problems through technology. Driving the vision and technical innovation behind Shramico to revolutionize the unorganized labor sector.',
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:swapnil@shramico.com'
    }
  },
  {
    name: 'Balaji Chavan',
    role: 'Co-Founder',
    image: 'https://ui-avatars.com/api/?name=Balaji+Chavan&background=71151a&color=fff&size=200',
    bio: 'Dedicated to empowering the grassroots workforce. Focused on operational excellence and building strategic partnerships to scale Shramico’s impact across India.',
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:balaji@shramico.com'
    }
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="section-label inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the Team
          </motion.div>
          <motion.h2 
            className="section-title mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Minds Behind <span className="text-burgundy">Shramico</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mt-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We are on a mission to connect millions of skilled workers with right opportunities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-burgundy font-medium mb-4">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
