import { ReactElement } from 'react';
import './Preloader.css';

export default function Preloader(): ReactElement {
  return (
    <section className="preloader">
      <h2 className="preloader__title">Searching...</h2>
      <div className="preloader__animation" />
    </section>
  );
}
