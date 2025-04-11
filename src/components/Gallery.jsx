import React from 'react';
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

const images = [pic1, pic2, pic3];

const Gallery = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-10">Our Gym Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={`${img}`}
            alt={`gym ${idx}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
