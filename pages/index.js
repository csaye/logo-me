import { useState } from 'react';

import { fonts } from '../data/fonts';

import styles from '../styles/Index.module.css';

export default function Index() {
  const [title, setTitle] = useState('');
  const [font, setFont] = useState('Roboto');

  return (
    <div>
      <h1>LogoMe</h1>
      <input
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <h1 style={{ fontFamily: font }}>{title}</h1>
      <select value={font} onChange={e => setFont(e.target.value)}>
        {
          fonts.map(font =>
            <option value={font} key={font}>{font}</option>
          )
        }
      </select>
    </div>
  );
}
