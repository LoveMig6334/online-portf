"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface CriteriaProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
}

const Criteria: React.FC<CriteriaProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-slate-100 last:border-0">
      <span className="font-semibold text-dark mb-2 sm:mb-0">{label}</span>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className={`transition-transform hover:scale-110 focus:outline-none ${
              star <= value ? "text-secondary fill-secondary" : "text-slate-200"
            }`}
          >
            <Star size={28} fill={star <= value ? "#facc15" : "none"} />
          </button>
        ))}
      </div>
    </div>
  );
};

const Evaluation: React.FC = () => {
  const [ratings, setRatings] = useState({
    creativity: 0,
    punctuality: 0,
    completeness: 0,
    aesthetics: 0,
  });

  const handleChange = (key: keyof typeof ratings, value: number) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-primary font-bold uppercase text-sm tracking-wider">
              Feedback
            </span>
            <h2 className="text-3xl font-bold text-dark mt-2">
              Evaluate My Portfolio
            </h2>
            <p className="text-slate-500 mt-2">
              Help me improve by rating your experience.
            </p>
          </div>

          <div className="space-y-2 mb-8">
            <Criteria
              label="Creativity"
              value={ratings.creativity}
              onChange={(v) => handleChange("creativity", v)}
            />
            <Criteria
              label="Punctuality"
              value={ratings.punctuality}
              onChange={(v) => handleChange("punctuality", v)}
            />
            <Criteria
              label="Completeness"
              value={ratings.completeness}
              onChange={(v) => handleChange("completeness", v)}
            />
            <Criteria
              label="Aesthetics & Layout"
              value={ratings.aesthetics}
              onChange={(v) => handleChange("aesthetics", v)}
            />
          </div>

          <div className="flex flex-col gap-4">
            <textarea
              placeholder="Additional Comments (Optional)"
              className="w-full p-4 rounded-xl bg-surface-light border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary text-slate-700 resize-none h-32 outline-none"
            />
            <button className="w-full bg-dark hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-slate-300 active:scale-[0.98]">
              Submit Evaluation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
