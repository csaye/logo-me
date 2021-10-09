import { useEffect, useRef, useState } from 'react';

import { fonts, weights } from '../data/fonts';

import styles from '../styles/Index.module.css';

const width = 256;
const height = 256;

let canvas, ctx;

export default function Index() {
  const canvasRef = useRef();

  const [title, setTitle] = useState('');
  const [font, setFont] = useState('Roboto');
  const [weight, setWeight] = useState('400');

  // get canvas context on start
  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
  }, []);

  return (
    <div>
      <h1>LogoMe</h1>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />
      <input
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <select value={font} onChange={e => setFont(e.target.value)}>
        {
          fonts.map(font =>
            <option value={font} key={font}>{font}</option>
          )
        }
      </select>
      <select value={weight} onChange={e => setWeight(e.target.value)}>
        {
          weights.map(weight =>
            <option value={weight} key={weight}>{weight}</option>
          )
        }
      </select>
    </div>
  );
}
