import '../index.css';
import '../App.css'; 

export const languages = ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"];
export const frontend = ["React", "HTML", "CSS", "Tailwind CSS", "Responsive Web Design"];
export const backend = ["Django", "Flask", "REST APIs", "OOP", "App Development"];
export const databases = ["PostgreSQL (Supabase)", "MongoDB", "NoSQL (Firebase)"];
export const devopsCloud = ["Docker", "AWS", "Nginx", "Gunicorn", "Linux", "CI/CD", "GitHub Actions"];
export const testingQA = ["TDD", "Unit Testing", "Postman", "Code Reviews"];
export const toolsprocess = ["Git", "GitHub", "GitLab", "Visual Studio Code", "Jira", "Figma", "Android Studio", "Agile", "RAG Pipelines"];
export const softSkills = ["Teamwork", "Communication", "Leadership", "Time Management", "Problem Solving", "Attention to Detail", "Creative Thinking"];

export default function Skills() {
    return (
      <section id="skills" className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

        <p className="mt-3 text-lg text-left font-inria text-tantxt">
            Technical & Soft
        </p>
        <h1 className="text-4xl text-left font-inria text-browntxt">
            Skills
        </h1>

        {/* Languages */}
        <p className="mt-6 text-lg text-left font-inria text-tantxt">
            Languages
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {languages.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* Frontend */}
        <p className="text-lg text-left font-inria text-tantxt">
            Frontend
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {frontend.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* Backend */}
        <p className="text-lg text-left font-inria text-tantxt">
            Backend
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {backend.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* Databases */}
        <p className="text-lg text-left font-inria text-tantxt">
            Databases
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {databases.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* DevOpsnCloud */}
        <p className="text-lg text-left font-inria text-tantxt">
            DevOps & Cloud
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {devopsCloud.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* TestingnQA */}
        <p className="text-lg text-left font-inria text-tantxt">
            Testing & QA
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {testingQA.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* Tools n Processes */}
        <p className="text-lg text-left font-inria text-tantxt">
            Tools & Processes
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {toolsprocess.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

        <hr className="my-3 border-t border-browntxt/10" />

        {/* Soft */}
        <p className="text-lg text-left font-inria text-tantxt">
            Soft Skills
        </p>
        <ul className="mt-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(9rem,1fr))]">
          {softSkills.map((s) => (
            <li key={s}>
              <span className="inline-flex w-full items-center justify-center rounded px-3 py-2 text-sm font-inria bg-imagebrdr ring-1 ring-black/5 shadow-sm 
                          transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20">
                  {s}
              </span>
            </li>
          ))}
        </ul>

    </section>
    );
  }  