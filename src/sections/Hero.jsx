import '../index.css';
import '../App.css'; 
import Typewriter from 'typewriter-effect';
import github from '../assets/github.png';
import resume from '../assets/resume.pdf';
import linkedin from '../assets/linkedin.png';
import pfp from '../assets/pfp.jpg';

export default function Hero() {
    return (
      <section id="top" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <img
          src={pfp}
          alt="Landys Lepine"
          className="h-50 w-50 rounded-full object-cover ring-3 ring-brand/20 ring-browntxt"
        />
        <h1 className="mt-6 text-4xl font-inria text-name">
          Landys Lepine
        </h1>
        <p className="mt-3 text-xl font-inria text-browntxt">
          BSc Computer Science Student
        </p>
        <div className="mt-2 text-lg font-inria text-browntxt">
          <Typewriter
            options={{
              strings: ['Software Developer', 'Nêhiyaw (Cree) & Métis', 'Leadership Focused', 'Community Driven'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

            <a href={resume} target="_blank" rel="noreferrer" 
            className="inline-flex h-10 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-tanbtn text-browntxt text-sm shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              Resume
            </a>

            <a href="https://www.linkedin.com/in/landys-lepine-16267725a/" target="_blank" rel="noreferrer" 
            className="inline-flex h-10 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-tanbtn shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
            <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
            </a>

            <a href="https://github.com/lndslpn" target="_blank" rel="noreferrer" 
            className="inline-flex h-10 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-tanbtn text-browntxt text-sm font-medium shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              <img src={github} alt="LinkedIn" className="h-8 w-8" />
            </a>

            <a href="mailto:landys@ualberta.ca" 
            className="inline-flex h-10 w-20 items-center justify-center rounded-full px-5 py-2.5 bg-tanbtn text-browntxt text-sm font-medium shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              Email
            </a>

          </div>

      </section>
    );
  }  