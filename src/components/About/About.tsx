import './About.css';
import aboutImage from '../../images/about_image.png';

export default function About() {
  return (
    <section className="about">
      <img src={aboutImage} className="about__image" alt="author avatar" />
      <div className="about__text-wrapper">
        <h2 className="about__header">About the author</h2>
        <p className="about__text">
          I&apos;m a former script kiddie that decided to finally start doing
          something useful. Other than that my interests include DJing, sim
          racing, and writing embedded code.
        </p>
      </div>
    </section>
  );
}
