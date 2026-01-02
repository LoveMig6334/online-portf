import React from 'react';

const activities = [
  {
    id: 1,
    title: 'Student Council President',
    desc: 'Led the student body in organizing events and representing student voices.',
    image: 'https://picsum.photos/600/400?random=1',
    size: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Science Camp 2023',
    desc: 'Participated in a 3-day rigorous science innovation camp.',
    image: 'https://picsum.photos/400/400?random=2',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Volunteer Work',
    desc: 'Community service at local orphanage.',
    image: 'https://picsum.photos/400/400?random=3',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Robotics Competition',
    desc: 'National finalist in robotics design.',
    image: 'https://picsum.photos/600/300?random=4',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-dark text-white rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-slate-700 pb-8">
            <div>
                <span className="text-secondary font-bold tracking-wider uppercase text-sm">Beyond Academics</span>
                <h2 className="text-4xl font-bold mt-2">Activities & Leadership</h2>
            </div>
            <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-right">
                Highlights of my extracurricular involvement, leadership roles, and community contributions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`relative group overflow-hidden rounded-2xl ${activity.size} bg-slate-800`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{activity.title}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;