import React from 'react';
import pic8 from "../images/pic8.jpg"
import pic9 from "../images/pic9.jpg"

const testimonials = [
  {
    name: "Sarah Ali",
    image: pic8,
    feedback: "This gym changed my life! Amazing trainers and vibes.",
  },
  {
    name: "Ahmed Khan",
    image: pic9,
    feedback: "The equipment is top-notch and the staff is super friendly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100"  id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((client, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={client.image}
              alt={client.name}
              className="w-24 h-24 mx-auto rounded-full  object-center md:object-cover mb-4"
            />
            <p className="text-gray-700 italic mb-2">"{client.feedback}"</p>
            <h4 className="text-md font-semibold">{client.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
