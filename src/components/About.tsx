import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
            <p className="text-lg mb-6">
              With over 3 years of experience, we've been at the forefront of digital innovation,
              helping businesses transform their digital presence and achieve remarkable growth.
            </p>
            <p className="text-lg">
              Our team of experts combines technical excellence with creative innovation to
              deliver solutions that drive real business results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/about-image.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}