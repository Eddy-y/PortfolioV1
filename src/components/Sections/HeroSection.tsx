import { Button } from "../UI/button";
import { motion } from "framer-motion";
import Section from '../Layout/Section_Resume';
import {SectionId} from '../../data/data';
import Socials from '../Socials';

const HeroSection = () => {
  return (
    <Section
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      sectionId={SectionId.Home}
    >
      <div className="absolute inset-0 -z-10 backgroundColor"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">

        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl"
              animate={{ rotate: [0, 6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative bg-neutral-800 border border-gray-200 p-6 rounded-2xl shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-orange-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="text-xs text-gray-500">Discover patterns</div>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">{"// Data Analyst"}</div>
                <div>
                  <span className="text-blue-600">const</span>{" "}
                  <span className="text-green-500">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-amber-300">{"{"}</span>
                </div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <span className="text-red-600">name</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-blue-300">'Eduardo Lara'</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                >
                  <span className="text-red-600">skills</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-purple-500">[</span>
                  <span className="text-blue-300">'Cloud'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-blue-300">'Python'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-blue-300">'Databases'</span>
                  <span className="text-purple-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>
                
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  <span className="text-red-600">focuses</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-purple-500">[</span>
                  <span className="text-blue-300">'Data Analysis'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-blue-300">'Data Management'</span>
                  <span className="text-purple-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  <span className="text-red-600">learning</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-blue-300">'Always'</span>
                </motion.div>

                <div>
                  <span className="text-amber-300">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <motion.span
            className="text-sm md:text-base font-medium text-white opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hey! I'm
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Eduardo{" "}
            <motion.span
              className="text-orange-600"
              initial={{ backgroundSize: "0% 3px" }}
              animate={{ backgroundSize: "100% 3px" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Lara
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Data Analyst & Computer Science Student
          </motion.p>

          <motion.p
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Discovering patterns and providing insights 
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div className="flex flex-row items-center gap-4 text-white">
              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="touch-target"
              >
                <a href="#contact" aria-label="Go to contact section">
                  <Button className="min-w-[120px] py-4 bg-orange-600">
                    Contact Me
                  </Button>
                </a>
              </motion.div>

              {/* Projects Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="touch-target"
              >
                <a href="#portfolio" aria-label="Go to projects section">
                  <Button
                    variant="outline"
                    className="min-w-[120px] py-3 text-base"
                  >
                    View Projects
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <Socials/>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
