import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h2>WE ARE UCSBREAKIN</h2>
        <h3>"A modern family connected through dance since 2010"</h3>
      </header>
      <main className="about-us-content">
        <p>
          Born and raised in the city of{" "}
          <a
            href="https://www.google.nl/maps/place/Goleta,+CA/"
            target="_blank"
            className="about-us-content-link"
          >
            Goleta
          </a>{" "}
          in the coast of{" "}
          <a
            href="https://www.google.nl/maps/place/California"
            target="_blank"
            className="about-us-content-link"
          >
            California
          </a>
          . From taking the competition game a little too seriously, our
          passions became a lifestyle. We are known for moving as a unit and
          taking steps most breaking crews wouldn't take.
        </p>
      </main>
    </div>
  );
};

export default AboutUs;
