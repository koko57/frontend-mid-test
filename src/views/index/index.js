import React from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import './styles.scss';

class Index extends React.Component {
  render() {
    return (
      <div className="index-layout">
        <Navbar />
        <div className="wrapper">
          <section id="about" className="section section--about">
            <h2>About us</h2>
            <Button link={'#'} text="More about us" />
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
            <div className="gallery__item gallery__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae.</div>
          </section>
          <section id="services" className="section section--services">
            <h3>budujemy</h3>
            <h3>remontujemy</h3>
            <h3>okna</h3>
            <h3>drzwi</h3>
            <h3>inne</h3>
          </section>
          <section id="offer" className="section section--offer">
            <h2>Oferta</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nulla sed fugiat nam nesciunt rerum voluptas possimus? Eius, harum
              exercitationem! Animi saepe laboriosam dignissimos velit
              voluptatibus unde soluta voluptas doloremque?
            </p>
            <Button link={'#'} text="Zobacz pełną ofertę" />
          </section>
        </div>
      </div>
    );
  }
}

export default Index;
