import React from 'react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-tango-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-tango-dark mb-6 tracking-tight">I Nostri Corsi</h2>
          <p className="text-tango-gray text-xl max-w-2xl mx-auto font-light">
            Discipline curate nei minimi dettagli per ogni livello di esperienza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-500 hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={`Corso di ${course.title} presso Dana's Club Roma`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-tango-dark mb-3">
                  {course.title}
                </h3>
                <p className="text-tango-gray mb-0 text-base leading-relaxed flex-1 whitespace-pre-line">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;