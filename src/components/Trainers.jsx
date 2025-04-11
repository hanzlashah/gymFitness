import React from "react";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
const trainers = [
  {
    name: "John Doe",
    image: pic4,
    specialty: "Strength Training",
  },
  {
    name: "Emily Stone",
    image: pic5,
    specialty: "Cardio & HIIT",
  },
  {
    name: "Richard William",
    image: pic6,
    specialty: "Nutritionist",
  },
  {
    name: "Arizona Michael",
    image: pic7,
    specialty: "Gym Manager",
  },
];

const Trainers = () => {
  return (
    <section className="py-16 px-6 bg-white" id="trainers">
      <h2 className="text-3xl font-bold text-center mb-10">
        Meet Our Trainers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {trainers.map((trainer, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-52 h-52 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">{trainer.name}</h3>
            <p className="text-gray-600">{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
