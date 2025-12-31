import React from 'react';
import { SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-tango-dark mb-4 tracking-tight">Orari Settimanali</h2>
            <p className="text-tango-gray text-lg font-light">
              Lezioni serali pensate per integrarsi con i tuoi impegni quotidiani.
            </p>
          </div>
          {/* <div>
            <a href="#contact" className="text-tango-red font-semibold hover:underline">
              Scarica PDF Orari
            </a>
          </div> */}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {SCHEDULE.map((dayItem) => (
            <div key={dayItem.day} className="bg-tango-light rounded-3xl p-6 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-tango-dark mb-6 pb-4 border-b border-gray-200 group-hover:border-tango-red/20 transition-colors">
                {dayItem.day}
              </h3>
              <div className="space-y-4">
                {dayItem.courses.map((course, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-tango-red font-bold text-sm">
                      {course.time}
                    </span>
                    <span className="text-tango-dark font-semibold text-lg leading-tight mt-1">
                      {course.courseName}
                    </span>
                    <span className="text-tango-gray text-sm mt-1">
                      {course.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;