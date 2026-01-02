import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

const projectData: Record<
  string,
  { id: number; title: string; desc: string; tags: string[]; date: string }[]
> = {
  math: [
    {
      id: 1,
      title: "Calculus Optimization",
      desc: "Minimizing material usage in packaging design using derivatives.",
      tags: ["Calculus", "Optimization"],
      date: "2023",
    },
    {
      id: 2,
      title: "Statistical Analysis",
      desc: "Surveying student sleep patterns and analyzing data with normal distribution.",
      tags: ["Statistics", "Survey"],
      date: "2022",
    },
    {
      id: 3,
      title: "Logic Puzzles",
      desc: "Created a set of logic puzzles for the school math club.",
      tags: ["Logic", "Game"],
      date: "2023",
    },
  ],
  thai: [
    {
      id: 1,
      title: "Nirat Poem",
      desc: "Composed a traditional Nirat poem about a journey to Ayutthaya.",
      tags: ["Poetry", "Traditional"],
      date: "2023",
    },
    {
      id: 2,
      title: "Short Story",
      desc: "A short story exploring themes of family and tradition in modern society.",
      tags: ["Creative Writing"],
      date: "2022",
    },
  ],
  social: [
    {
      id: 1,
      title: "Ayutthaya History Model",
      desc: "Built a 3D model of Wat Chaiwatthanaram highlighting architectural features.",
      tags: ["History", "Model"],
      date: "2022",
    },
    {
      id: 2,
      title: "Economic Analysis",
      desc: "Analysis of local market trends post-pandemic.",
      tags: ["Economics", "Research"],
      date: "2023",
    },
  ],
  science: [
    {
      id: 1,
      title: "Hydroponics System",
      desc: "Automated Arduino-based water monitoring system for lettuce.",
      tags: ["Biology", "Arduino", "IoT"],
      date: "2023",
    },
    {
      id: 2,
      title: "Chemical Reactions",
      desc: "Video demonstration of elephant toothpaste reaction rates.",
      tags: ["Chemistry", "Lab"],
      date: "2022",
    },
    {
      id: 3,
      title: "Physics Engine",
      desc: "Simple 2D physics simulation using Python.",
      tags: ["Physics", "Coding"],
      date: "2024",
    },
  ],
};

const subjectTitles: Record<string, string> = {
  math: "Mathematics",
  thai: "Thai Language",
  social: "Social Studies",
  science: "Science & Technology",
};

// Generate static params for all subject pages
export function generateStaticParams() {
  return [
    { subject: "math" },
    { subject: "thai" },
    { subject: "social" },
    { subject: "science" },
  ];
}

// Generate metadata for each subject page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const title = subjectTitles[subject] || "Subject";
  return {
    title: `${title} | Student Portfolio`,
    description: `View projects and work from ${title} category.`,
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const projects = projectData[subject] || [];
  const title = subjectTitles[subject] || "Subject";

  return (
    <div className="min-h-screen bg-surface-light">
      <nav className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mt-2">
            {title}
          </h1>
          <p className="text-slate-500 mt-4 text-lg">
            A collection of my best work and assignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-surface-light text-slate-500 text-xs font-bold px-2 py-1 rounded-md border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-slate-300 group-hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-dark mb-3">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex items-center gap-2 text-sm text-slate-400 mt-auto pt-6 border-t border-slate-50">
                <Calendar size={16} />
                <span>Completed: {project.date}</span>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No projects found for this category.
            </p>
            <Link
              href="/"
              className="text-primary font-bold mt-4 inline-block hover:underline"
            >
              Return Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
