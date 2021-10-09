import { useState } from 'react';

import styles from '../styles/Index.module.css';

export default function Index() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h1>LogoMe</h1>
      <input
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <p>{title}</p>
    </div>
  );
}
