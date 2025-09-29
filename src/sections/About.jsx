import '../index.css';
import '../App.css'; 

export default function About() {
    return (
      <section id="about" className="scroll-mt-10 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

        <p className="mt-3 text-lg text-left font-inria text-tantxt">
            Some more information
        </p>
        <h1 className="text-4xl text-left font-inria text-browntxt">
              About Me
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 min-h-72" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 min-h-72" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 min-h-72" />
        </div>

      </section>
    );
  }  