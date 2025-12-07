import '../index.css';
import '../App.css'; 
import { useEffect } from "react";
import { motion } from "framer-motion";

/*
SCROLL TO ACTIVATE FEATURE REFERENCE
Link: https://www.youtube.com/watch?v=Sv54eYCfDZc 
Date accessed: Nov 2 2025
*/

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Experience() {
  useEffect(() => {
    const container = document.querySelector('.counters');
    if (!container) return;

    const counters = container.querySelectorAll('[data-count]');
    if (!counters.length) return;

    let activated = false;

    const onScroll = () => {
      const y = window.pageYOffset;

      // Triggered when the counter box is near entering the viewport
      if (y > container.offsetTop - container.offsetHeight - 200 && !activated) {
        counters.forEach((counter) => {
          counter.textContent = '0';
          let count = 0;

          const target = parseInt(counter.getAttribute('data-count') || '0', 10);

          function updateCount() {
            if (count < target) {
              count += 1;
              counter.textContent = String(count);
              setTimeout(updateCount, 80);
            } else {
              counter.textContent = String(target);
            }
          }

          updateCount();
        });

        activated = true;
      } else if (
        (y < container.offsetTop - container.offsetHeight - 400 || y === 0) &&
        activated
      ) {
        counters.forEach((counter) => {
          counter.textContent = '0';
        });
        activated = false;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once counters are in view

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="experience"
      className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6"
    >
      <p className="mt-10 text-lg text-left font-inria text-tantxt">Professional</p>
      <h1 className="text-4xl text-left font-inria text-browntxt">Experience</h1>

      {/* Totals box (unchanged, no animation) */}
      <p className="mt-10 text-xl text-left font-inria text-tantxt">Totals</p>

      <div className="counters mt-5 rounded bg-imagebrdr shadow-xl p-4 place-items-center gap-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="counter place-items-center">
          <p><span data-count="24" className="mt-2 text-3xl text-left font-inria text-browntxt">0</span></p>
          <p className="text-lg text-left font-inria text-tantxt">Months</p>
          <p className="text-xl text-left font-inria text-tantxt">Software Engineering</p>
          <p className="text-lg text-left font-inria text-tantxt">Experience</p>
        </div>
        <div className="counter place-items-center">
          <p><span data-count="4" className="mt-2 text-3xl text-left font-inria text-browntxt">0</span></p>
          <p className="text-lg text-left font-inria text-tantxt">Months</p>
          <p className="text-xl text-left font-inria text-tantxt">AI/ML Research</p>
          <p className="text-lg text-left font-inria text-tantxt">Experience</p>
        </div>
        <div className="counter place-items-center">
          <p><span data-count="8" className="mt-2 text-3xl text-left font-inria text-browntxt">0</span></p>
          <p className="text-lg text-left font-inria text-tantxt">Months</p>
          <p className="text-xl text-left font-inria text-tantxt">Teaching/Mentoring</p>
          <p className="text-lg text-left font-inria text-tantxt">Experience</p>
        </div>
        <div className="counter place-items-center">
          <p><span data-count="32" className="mt-2 text-3xl text-left font-inria text-browntxt">0</span></p>
          <p className="text-lg text-left font-inria text-tantxt">Months</p>
          <p className="text-xl text-left font-inria text-tantxt">Professional Work</p>
          <p className="text-lg text-left font-inria text-tantxt">Experience</p>
        </div>
      </div>

      {/* Experience boxes */}
      <p className="mt-10 text-xl text-left font-inria text-tantxt">2025</p>

      <motion.div
        className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-125 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">Sep 2025 - Dec 2025</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">TD Bank</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Engineering Intern</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">Banking</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-95 w-75">
            <p className="text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Contributed to the Credit Technology team, developing and testing Java backend services for large-scale credit processing.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Modernized backend logic by replacing static exclusion rules with dynamic runtime lookups across 1060+ branches,
                improving maintainability across multiple credit services servicing 26M+ customers.
              </li>
              <li>
                Implemented asynchronous event orchestration (Kafka Outbox) replacing direct Salesforce API calls, reducing
                response time from ~9 sec to milliseconds.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Java · JUnit · Mockito · GitHub Copilot · Linux · Postman · Agile · Unit Testing
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-140 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Dec 2025</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">pipikwan pêhtâkwan</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Developer Intern</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">AI Startup & Public Relations</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-110 w-75">
            <p className="text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Helped build wâsikan kisewâtisiwin, an Indigenous-focused LLM project that detects and mitigates bias and provides educated
              recommendations through Indigenous data.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Built an end-to-end feedback pipeline processing 100+ daily records, enabling scalable data pipelines for LLM fine-tuning.
              </li>
              <li>
                Led deployment of a containerized application on AWS (EC2, ECR, Nginx, Gunicorn) with CloudWatch monitoring,
                reduced cloud costs by 35% through resource optimization and containerization.
              </li>
              <li>
                Set up CI/CD with GitHub Actions, automating builds, deployments, and environment configuration.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Python · Django · React.js · REST APIs · PostgreSQL · Docker · AWS (EC2, ECR, CloudWatch) · Nginx · Gunicorn · Cloud Optimization
              · Full-Stack Development
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-130 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Aug 2025</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">CIBC</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Developer Co-op</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">Banking</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-100 w-75">
            <p className="text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Worked as a Software Developer within Enterprise Financial Technology, automating internal business reporting systems and
              improving data workflows.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Automated a weekly business intake reporting workflow used by senior management by replacing 700+ lines of rigid VBA
                with ~300 modular Python, reducing runtime by 50% and eliminating manual data cleanup.
              </li>
              <li>
                Ensured reliability by writing a full test suite (100% coverage) and documenting system operation for non-technical staff.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Python · Excel Automation · SharePoint · Unit Testing · Waterfall · Pytest
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-127 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Aug 2025</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">University of Alberta</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Engineer & AI/ML Research Assistant</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">AI & ML Research</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-90 w-75">
            <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Assisted in Indigenous machine translation with the Human-Centered Autonomy lab.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Consolidated 50+ raw files into 1,000+ Cree English pairs; evaluated data-driven translation accuracy using automated
                metrics (BLEU, COMET, etc.), comparing RAG vs. ICL architectures for Indigenous language translation.
              </li>
              <li>
                Developed a full-stack evaluation interface for user model testing (10-100 users), integrating AWS EC2 deployment.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Python · Flask · React · Javascript · Figma · NLP Metrics · RAG · ICL
            </p>
          </div>
        </motion.div>
      </motion.div>

      <p className="mt-10 text-xl text-left font-inria text-tantxt">2024</p>

      <motion.div
        className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 items-start justify-items-center"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-130 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">May 2024 - Aug 2024</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">Telesat Canada</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Engineering Intern</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">Satellite Telecommunication</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-100 w-75">
            <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Worked on the Constellation Capacity Management System team, improving backend and satellite network operation performance.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Refactored a microservice (REST API) processing 1.4M+ data rows by removing ~75% deprecated logic,
                introducing parallel data processing, and integrating 300K+ new satellite location rows.
              </li>
              <li>
                Developed unit tests (0% to 93% coverage) and ensured consistent API behavior with a related Java microservice,
                improving reliability and fault tolerance across services.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Python · Flask · Java · Swagger · Postman · Unit Testing · OOP · Confluence Documentation · API Development
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-115 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">Sep 2024 - April 2025</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">University of Alberta</p>
          <p className="text-lg text-left font-inria text-browntxt">Academic Support Tutor</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">Education/Mentoring</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-85 w-75">
            <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Employed through First Peoples House at the UofA to tutor students in calculus and programming courses.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Held weekly sessions for up to 5 students at a time in calculus (MATH 134, 144, 154) and programming (CMPUT 174)
              </li>
              <li>
                Helped to create exam study plans and mentored in adjusting to university and academic life.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-sm text-left font-inria text-white">
              VS Code · Calculus · Teaching · Google Workplace · Communication · Python · OOP
            </p>
          </div>
        </motion.div>
      </motion.div>

      <p className="mt-10 text-xl text-left font-inria text-tantxt">2023</p>

      <motion.div
        className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 items-start justify-items-center"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-115 w-80 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm text-right font-inria text-browntxt">May 2023 - Dec 2023</p>
          <p className="text-lg font-bold text-left font-inria text-browntxt">ATB Financial</p>
          <p className="text-md text-left font-inria text-browntxt">Indigenous Inclusion & Partnerships Intern</p>
          <p className="text-sm font-bold text-left font-inria text-browntxt">Banking</p>
          <div className="mt-2 rounded bg-background shadow-xl ring-1 ring-black/5 p-1 h-85 w-75">
            <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
            <p className="text-sm text-left font-inria text-white">
              Worked under the Entrepreneurial Growth team to develop several Financial Literacy modules for local Indigenous Communities.
            </p>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
            <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
              <li>
                Created a comprehensive learning system (10 modules on Budgeting, Investing, Mortgages, etc.) while ensuring accurate
                corporate branding and Indigenous knowledge
              </li>
              <li>
                Successfully completed the UofA Indigenous Canada course over my term.
              </li>
            </ul>
            <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
            <p className="text-xs text-left font-inria text-white">
              Google workplace (Docs, Slides, Sheets, Forms, Chat) · Financial Literacy · Indigenous Knowledge Passing · Indigenous Economics
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}