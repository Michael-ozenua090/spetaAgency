// src/pages/Home.jsx
import { useRef } from 'react';

export default function Home() {
  const bottomSectionRef = useRef(null);

  const scrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Welcome to Speta Agency</h1>
      <button onClick={scrollToBottom}>Jump to Call to Action</button>
      
      <div style={{ height: '150vh', background: 'linear-gradient(#fff, #ccc)' }}></div>
      
      <div ref={bottomSectionRef} style={{ padding: '50px', background: '#4caf50', color: 'white' }}>
        <h2>Ready to start your project?</h2>
        <p>Head over to our Contact page.</p>
      </div>
    </div>
  );
}