import '../index.css';
import '../App.css'; 

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-background min-h-[80vh] px-6 flex flex-col justify-center">
      <p className="mt-10 text-lg font-inria text-tantxt">My</p>
      <h1 className="text-4xl font-inria text-browntxt">Education</h1>

      {/* Main card*/}
      <div className="mt-8 relative rounded-2xl bg-imagebrdr/80 p-5 ring-1 ring-black/5 shadow-lg">
        {/* Title on main card */}
        <div className="text-3xl font-inria text-browntxt">University of Alberta</div>
        {/* Inner main card wrapper to hold two mini cards */}
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr] items-start">
          {/* Inner uni info card */}
          <div className="rounded-xl bg-background p-4 shadow ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-lg font-inria text-browntxt">Bachelor of Science</p>
                <p className="text-lg font-inria text-browntxt">Honors Computing Science</p>
              </div>
              <p className="text-md font-inria text-browntxt">2022 - 2027</p>
            </div>

            <p className="mt-3 text-md font-inria text-tantxt">My courses primarily concentrate on the fundamentals of programming and software development, but I also enjoy taking courses in artificial intelligence and machine learning, economics, Canadian Indigenous history, and business fundamentals.</p>

            <div className="mt-3 space-y-2">
              <p className="text-lg font-inria text-browntxt">Honors & Awards:</p>
              <ul className="list-disc pl-5 text-md font-inria text-tantxt">
                <li>NSERC Undergraduate Student Research Award (2025)</li>
                <li>Dean's Honor Roll (2023-2025)</li>
                <li>Jason Lang Scholarship (2023, 2024)</li>
                <li>Indigenous Careers Award (2022)</li>
              </ul>
            </div>
          </div>

          {/* Inner relevant courses card */}
          <div className="rounded-xl bg-background p-4 shadow ring-1 ring-black/5">
            <div className="mb-3 text-center text-[1.05rem] font-inria text-browntxt">
              Relevant Courses
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm font-inria text-tantxt">
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/229" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Computer Organization & Architecture I (Assembly)</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/204" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Data Structures & Algorithms</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/272" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Formal Systems & Logic in Computing Science</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/300" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Ethics of Computers & Society</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/291" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">File & Database Management (SQL, MongoDB)</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/174" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Intro to Programming I (Python, OOP)</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/174" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Intro to Programming II (Python, DSA)</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/301" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Intro to Software Engineering (Java, OOP, Android app development)</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/267" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Machine Learning I</a>
              <a href="https://apps.ualberta.ca/catalogue/course/cmput/201" target="_blank" rel="noreferrer" className="rounded-md bg-imagebrdr/60 px-2 py-1 text-center shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">Practical Programming Methogology (C, Unix)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 