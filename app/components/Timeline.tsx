"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2021",
    grade: "M.1",
    title: "Freshman Year",
    desc: "Started High School",
    bullets: ["GPA 3.85", "Science Club Member"],
  },
  {
    year: "2022",
    grade: "M.2",
    title: "Exploration",
    desc: "Discovered Coding",
    bullets: ["Won Math Contest", "Started Python"],
  },
  {
    year: "2023",
    grade: "M.3",
    title: "Junior High Grad",
    desc: "Academic Excellence",
    bullets: ["GPA 3.92", "Head of Class"],
  },
  {
    year: "2024",
    grade: "M.4",
    title: "Current Year",
    desc: "Senior High Start",
    bullets: ["Computer Science Major", "Student Council"],
    current: true,
  },
  {
    year: "2025",
    grade: "M.5",
    title: "Preparation",
    desc: "University Prep",
    bullets: ["SAT Exams", "Project Portfolio"],
  },
  {
    year: "2026",
    grade: "M.6",
    title: "Graduation",
    desc: "Future Goal",
    bullets: ["Target Engineering", "Top University"],
  },
];

const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const current = scrollRef.current;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Milestones
          </span>
          <h2 className="text-3xl font-bold text-dark mt-2">
            My Educational Journey
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:text-primary md:-left-4"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:text-primary md:-right-4"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar py-10 px-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex relative min-w-max px-8">
              {/* Central Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 rounded-full" />

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative w-80 shrink-0 flex flex-col items-center group snap-center"
                  style={{ marginTop: index % 2 === 0 ? "-140px" : "140px" }}
                >
                  {/* The Dot */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 z-10 transition-all duration-300
                        ${
                          event.current
                            ? "bg-secondary border-secondary shadow-[0_0_0_8px_rgba(250,204,21,0.2)] scale-125"
                            : "bg-white border-primary group-hover:scale-110"
                        }
                    `}
                  ></div>

                  {/* Connector Line */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-slate-200 -z-10
                        ${
                          index % 2 === 0 ? "top-full mt-3" : "bottom-full mb-3"
                        }
                    `}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`
                        relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-64 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30
                        ${
                          event.current
                            ? "ring-2 ring-secondary ring-offset-2"
                            : ""
                        }
                    `}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        event.current
                          ? "bg-secondary text-dark"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {event.grade}
                    </span>
                    <h3 className="text-xl font-bold text-dark">
                      {event.year}
                    </h3>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">{event.desc}</p>

                    <div className="text-left bg-slate-50 p-3 rounded-xl">
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                        {event.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
