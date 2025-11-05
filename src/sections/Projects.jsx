import '../index.css';
import '../App.css'; 

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

    <p className="mt-10 text-lg text-left font-inria text-tantxt">
        Software
    </p>
    <h1 className="text-4xl text-left font-inria text-browntxt">
        Projects
    </h1>

    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center">

      {/*Sentio*/}
      <div className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl">
        <p className="mt-1 text-2xl text-center font-inria text-browntxt">
          STUDENT
        </p>
        <p className="mt-1 text-xl text-center font-inria text-tantxt">
          Always learning
        </p>  
        <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
          <p className=" text-md text-center font-inria text-tantxt">
            My dedication to learning is neverending, whether it is studying as a full-time CS student, Systems Design podcasts on the bus, or staying up to date with the latest tools when developing.
          </p>  
          <p className="mt-2 text-md text-center font-inria text-tantxt">
            In tech, you commit to being a lifetime student, both inside and outside the classroom. 
          </p>  
        </div>
      </div>

      {/*Website*/}
      <div className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl">
        <p className="mt-1 text-2xl text-center font-inria text-browntxt">
          DEVELOPER
        </p>
        <p className="mt-1 text-xl text-center font-inria text-tantxt">
          Always creating
        </p>  
        <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
          <p className="text-md text-center font-inria text-tantxt">
            As someone passionate about problem-solving and innovation, I love building applications that make a difference.
          </p>  
          <p className="mt-2 text-md text-center font-inria text-tantxt">
            Whether it's a personal project or a collaborative effort, I enjoy turning ideas into reality and providing solutions to problems through code. 
          </p>  
        </div>
      </div>

      {/*Coming Soon*/}
      <div className="rounded bg-imagebrdr ring-1 ring-black/5 p-6 shadow-md transition-all duration-300 ease-out transform-gpu hover:-translate-y-2 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl">
        <p className="mt-1 text-2xl text-center font-inria text-browntxt">
          COMMUNITY-DRIVEN
        </p>  
        <p className="mt-1 text-xl text-center font-inria text-tantxt">
          Always prioritizing
        </p>
        <div className="mt-4 rounded bg-background shadow-xl ring-1 ring-black/5 p-3 h-65 w-65 place-items-center">
          <p className="text-md text-center font-inria text-tantxt">
              My background as a Nêhiyaw (Cree) & Métis woman has instilled in me a strong sense of community and the importance of giving back.
            </p>  
            <p className="mt-2 text-md text-center font-inria text-tantxt">
              I will always create space for my community in all I do, and I am committed to using my resources to make a positive impact.
            </p> 
        </div>
      </div>

    </div>

    </section>
    );
  }  