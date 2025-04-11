// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar />
      <div className="pt-20"> {/* add padding for fixed navbar */}
        <Hero />
        <Services />
        <Plans />
        <Gallery />
        <Trainers />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

