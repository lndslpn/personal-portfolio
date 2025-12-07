import '../index.css';
import '../App.css';
import { motion } from 'framer-motion';

const courseContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const courseChipVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 bg-background min-h-[80vh] px-6 flex flex-col justify-center"
    >
      <p className="mt-10 text-lg font-inria text-tantxt">My</p>
      <h1 className="text-4xl font-inria text-browntxt">Education</h1>

      {/* Main card*/}
      <div className="mt-8 relative rounded-2xl bg-imagebrdr/80 p-5 ring-1 ring-black/5 shadow-lg">
        {/* Title on main card */}
        <div className="text-3xl font-inria text-browntxt">University of Alberta</div>

        {/* Inner main card wrapper to hold two mini cards */}
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr] items-start">
          {/* Inner uni info card (Bachelor of Science) - animated */}
          <motion.div
            className="rounded-xl bg-background p-4 shadow ring-1 ring-black/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-lg font-inria text-browntxt">Bachelor of Science</p>
                <p className="text-lg font-inria text-browntxt">Honors Computing Science</p>
              </div>
              <p className="text-md font-inria text-browntxt">2022 - 2027</p>
            </div>

            <p className="mt-3 text-md font-inria text-tantxt">
              My courses primarily concentrate on the fundamentals of programming and software
              development, but I also enjoy taking courses in artificial intelligence and machine
              learning, economics, Canadian Indigenous history, and business fundamentals.
            </p>

            <div className="mt-3 space-y-2">
              <p className="text-lg font-inria text-browntxt">Honors &amp; Awards:</p>
              <ul className="list-disc pl-5 text-md font-inria text-tantxt">
                <li>NSERC Undergraduate Student Research Award (2025)</li>
                <li>Dean&apos;s Honor Roll (2023-2025)</li>
                <li>Jason Lang Scholarship (2023, 2024)</li>
                <li>Indigenous Careers Award (2022)</li>
              </ul>
            </div>
          </motion.div>

          {/* Inner relevant courses card (box itself NOT animated) */}
          <div className="rounded-xl bg-background p-4 shadow ring-1 ring-black/5">
            <div className="mb-3 text-center text-[1.05rem] font-inria text-browntxt">
              Relevant Courses
            </div>

            {/* Only the course chips animate */}
            <motion.div
              className="grid grid-cols-2 gap-2 text-sm font-inria text-tantxt"
              variants={courseContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/229"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Computer Organization &amp; Architecture I (Assembly)
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/204"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Data Structures &amp; Algorithms
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/272"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Formal Systems &amp; Logic in Computing Science
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/300"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Ethics of Computers &amp; Society
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/291"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                File &amp; Database Management (SQL, MongoDB)
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/174"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Intro to Programming I (Python, OOP)
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/174"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Intro to Programming II (Python, DSA)
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/301"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Intro to Software Engineering (Java, OOP, Android app development)
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/267"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Machine Learning I
              </motion.a>

              <motion.a
                variants={courseChipVariants}
                href="https://apps.ualberta.ca/catalogue/course/cmput/201"
                className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                Practical Programming Methodology (C, Unix)
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}