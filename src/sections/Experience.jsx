import '../index.css';
import '../App.css'; 

export default function Experience() {
    return (
      <section id="experience" className="scroll-mt-30 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

        <p className="mt-3 text-lg text-left font-inria text-tantxt">
            Professional
        </p>
        <h1 className="text-4xl text-left font-inria text-browntxt">
            Experience
        </h1>

        <p className="mt-10 text-lg text-left font-inria text-tantxt">
            2025
        </p>

        <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
        </div>

        <p className="mt-10 text-lg text-left font-inria text-tantxt">
            2024
        </p>

        <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
        </div>

        <p className="mt-10 text-lg text-left font-inria text-tantxt">
            2023
        </p>

        <div className="mt-5 grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
          <div className="rounded bg-imagebrdr shadow-xl ring-1 ring-black/5 p-6 h-75 w-75 hover:opacity-80" />
        </div>

      </section>
    );
  }  