import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h2>WE ARE UCSBREAKIN</h2>
        <h3>"A modern family connected through dance since 2010"</h3>
        <p className="about-us-header-white-space"></p>
      </header>
      <main className="about-us-content">
        <p>
          Born and raised in the city of{" "}
          <a
            href="https://www.google.nl/maps/place/Goleta,+CA/"
            target="_blank"
            alt="Goleta"
            className="about-us-content-link"
          >
            Goleta
          </a>{" "}
          in the coast of{" "}
          <a
            href="https://www.google.nl/maps/place/California"
            target="_blank"
            alt="California"
            className="about-us-content-link"
          >
            California
          </a>
          . From taking the competition game a little too seriously, our
          passions became a lifestyle. We are known for moving as a unit and
          taking steps most breaking crews wouldn't take.
        </p>
        <p>
          Some might know us from dance performances, some know us from
          different universities and colleges or our most recent appearance on{" "}
          <a
            href="https://www.youtube.com/watch?v=3Ro9ruSGbbg&list=PLe-pwVMvaUeuZP5rUAb_BTJ47aIYsGN7D"
            target="_blank"
            alt="I Need A Break Volume 3"
            className="about-us-content-link"
          >
            I Need A Break Vol. 3
          </a>{" "}
          . Today you can find us in the University Of California, Santa
          Barbara, from the battle stage to the theater or just on social media
          where we keep everyone entertained throughout the school year.
        </p>
        <p>
          Our main reason why we started was that we were passionate about
          battles.
        </p>
        <p>
          The culture of Breaking is what got us where we are today. It taught
          us to be original not just as individuals but also as a collective: we
          move with different bodies in the same mindstate to get to our
          destination. Founded in 2010 by Anthony Manzon A.K.A{" "}
          <a
            href="https://www.youtube.com/watch?v=x0w3JNCTXss"
            target="_blank"
            alt="Kid Nasty"
            className="about-us-content-link"
          >
            Kid Nasty
          </a>{" "}
          and Joey Kao A.K.A{" "}
          <a
            href="https://www.youtube.com/watch?v=CojVYWuA_VU"
            target="_blank"
            alt="Kaotyk"
            className="about-us-content-link"
          >
            Kaotyk
          </a>
          , UCSBreakin' started with nothing but a small mat, a boombox, and a
          passion for breaking. Fast forward fourteen years, and we've grown
          into one of the Central Coast's largest crews of B-Boys and B-Girls,
          all united by a love for Hip-Hop and a mission to bring its energy to
          Santa Barbara. We're not just students or a crew—we're a family. If
          you're ever in town, come vibe with us and be part of the movement!
        </p>
        <p>
          "It's time, be great." - Kid Nasty These words inspire us to face
          every challenge head-on. No matter the outcome, we know we'll overcome
          it together.
        </p>
        <p>
          Apart from all the lights and cameras, we want to give our audience a
          closer look and be involved with UCSBreakin.
        </p>
        <p className="about-us-content-hashtag">#TheDecadeOfUCSBreakin</p>
        <p>
          *Breaking or Bboying is the ORIGINAL term of our Artform. “Breakdance”
          is a term unfortunately created by the media unused in our community.
        </p>
        <div className="meet-the-crew-container">
          <h2>Meet the crew</h2>
          <div className="meet-the-crew-grid">
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Lucas Joseph</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Ian Shiens</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Scott Yen Zai</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Arielle Leong</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Hong10</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Matthew</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Hayate</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Talia</p>
            </div>
            <div className="meet-the-crew-each">
              <img src="/src/static/placeholder.png" alt="placeholder" />
              <p className="meet-the-crew-title">Brian Lew</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
