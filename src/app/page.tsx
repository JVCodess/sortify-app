// src/app/page.tsx

import Navbar from './Navbar';  
import Hero from './Hero';  
import SortifyDemo from './SortifyDemo';  
import Showcase from './Showcase';
import Shop from './Shop';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Showcase /> {/* Add the Showcase component */}
        <SortifyDemo />
        <Shop />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}





