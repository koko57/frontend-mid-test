import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import './styles.scss';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section id="top">
          <span className="top">top</span>
        </section>
        <div className="wrapper">
          <section id="about" className="section section--about">
            <h2>About</h2>
            <Button link={'/list'} text="Our houses" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nulla sed fugiat nam nesciunt rerum voluptas possimus? Eius, harum
              exercitationem! Animi saepe laboriosam dignissimos velit
              voluptatibus unde soluta voluptas doloremque?
            </p>
          </section>
          <section id="gallery" className="section section--gallery">
            <div className="gallery__item gallery__item--text"> logo </div>
            <div className="gallery__item gallery__item--pic1" />
            <div className="gallery__item gallery__item--pic2" />
            <div className="gallery__item gallery__item--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              molestiae.
            </div>
          </section>
          <section id="services" className="section section--services">
            <h3>Houses</h3>
            <h3>Apartaments</h3>
            <h3>Rooms</h3>
            <h3>Buy</h3>
            <h3>Rent</h3>
          </section>
          <section id="offer" className="section section--offer">
            <h2>Offer</h2>
            <Button link={'/create'} text="Create new" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nulla sed fugiat nam nesciunt rerum voluptas possimus? Eius, harum
              exercitationem! Animi saepe laboriosam dignissimos velit
              voluptatibus unde soluta voluptas doloremque?
            </p>
          </section>
        </div>
        <div className="footer">
          <a href="#top">Back to top</a>
        </div>
      </Fragment>
    );
  }
}

export default Index;
