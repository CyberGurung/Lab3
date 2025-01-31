import React, { useState, useEffect } from 'react';
import './App.css';
import img1 from './img1.jpg'; // Niagara Falls
import img2 from './img2.jpg'; // CN Tower
import img3 from './img3.jpg'; // Rogers Centre

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Navbar with Preserved Links */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#hero">Rijan Gurung</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.tripadvisor.ca/Attractions-g155019-Activities-Toronto_Ontario.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Best Places to Visit in Canada
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hero">Hero Section</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#three-columns">Three-Column Section</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-info ml-2" onClick={toggleModal}>©</button>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="hero" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Explore the Beauty of Nature</h1>
            <p>Embrace the serenity and tranquility of the natural world.</p>
            <a href="#three-columns" className="btn btn-primary btn-lg">
              Explore Sections
            </a>
          </div>
        </div>
      </section>

      {/* Three-Column Section with Hover Effects */}
      <section id="three-columns" className="container py-5">
        <h2 className="text-center mb-4">Best Places to Visit</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Niagara Falls" />
              <div className="card-body">
                <h5 className="card-title">Niagara Falls</h5>
                <p className="card-text">
                  Niagara Falls is one of the world's most breathtaking waterfalls, offering stunning views and boat tours.
                </p>
                <a
                  href="https://www.niagarafallstourism.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={img2} className="card-img-top" alt="CN Tower" />
              <div className="card-body">
                <h5 className="card-title">CN Tower</h5>
                <p className="card-text">
                  The CN Tower is an iconic landmark in Toronto, offering panoramic city views and the thrilling EdgeWalk.
                </p>
                <a
                  href="https://www.cntower.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={img3} className="card-img-top" alt="Rogers Centre" />
              <div className="card-body">
                <h5 className="card-title">Rogers Centre</h5>
                <p className="card-text">
                  Rogers Centre is a multi-purpose stadium in Toronto, home to the Toronto Blue Jays and various events.
                </p>
                <a
                  href="https://www.mlb.com/bluejays/ballpark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Icons */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2025 Rijan Gurung</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/rijan.lamagurung.9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/rijan-gurung-1a424428b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5>Copyright Information</h5>
              <button className="close-btn" onClick={toggleModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>Copyright &copy; 2025 Rijan Gurung. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {!isTop && (
        <button onClick={scrollToTop} className="scroll-top-btn">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
