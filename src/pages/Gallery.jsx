// src/pages/Gallery.jsx
import { useRef } from 'react';

export default function Gallery() {
  const galleryRef = useRef(null);

  return (
    <div>
      <h1>Image Gallery</h1>
      
      <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={() => galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
          Scroll Left
        </button>
        <button onClick={() => galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>
          Scroll Right
        </button>
      </div>

      <div 
        ref={galleryRef} 
        style={{ display: 'flex', overflowX: 'scroll', width: '400px', gap: '10px' }}
      >
        <div style={{ minWidth: '300px', height: '200px', background: 'tomato' }}></div>
        <div style={{ minWidth: '300px', height: '200px', background: 'teal' }}></div>
        <div style={{ minWidth: '300px', height: '200px', background: 'gold' }}></div>
        <div style={{ minWidth: '300px', height: '200px', background: 'royalblue' }}></div>
        <div style={{ minWidth: '300px', height: '200px', background: 'purple' }}></div>
      </div>
    </div>
  );
}