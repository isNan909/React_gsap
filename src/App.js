import React from 'react';
import './App.css';
import doodle from './assets/doodle.svg';

function App() {
  return (
    <div className="App container">
      <section className="bannerMain">
        <div className="bannerMain-lft">
          <h2>Go paperless <br/>with our App</h2>
          <p>We provide seemeless integration with <br/> multiple devices so that you can take <br/> notes even better.</p>
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


