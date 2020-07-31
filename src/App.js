import React, { useEffect } from 'react';
import './App.css';
import doodle from './assets/doodle.svg';
import { gsap, TimelineLite, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: 'Architecto aliquam',
    subtitle:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.',
  },
  {
    title: 'Ceritatis placeat',
    subtitle:
      'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?',
  },
  {
    title: 'Vitae voluptates',
    subtitle:
      'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.',
  },
];

function App() {
  let t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    t1.from(
      '.bannerMain-rgt',
      3,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      'Start'
    );
    t1.staggerFrom(
      '.text',
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15,
      'Start'
    )
      .from(
        '.btn-primary',
        1,
        { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 },
        0.35
      )
      .from(
        '.paragraphAnimation',
        1,
        { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35
      )
      .from(
        'nav',
        1,
        { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35,
        'Start'
      );
    gsap.from('.content', {
      duration: 3,
      y: '100',
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.content-main',
        markers: true,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete reverse reset',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });

  return (
    <div className="App">
      <div>
        <nav>
          <div className="nav-logo">PAPERO .</div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="javascript.void()">Home</a>
              </li>
              <li>
                <a href="javascript.void()">Products</a>
              </li>
              <li>
                <a href="javascript.void()">Pricing</a>
              </li>
              <li>
                <a href="javascript.void()">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {' '}
          <section className="bannerMain">
            <div className="bannerMain-lft">
              <div className="bannerMain-lft__inner">
                <h2>
                  <div className="textWrapper">
                    <span className="text">Go paperless </span>
                  </div>
                  <div className="textWrapper">
                    <span className="text">with our App</span>
                  </div>
                </h2>
                <p className="paragraphAnimation">
                  We provide seemeless integration with <br /> multiple devices
                  so that you can take <br /> notes even better.
                </p>
              </div>
              <button className="btn-primary">request access</button>
            </div>
            <div className="bannerMain-rgt">
              <img src={doodle} alt="doodle" />
            </div>
          </section>
        </div>
      </div>
      <div className="content">
        <div className="container ">
          <main className="content-main">
            {panels.map(({ title, subtitle }) => (
              <div key={panels.index}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
