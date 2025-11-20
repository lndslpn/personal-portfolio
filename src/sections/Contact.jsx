import '../index.css';
import '../App.css'; 
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';

export default function Contact() {
    return (
      <section id="contact" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

        <h1 className="text-4xl mt-10 text-left font-inria text-browntxt">
          Contact
        </h1>
        <p className="ml-1 text-lg text-left font-inria text-tantxt">
          Me
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-15">

          <a href="https://www.linkedin.com/in/landys-lepine-16267725a/" target="_blank" rel="noreferrer" 
            className="inline-flex h-50 w-50 items-center justify-center rounded-full px-5 py-2.5 bg-imagebrdr shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              <div className="items-center justify-center place-items-center">
                <img src={linkedin} alt="LinkedIn" className="h-18 w-18" />
                <p className="font-inria text-browntxt text-md">Connect with me on</p>
                <b className="font-inria text-browntxt text-xl">LinkedIn</b>
              </div>
          </a>

          <a href="mailto:landys@ualberta.ca" 
            className="inline-flex h-50 w-50 items-center justify-center rounded-full px-5 py-2.5 bg-imagebrdr shadow-xl hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 font-inria">
              <div className="items-center justify-center place-items-center">
                <img src={email} alt="LinkedIn" className="h-18 w-18" />
                <p className="font-inria text-browntxt text-md">Connect with me over</p>
                <b className="font-inria text-browntxt text-xl">email</b>
              </div>
          </a>

        </div>

      </section>
    );
  }  