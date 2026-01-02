import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Globe, Book, Cpu, ArrowUpRight } from 'lucide-react';

const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: <Calculator size={32} />,
    description: 'Calculus, Statistics, and Logic Puzzles',
    color: 'bg-blue-50 text-blue-600',
    hover: 'hover:border-blue-200',
    colSpan: 'md:col-span-1',
  },
  {
    id: 'thai',
    name: 'Thai Language',
    icon: <Book size={32} />,
    description: 'Literature Analysis & Creative Writing',
    color: 'bg-yellow-50 text-yellow-600',
    hover: 'hover:border-yellow-200',
    colSpan: 'md:col-span-1',
  },
  {
    id: 'social',
    name: 'Social Studies',
    icon: <Globe size={32} />,
    description: 'History, Geography & Economics',
    color: 'bg-emerald-50 text-emerald-600',
    hover: 'hover:border-emerald-200',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'science',
    name: 'Science & Tech',
    icon: <Cpu size={32} />,
    description: 'Physics, Chemistry, Biology & Computer Science',
    color: 'bg-indigo-50 text-indigo-600',
    hover: 'hover:border-indigo-200',
    colSpan: 'md:col-span-2',
  },
];

const SubjectPortfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                Academic <br/>
                <span className="text-primary">Masterpieces</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
                Explore my work categorized by subject. Click on a card to see detailed projects.
            </p>
        </div>
        <div className="hidden md:block">
            <span className="text-slate-300 font-bold text-6xl opacity-20">2024</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            to={`/subject/${subject.id}`}
            className={`group relative p-8 rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${subject.hover} ${subject.colSpan} flex flex-col justify-between min-h-[240px]`}
          >
            <div className="flex justify-between items-start">
              <div className={`p-4 rounded-2xl ${subject.color}`}>
                {subject.icon}
              </div>
              <div className="bg-slate-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-slate-400" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                {subject.name}
              </h3>
              <p className="text-slate-500 mt-2 font-medium">
                {subject.description}
              </p>
            </div>
            
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 rounded-3xl -z-10 transition-opacity" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SubjectPortfolio;