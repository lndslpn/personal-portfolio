import '../index.css';
import '../App.css'; 
import { useEffect, useRef } from "react";

/*
SCROLL TO ACTIVATE FEATURE REFERENCE
Link: https://www.youtube.com/watch?v=Sv54eYCfDZc 
Date accessed: Nov 2 2025
*/

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
    <section id="experience" className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">
      <p className="mt-3 text-lg text-left font-inria text-tantxt">Professional</p>
      <h1 className="text-4xl text-left font-inria text-browntxt">Experience</h1>

      {/*Totals box*/}
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

      {/*Experience boxes*/}
      <p className="mt-10 text-xl text-left font-inria text-tantxt">2025</p>
      <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
        <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-right font-inria text-browntxt">Sep 2025 - Dec 2025</p>
          <p className="text-lg text-left font-inria text-browntxt">TD Bank</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Engineering Intern</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="text-sm text-left font-inria text-white">Worked under the Credit Technology team under the Payments Platform.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Java</p>
        </div>
        <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Dec 2025</p>
          <p className="text-lg text-left font-inria text-browntxt">pipikwan pêhtâkwan</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Developer Intern</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="text-sm text-left font-inria text-white">Worked on wâsikan kisewâtisiwin, a LLM used to correct bias/racism towards Indigenous Peoples.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Python</p>
        </div>
        <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">          
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Aug 2025</p>
          <p className="text-lg text-left font-inria text-browntxt">CIBC</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Developer Co-op</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="mt-2 text-sm text-left font-inria text-white">Worked as a Systems Analyst and Software Developer under the Enterprise Financial Technology.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Python</p>
        </div>
        <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">          
          <p className="text-sm text-right font-inria text-browntxt">May 2025 - Aug 2025</p>
          <p className="text-lg text-left font-inria text-browntxt">University of Alberta</p>
          <p className="text-lg text-left font-inria text-browntxt">AI/ML Research Assistant</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="mt-2 text-sm text-left font-inria text-white">Assisted in Indigenous machine language translation with the Human-Centered Autonomy lab.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Python</p>
        </div>
      </div>

      <p className="mt-10 text-xl text-left font-inria text-tantxt">2024</p>
      <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-right font-inria text-browntxt">May 2024 - Aug 2024</p>
          <p className="text-lg text-left font-inria text-browntxt">Telesat Canada</p>
          <p className="text-lg text-left font-inria text-browntxt">Software Engineering Intern</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="text-sm text-left font-inria text-white">Worked under the Constellation Capacity Management System team.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Java</p>
        </div>
        <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-right font-inria text-browntxt">Sep 2024 - April 2025</p>
          <p className="text-lg text-left font-inria text-browntxt">University of Alberta</p>
          <p className="text-lg text-left font-inria text-browntxt">Academic Support Tutor</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="text-sm text-left font-inria text-white">Employed through First Peoples House at the UofA to tutor students in calculus and programming courses.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Java</p>
        </div>
      </div>

      <p className="mt-10 text-xl text-left font-inria text-tantxt">2023</p>
      <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-2 h-100 w-75 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-right font-inria text-browntxt">May 2023 - Dec 2023</p>
          <p className="text-lg text-left font-inria text-browntxt">ATB Financial</p>
          <p className="text-md text-left font-inria text-browntxt"> Indigenous Inclusion & Partnerships Intern</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Overview</p>
          <p className="text-sm text-left font-inria text-white">Worked under the Entrepreneurial Growth team to develop several Financial Literacy modules for local Indigenous Communities.</p>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Impact</p>
          <ul className="list-disc text-left pl-5 text-sm font-inria text-white">
                <li></li>
                <li></li>
                <li></li>
          </ul>
          <p className="mt-2 text-md text-left font-inria text-browntxt">Tools, Skills, & Concepts Used</p>
          <p className="text-sm text-left font-inria text-white">Google workplace (Docs, Slides, Sheets, Forms, Chat)</p>
        </div>
      </div>

    </section>
  );
  }  