import '../index.css';
import '../App.css'; 
import github from '../assets/github.png';

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col justify-center text-center px-6">

    <p className="mt-10 text-lg text-left font-inria text-tantxt">
        Software
    </p>
    <h1 className="text-4xl text-left font-inria text-browntxt">
        Projects
    </h1>

    <div className="mt-10 place-items-center">

      <div className="mt-10 grid grid-cols-1 gap-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center">

        {/*Sentio*/}
        <div className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md place-items-center">
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            Sentio
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Mobile Android Application
          </p>  
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-50 w-75 place-items-center">
            <p className=" text-md text-center font-inria text-tantxt">
            Sentio helps users express, track, and understand their emotional well-being. Users can share public or private 
            mood posts with images and geolocation, follow others, discover nearby posts, and gain insight into mood trends 
            through visual analytics.</p>   
          </div>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-40 w-75 place-items-center">
            <p className=" text-md text-center font-inria text-tantxt">
              Agile Methodologies · Android Studio · Espresso · Figma · Firebase (Auth, Cloud Firestore, Storage)· Github · Google Maps SDK · Java · JUnit · Mermaid · Teamwork & Collaboration · XML
            </p>   
          </div>
          <a href="https://github.com/cmput301-w25/project-bread" target="_blank" rel="noreferrer" 
              className="mt-5 inline-flex h-15 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-background text-browntxt text-sm font-medium shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              <img src={github} alt="LinkedIn" className="h-8 w-8" />
            </a>
        </div>

        {/*Website*/}
        <div className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md place-items-center">
          <p className="mt-1 text-2xl text-center font-inria text-browntxt">
            Landys Lepine
          </p>
          <p className="mt-1 text-xl text-center font-inria text-tantxt">
            Personal Portfolio
          </p>  
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-50 w-75 place-items-center">
            <p className=" text-md text-center font-inria text-tantxt">
              I wanted to improve my web and responsive design skills,
            and I've always dreamed of building my own website from scratch—so I did. This project strengthened my knowledge of JavaScript, React, and user intuitive design.
            </p>   
          </div>
          <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-40 w-75 place-items-center">
            <p className="mt-4 text-md text-center font-inria text-tantxt">
              CSS (Tailwind) · Figma · GitHub · HTML · JavaScript/TypeScript · React · React Router · Responsive Web Design · Vercel/Netlify · Vite </p>   
          </div>
          <a href="https://github.com/lndslpn/personal-portfolio" target="_blank" rel="noreferrer" 
              className="mt-5 inline-flex h-15 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-background text-browntxt text-sm font-medium shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              <img src={github} alt="Github" className="h-8 w-8" />
            </a>
        </div>

      </div>

      {/*Coming Soon*/}
      <div className="mt-10 w-100 rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md place-items-center">
        <p className="mt-1 text-2xl text-center font-inria text-browntxt">
          COMING SOON
        </p>  
        <p className="mt-1 text-md text-center font-inria text-tantxt">
          Being a full-time student, student leader, working 1-2 jobs at a time, and active community member can get time consuming. 
        </p>
        <p className="mt-1 text-md text-center font-inria text-tantxt">
          However, I don't let that stop me from always trying to strengthen my skills and demonstrate my passions through hands-on projects.
        </p>
        <p className="mt-1 text-md text-center font-inria text-tantxt">
          Stay tuned for upcoming projects that solve real problems for myself, my community, and the world.
        </p>
      </div>

    </div>

    </section>
    );
  }  