import { useState } from 'react';

import { fonts, weights } from '../data/fonts';

import styles from '../styles/Index.module.css';

export default function Index() {
  const [title, setTitle] = useState('');
  const [font, setFont] = useState('Roboto');
  const [weight, setWeight] = useState('400');

  return (
    <div>
      <h1>LogoMe</h1>
      <input
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <h1 style={{ fontFamily: font, fontWeight: weight }}>{title}</h1>
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
