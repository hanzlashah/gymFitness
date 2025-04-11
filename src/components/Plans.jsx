import React from 'react';
import { plans } from '../data/data';

const Plans = () => {
  return (
    <section className="py-16 px-6 bg-white"  id="plans">
      <h2 className="text-3xl font-bold text-center mb-10">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.id} className="border p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-xl text-green-600 font-semibold mb-4">{plan.price}</p>
            <ul className="text-gray-700 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
