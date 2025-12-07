import '../index.css';
import '../App.css'; 
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6"
    >
      <h1 className="text-4xl mt-10 text-left font-inria text-browntxt">
        Contact
      </h1>
      <p className="ml-1 text-lg text-left font-inria text-tantxt">
        Me
      </p>

      {/* Only animate these two circles */}
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-15"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LinkedIn */}
        <motion.a
          variants={cardVariants}
          href="https://www.linkedin.com/in/landys-lepine-16267725a/"
          target="_blank"
          rel="noreferrer"
          className="flex h-50 w-50 flex-col items-center justify-center rounded-full px-5 py-2.5 bg-imagebrdr shadow-xl hover:opacity-80 
                     focus-visible:ring-2 focus-visible:ring-brand/60 font-inria text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={linkedin} alt="LinkedIn" className="h-22 w-22" />
            <p className="text-browntxt text-md">Connect with me on</p>
            <b className="text-browntxt text-xl">LinkedIn</b>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a
          variants={cardVariants}
          href="mailto:landys@ualberta.ca"
          className="flex h-50 w-50 flex-col items-center justify-center rounded-full px-5 py-2.5 bg-imagebrdr shadow-xl hover:opacity-80
                     focus-visible:ring-2 focus-visible:ring-brand/60 font-inria text-center"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={email} alt="Email" className="h-20 w-20" />
            <p className="text-browntxt text-md">Connect with me over</p>
            <b className="text-browntxt text-xl">email</b>
          </div>
        </motion.a>

      </motion.div>
    </section>
  );
}