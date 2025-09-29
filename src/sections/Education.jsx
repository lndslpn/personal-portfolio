import '../index.css';
import '../App.css'; 

export default function Education() {
    return (
      <section id="education" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

        <p className="mt-3 text-lg text-left font-inria text-tantxt">
          My
        </p>
        <h1 className="text-4xl text-left font-inria text-browntxt">
          Education
        </h1>

        <div className="mt-10 place-items-center">
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-125 w-250">
          </div>
        </div>

      </section>
    );
  }  