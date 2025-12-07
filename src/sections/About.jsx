import '../index.css';
import '../App.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6"
    >
      <p className="mt-10 text-lg text-left font-inria text-tantxt">
        Some more information
      </p>

      <h1 className="text-4xl text-left font-inria text-browntxt">
        About Me
      </h1>

      {/* Grid that triggers the scroll animation */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // animate once when ~20% in view
      >
        {/* Student Cube */}
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
        >
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            STUDENT
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Always learning
          </p>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
            <p className=" text-md text-center font-inria text-tantxt">
              My dedication to learning is neverending, whether it is studying as a full-time CS student, Systems Design podcasts on the bus, or staying up to date with the latest tools when developing.
            </p>
            <p className="mt-2 text-md text-center font-inria text-tantxt">
              In tech, you commit to being a lifetime student, both inside and outside the classroom.
            </p>
          </div>
        </motion.div>

        {/* Developer Cube */}
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
        >
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            DEVELOPER
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Always creating
          </p>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
            <p className="text-md text-center font-inria text-tantxt">
              As someone passionate about problem-solving and innovation, I love building applications that make a difference.
            </p>
            <p className="mt-2 text-md text-center font-inria text-tantxt">
              Whether it's a personal project or a collaborative effort, I enjoy turning ideas into reality and providing solutions to problems through code.
            </p>
          </div>
        </motion.div>

        {/* Community Cube */}
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
        >
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            COMMUNITY-DRIVEN
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Always prioritizing
          </p>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
            <p className="text-md text-center font-inria text-tantxt">
              My background as a Nêhiyaw (Cree) & Métis woman has instilled in me a strong sense of community and the importance of giving back.
            </p>
            <p className="mt-2 text-md text-center font-inria text-tantxt">
              I will always create space for my community in all I do, and I am committed to using my resources to make a positive impact.
            </p>
          </div>
        </motion.div>

        {/* Innovator Cube */}
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl"
        >
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            INNOVATOR
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Always exploring
          </p>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
            <p className="text-md text-center font-inria text-tantxt">
              I'm passionate about exploring new technologies, methodologies, and ideas to solve complex problems in creative ways.
            </p>
            <p className="mt-2 text-md text-center font-inria text-tantxt">
              Whether experimenting with AI/ML, cloud infra, or full-stack development, I design solutions that push what's possible and bring innovative ideas to life.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}