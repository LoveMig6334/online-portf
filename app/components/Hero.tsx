import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="profile"
      className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-b from-white to-surface-light"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Profile Image Frame */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
            <Image
              src="https://picsum.photos/400/400"
              alt="Student Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md text-xl">
            👋
          </div>
        </div>

        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider mb-2">
            Hello, Swasdee Krub!
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-dark tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Nawat S.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Aspiring{" "}
            <span className="text-dark font-bold underline decoration-secondary decoration-4 underline-offset-2">
              Computer Engineer
            </span>{" "}
            &amp; Student Council Member. Welcome to my personal portfolio
            showcasing my academic projects and achievements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#portfolio"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <button className="flex items-center gap-2 bg-white text-dark border border-slate-200 hover:border-primary/50 px-8 py-3 rounded-full font-bold shadow-sm transition-colors">
              <Download size={20} className="text-primary" />
              Resume
            </button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-dark">15+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-dark">3.98</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">
                GPA
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-dark">M.4</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">
                Grade
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-dark">SC</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">
                Council
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
