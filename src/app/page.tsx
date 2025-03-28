// src/app/page.tsx
import Image from 'next/image';
import Navbar from './Navbar';  
import Hero from './Hero';  
import Songs from './Songs';  
import Showcase from './Showcase';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Showcase /> {/* Add the Showcase component */}
        <Songs />
      </main>
    </div>
  );
}





