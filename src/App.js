import React from "react";
import "./App.css";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';


function App() {
  return (
    <div className="container">
      <header>
        
        <div className="subheader">
          Epic Games: An American Video Game And Software Developer
          <br />
          And Publisher Based In Cary, North Carolina.
        </div>
        <img
          src={img1} alt="Fortnite" />
      </header>

      <main>
        <p>
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br />live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br />an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>

        <button className="visit-website">Visit Website</button>

        <div className="cards">
          <div className="card">
            <img
              src={img2} alt="Fortnite" />
            <h3>
              Explore Large, Destructable <br />
              Environments Where No Two Games <br />
              Are Ever The Same
            </h3>
          </div>
          <div className="card">
            <img
              src={img3} alt="Fortnite" />
            <h3>
              Team Up With Friends By Sprinting, <br />
              Climbing And Smashing Your Way To <br />
              Earn Your Victory Royale
            </h3>
          </div>
          <div className="card">
            <img
              src={img4} alt="Fortnite" />
            <h3>
              Discover Even More Ways To Play <br />
              Across Thousands Of Creator Made <br />
              Game Genres
            </h3>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="our-contribution">
        <h2>Our Contribution</h2>
        <p>
        Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user<br />community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication<br /> to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <br />
        <br />
        <br />
        <div className="stats">
          <div className="stat">
            <h3>5M</h3>
            <p>Daily User<br /> Engagement</p>
          </div>
          <div className="stat">
            <h3>$500K</h3>
            <p>Revenue Surge for an<br />Platform</p>
          </div>
          <div className="stat">
            <h3>10X</h3>
            <p>ROAS on all our <br />marketing campaigns</p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      <section className="cta">
        <h2>Interested In Delving Deeper Into The Project?</h2>
        <p>
        If you'd like to explore further details about our initiatives or any of our<br />affiliated brands, don't hesitate to connect. You can reach out to us via<br />email at {" "}
          <span className="highlight">hello@abc.com </span> or give us a call at{" "}
          <span className="highlight">+91 480 20802730.</span>.
        </p>
        <button>Ring us on Skype</button>
        <button className="contact-us">Contact Us</button>
      </section>

      <footer>
        &copy; © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
