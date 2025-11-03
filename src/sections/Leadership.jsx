import '../index.css';
import '../App.css'; 

export default function Leadership() {
    return (
      <section id="leadership" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

      <p className="mt-3 text-lg text-left font-inria text-tantxt">
          Community
      </p>
      <h1 className="text-4xl text-left font-inria text-browntxt">
            Leadership
      </h1>

      {/* Main card*/}
      <div className="mt-8 relative rounded-2xl bg-imagebrdr/80 p-5 ring-1 ring-black/5 shadow-lg">
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 items-start">
            <div className="rounded-xl bg-background p-4 shadow ring-1 ring-black/5">
              <p className="mt-3 text-md font-inria text-tantxt">My courses primarily concentrate on the fundamentals of programming and software development, but I also enjoy taking courses in artificial intelligence and machine learning, economics, Canadian Indigenous history, and business fundamentals.</p>
            </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
              <div className="text-right text-sm font-inria text-browntxt">
                2023 - 2024
              </div>
              <div className="text-left text-[1.05rem] font-inria text-browntxt">
                Indigenous Students Union
              </div>
              <p className="text-left text-md font-inria text-tantxt">Served as <u>Director of Academics</u> designing a system for rewarding Indigenous students for excellent grades and hosting weekly study sessions.</p>
            </div>
            <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
              <div className="text-right text-sm font-inria text-browntxt">
                2024 - 2025
              </div>
              <div className="text-left text-[1.05rem] font-inria text-browntxt">
                Indigenous in STEM Student Association
              </div>
              <p className="text-left text-md font-inria text-tantxt">Served as <u>VP External</u> where I maintained external relations with organizations on and off campus, advertising our group, finding resources, and engaging other students.</p>
            </div>
            <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
              <div className="text-right text-sm font-inria text-browntxt">
                2025 - Present
              </div>
              <div className="text-left text-[1.05rem] font-inria text-browntxt">
                IEEE University of Alberta Student Branch
              </div>
              <p className="text-left text-md font-inria text-tantxt">Currently serving as <u>VP Indigenous Relations & Student Engagement</u>, assisting in increasing engagement with our branch through advertising and events.</p>
            </div>
            <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
              <div className="text-right text-sm font-inria text-browntxt">
                2025 - Present
              </div>
              <div className="text-left text-[1.05rem] font-inria text-browntxt">
                Indigenous in STEM Student Association
              </div>
              <p className="text-left text-md font-inria text-tantxt">Leading the association as <u>Co-President</u> where I support and lead a 10 member executive and 40+ member network, </p>
            </div>
            </div>
            
          </div>
        </div>

      </section>
    );
  }  