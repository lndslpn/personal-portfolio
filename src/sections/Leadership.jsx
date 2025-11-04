import '../index.css';
import '../App.css'; 

export default function Leadership() {
    return (
      <section id="leadership" className="scroll-mt-20 bg-background min-h-[80vh] flex flex-col items-left justify-center text-center px-6">

      <p className="mt-10 text-lg text-left font-inria text-tantxt">
          Community
      </p>
      <h1 className="text-4xl text-left font-inria text-browntxt">
            Leadership
      </h1>

      {/* Main card*/}
      <div className="mt-8 relative rounded-2xl bg-imagebrdr/80 p-5 ring-1 ring-black/5 shadow-lg">
          <div className="p-6 text-md font-inria text-browntxt">In all of the work I do, I always keep my Indigenous, tech, 
              and academic communities in mind. I find passion in being able to give back and support others while also 
              strenghtening my own leadership, empathy, and communication skills.</div>
            <div className="grid grid-cols-1 gap-2">
              <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
                  <div className="text-right text-sm font-inria text-browntxt">
                    2025 - Present
                  </div>
                  <div className="text-left text-[1.05rem] font-inria text-browntxt">
                    Indigenous in STEM Student Association
                  </div>
                  <p className="text-left text-md font-inria text-tantxt">Leading the association as <u>Co-President</u> where I support 
                    a 10 member executive team and 40+ member network, find funding for the association ($3000+), oversee regular operations (events, weekly meetings, 
                    member onboarding), and continue to find and provide resources for our association and members.</p>
                </div>
                <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
                  <div className="text-right text-sm font-inria text-browntxt">
                    2025 - Present
                  </div>
                  <div className="text-left text-[1.05rem] font-inria text-browntxt">
                    IEEE University of Alberta Student Branch
                  </div>
                  <p className="text-left text-md font-inria text-tantxt">Currently serving as <u>VP Indigenous Relations & Student Engagement</u>, 
                    assisting in increasing engagement with our branch through advertising and events. This includes supporting and advertising local events,
                    creating and facilitating in local branch activities, and work to share IEEE resources and membership with students on campus.</p>
                </div>
                <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
                  <div className="text-right text-sm font-inria text-browntxt">
                    2024 - 2025
                  </div>
                  <div className="text-left text-[1.05rem] font-inria text-browntxt">
                    Indigenous in STEM Student Association
                  </div>
                  <p className="text-left text-md font-inria text-tantxt">Served as <u>VP External</u> where I maintained external relations with 
                    10+ organizations on and off campus, advertising our group through email and social media, found resources for our network (scholarships, work opportunities, 
                    academic resources), and engaged other students about our association.</p>
                </div>
                <div className="rounded-xl bg-background p-2 shadow ring-1 ring-black/5">
                  <div className="text-right text-sm font-inria text-browntxt">
                    2023 - 2024
                  </div>
                  <div className="text-left text-[1.05rem] font-inria text-browntxt">
                    Indigenous Students Union
                  </div>
                  <p className="text-left text-md font-inria text-tantxt">Served as <u>Director of Academics</u> where I designed a system for rewarding 
                    Indigenous students for excellent grades and hosting weekly study sessions to facilitate community and academic excellence.</p>
                </div>
            </div>
            
          </div>
      </section>
    );
  }  