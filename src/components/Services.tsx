import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaPalette, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technology"
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence"
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: "Branding",
    description: "Create a memorable brand identity that resonates with your audience"
  },
  {
    icon: <FaTools className="text-4xl" />,
    title: "Maintenance & Support",
    description: "Ongoing technical support to keep your digital assets running smoothly"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background"
            >
              <div className="text-secondary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}