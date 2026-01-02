"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const programmingData = [
  { name: "Python", level: 90, color: "#329ee2" },
  { name: "JavaScript", level: 85, color: "#facc15" },
  { name: "C++", level: 70, color: "#111b21" },
  { name: "HTML/CSS", level: 95, color: "#329ee2" },
  { name: "SQL", level: 60, color: "#facc15" },
];

const aptitudeData = [
  { subject: "Math", A: 120, fullMark: 150 },
  { subject: "Physics", A: 98, fullMark: 150 },
  { subject: "English", A: 86, fullMark: 150 },
  { subject: "Coding", A: 130, fullMark: 150 },
  { subject: "Chemistry", A: 85, fullMark: 150 },
  { subject: "Biology", A: 65, fullMark: 150 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            Skills &amp; Abilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Skills Bar Chart */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full"></span>
              Programming Proficiency
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={programmingData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={80}
                    tick={{ fontSize: 12, fill: "#64748b" }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    cursor={{ fill: "#f8fafb" }}
                  />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {programmingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-slate-400 text-sm mt-4">
              Proficiency Level (%)
            </p>
          </div>

          {/* Aptitude Radar Chart */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-secondary rounded-full"></span>
              Academic Aptitude
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={aptitudeData}
                >
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 150]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Student"
                    dataKey="A"
                    stroke="#329ee2"
                    strokeWidth={3}
                    fill="#329ee2"
                    fillOpacity={0.3}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-slate-400 text-sm mt-4">
              Relative Strengths
            </p>
          </div>
        </div>

        {/* Language Skills Cards (Extra) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-dark">Thai</h4>
              <p className="text-slate-500 text-sm">Native Speaker</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center text-xs font-bold text-primary">
              100%
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-dark">English</h4>
              <p className="text-slate-500 text-sm">IELTS 7.5</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-secondary flex items-center justify-center text-xs font-bold text-secondary">
              85%
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-dark">Japanese</h4>
              <p className="text-slate-500 text-sm">JLPT N4</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-slate-300 flex items-center justify-center text-xs font-bold text-slate-400">
              40%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
