// src/pages/About.jsx
import { useRef } from 'react';

export default function About() {
  const videoRef = useRef(null);

  return (
    <div>
      <h1>About Our Agency</h1>
      
      <video 
        ref={videoRef} 
        width="400" 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
      />
      
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={() => videoRef.current.play()}>Play Showcase</button>
        <button onClick={() => videoRef.current.pause()}>Pause Showcase</button>
      </div>
    </div>
  );
}