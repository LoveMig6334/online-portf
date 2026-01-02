import {
  Activity,
  Award,
  BookOpen,
  Calendar,
  Heart,
  MapPin,
  Smile,
  User,
} from "lucide-react";
import type { DetailItemProps } from "../types";

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-light border border-slate-100 hover:border-primary/20 transition-colors">
    <div className="p-2 bg-white rounded-lg text-primary shadow-sm border border-slate-50">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-dark font-semibold text-base md:text-lg">{value}</p>
    </div>
  </div>
);

const PersonalDetails: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-dark">Personal Details</h2>
        <p className="text-slate-500 mt-2">Get to know me a little better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DetailItem
          icon={<User size={20} />}
          label="Full Name"
          value="Nawat S."
        />
        <DetailItem icon={<Smile size={20} />} label="Nickname" value="Nawat" />
        <DetailItem
          icon={<Calendar size={20} />}
          label="Date of Birth"
          value="15 January 2008"
        />
        <DetailItem
          icon={<Heart size={20} />}
          label="Religion"
          value="Buddhism"
        />
        <DetailItem
          icon={<BookOpen size={20} />}
          label="Study Plan"
          value="Science-Math-Computer"
        />
        <DetailItem
          icon={<Activity size={20} />}
          label="Hobbies"
          value="Coding, Reading, Gaming"
        />
        <DetailItem
          icon={<Award size={20} />}
          label="Likes"
          value="Technology, AI, Cats"
        />
        <DetailItem
          icon={<MapPin size={20} />}
          label="Location"
          value="Bangkok, Thailand"
        />
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">My Motto</h3>
        <p className="text-blue-50 text-lg italic">
          &quot;The best way to predict the future is to create it.&quot;
        </p>
      </div>
    </section>
  );
};

export default PersonalDetails;
