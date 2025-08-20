import { Button } from "../UI/button";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/avatar";
import { Badge } from "../UI/badge";
import { Card, CardContent } from "../UI/card";
import { motion } from "framer-motion";
import { useToast } from "../../hooks/use-toast";
import Section from '../Layout/Section_Resume';

import {
  FileText,
  Briefcase,
  GraduationCap,
  //Award,
  Download,
} from "lucide-react";
// import { Links } from "../../data/links";
import {aboutData, SectionId} from '../../data/data';


const AboutSection = () => {
  const resumeUrl = '/assets/resume.pdf';
  const { toast } = useToast();
  const {description} = aboutData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <Section className="relative bg-neutral-900" sectionId={SectionId.About}>
      <div className="absolute top-0 inset-x-0 h-1/2 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="title mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" /> Bio
              </h3>
              <p className="normal-text text-base">
                {description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full backdrop-blur-sm bg-neutral-800 border border-gray-400">
                  <CardContent className="pt-6">
                    <h3 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-orange-500" />{" "}
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium text-white">BSc in Computer Science</p>
                      <p className="text-sm normal-text">
                        TAMU-SA (Texas A&M University - San Antonio)
                      </p>
                      <p className="text-sm normal-text">
                        2022 - Present
                      </p>
                      <p className="text-sm normal-text">
                        Honors Society | Men's Volleyball Team Captain and Vicepresident | Chess Team Member | Research Assistant
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full backdrop-blur-sm bg-neutral-800 border border-gray-400">
                  <CardContent className="pt-6">
                    <h3 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary text-orange-500" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-white">
                          Data Analyst Intern
                        </p>
                        <p className="text-sm normal-text">
                          Forte Innovation Consulting
                        </p>
                        <p className="text-sm normal-text">
                          April 2022 - November 2022
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">Backend Developer Intern</p>
                        <p className="text-sm normal-text">
                          Forte Innovation Consulting
                        </p>
                        <p className="text-sm normal-text">
                          January 2023 - July 2024
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.jpg"
                  alt="Eduardo Lara"
                  loading="lazy"
                />
                <AvatarFallback>EL</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                3.9 GPA
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-white">Eduardo Lara Hurtado</h3>
              <p className="text-gray-300">
                Software Engineering Student
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="text-white bg-stone-800">
                Python
              </Badge>
              <Badge variant="outline" className="text-white bg-stone-800">
                Pandas
              </Badge>
              <Badge variant="outline" className="text-white bg-stone-800">
                Power BI
              </Badge>
              <Badge variant="outline" className="text-white bg-stone-800">
                ETL
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-orange-500 text-gray-900 rounded-full text-sm" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Eduardo_Lara_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;