import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl font-bold mb-4">
            Your Digital Transformation Partner
          </h1>
          <p className="text-xl mb-8">
            Empowering businesses with innovative IT and digital marketing solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Let's Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}