import React, { useEffect } from 'react';
import './App.css';
import doodle from './assets/doodle.svg';
import { TimelineLite, Power2 } from 'gsap';

function App() {
  let t1 = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    t1.from('.bannerMain-rgt', 3, { y: 1280, ease: Power2.easeOut }, 'Start');
    t1.staggerFrom(
      '.text',
      1,
      { y: 56, ease: Power2.easeIn, delay: 0.8, opacity: 0 },
      0.15,
      'Start'
    )
      .from(
        '.bannerMain-lft__inner',
        1,
        { y: 20, opacity: 0, ease: Power2.easeIn },
        1.4
      )
      .from('.btn-primary', 1, { y: 20, opacity: 0, ease: Power2.easeIn }, 1.4);
  });

  return (
    <div className="App container">
      <section className="bannerMain">
        <div className="bannerMain-lft">
          <div className="bannerMain-lft__inner">
          <h2>
            <span className="text">Go paperless </span><br />
            <span className="text">with our App</span>
          </h2>
          <p className="textAnimation">
            We provide seemeless integration with <br /> multiple devices so
            that you can take <br /> notes even better.
          </p>
          </div>
          <button class="btn-primary">request access</button>
        </div>
        <div className="bannerMain-rgt">
          <img src={doodle} alt="doodle" />
        </div>
      </section>
    </div>
  );
}

export default App;
