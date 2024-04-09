import './About.css';
import avatarImage from '../../images/placeholder_image_06.png';

export default function About() {
  return (
    <section className="about">
      <img src={avatarImage} className="about__image" alt="author avatar" />
      <div className="about__text-wrapper">
        <h2 className="about__header">About the author</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
