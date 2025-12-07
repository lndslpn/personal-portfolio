import '../index.css';
import '../App.css';
import { motion } from 'framer-motion';

export const languages = ["Python", "Java", "C", "C++", "JavaScript", "SQL"];
export const frontend = ["React", "HTML", "CSS", "Tailwind CSS", "Responsive Web Design"];
export const backend = ["Django", "Flask", "REST APIs", "OOP", "App Development"];
export const databases = ["PostgreSQL (Supabase)", "MongoDB", "NoSQL (Firebase)"];
export const devopsCloud = ["Docker", "AWS", "Nginx", "Gunicorn", "Linux", "CI/CD", "GitHub Actions"];
export const testingQA = ["TDD", "Unit Testing", "Postman", "Code Reviews"];
export const toolsprocess = ["Git", "GitHub", "GitLab", "Visual Studio Code", "Jira", "Figma", "Android Studio", "Agile", "RAG Pipelines"];
export const softSkills = ["Teamwork", "Communication", "Leadership", "Time Management", "Problem Solving", "Attention to Detail", "Creative Thinking"];

// shared variants
const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.05,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

function SkillGroup({ label, items }) {
  return (
    <div className="mt-6">
      <p className="text-lg text-left font-inria text-tantxt">
        {label}
      </p>

      <motion.ul
        className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]"
        variants={groupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((s) => (
          <motion.li key={s} variants={chipVariants}>
            <span
              className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria 
                         bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                         transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20"
            >
              {s}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <hr className="my-3 border-t border-browntxt/10" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6"
    >
      <p className="mt-10 text-lg text-left font-inria text-tantxt">
        Technical & Soft
      </p>
      <h1 className="text-4xl text-left font-inria text-browntxt">
        Skills
      </h1>

      <SkillGroup label="Languages" items={languages} />
      <SkillGroup label="Frontend" items={frontend} />
      <SkillGroup label="Backend" items={backend} />
      <SkillGroup label="Databases" items={databases} />
      <SkillGroup label="DevOps & Cloud" items={devopsCloud} />
      <SkillGroup label="Testing & QA" items={testingQA} />
      <SkillGroup label="Tools & Processes" items={toolsprocess} />
      <SkillGroup label="Soft Skills" items={softSkills} />
    </section>
  );
}