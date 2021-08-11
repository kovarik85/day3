import React from 'react';
import './style.css';
import Button from './Button.js';

export default function App() {
  return (
    <div>
      <h1>Gombok már 100-adjára</h1>
      <Button id="one" text="Gombocska" />
      <Button id="one" text="Gombocska" disabled />
      <Button id="one" text="Gombocska" />
      <Button id="one" text="Gombocska" />
      <Button id="one" text="Gombocska" />
    </div>
  );
}
