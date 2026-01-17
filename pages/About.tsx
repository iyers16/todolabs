
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          TODO LABS<Typewriter text="// SOLVING PROBLEMS THAT SHOULD'NT EXIST" speed={75} />
        </h1>
        <p className="text-green-700 max-w-2xl leading-relaxed text-sm md:text-base">
          OUR MISSION IS TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE, DELIVERING PRODUCTS THAT AREN'T JUST TOOLS, 
          BUT INTELLIGENT COUNTERPARTS THAT REASON, DECIDE, AND ACT IN COMPLEX ENVIRONMENTS.
        </p>
      </section>

      <section className="bg-green-900/10 p-8 rounded border border-green-900">
        <h3 className="text-xl font-bold mb-4 text-green-300">INTERESTED IN THE FRONTIER?</h3>
        <p className="text-sm text-green-700 mb-6 max-w-xl">
          If you are solving problems at the edge of possibility, we should talk.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-2 font-bold hover:bg-green-400 transition-colors"
        >
          GIVE US A NEW TODO <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default About;
