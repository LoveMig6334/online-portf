import Activities from "./components/Activities";
import Evaluation from "./components/Evaluation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PersonalDetails from "./components/PersonalDetails";
import Skills from "./components/Skills";
import SubjectPortfolio from "./components/SubjectPortfolio";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-dark mb-4">About Me</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          I am a passionate high school student with a strong interest in
          technology and computer engineering. My journey began with simple
          coding blocks and has evolved into building web applications and
          competitive programming. I believe in lifelong learning and strive to
          use technology to solve real-world problems.
        </p>
      </div>
      <PersonalDetails />
      <Skills />
      <SubjectPortfolio />
      <Activities />
      <Timeline />
      <Evaluation />
      <Footer />
    </div>
  );
}
