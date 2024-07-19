import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function Home() {
  const VideoComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    return (
      <div className="vid">
        <div className="vid-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=6LmQC-6nZTY"
            controls
            playing={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            width="880px"
            height="465px"
          />
          {!isPlaying && (
            <div className="vid-text">
              Redefining sustainable food production.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          WELCOME TO OUR STATE-OF-THE-ART AQUAPONICS FACILITY
          <img src="./images/h1-img.png" alt="" />
        </div>
        <div className="hero-image">
          <img src="./images/Home1.png" alt="Image" />
        </div>
        <div className="header-cul">
          <h2>Cultivating a greener Future.</h2>
        </div>
        <div className="disbut">
          <Link to="/services">
            <button>Discover More</button>
          </Link>
        </div>
      </section>
      <section className="features">
        <div className="features-grid">
          <div className="feature">
            <div className="faci">Facility-1</div>
            <h3>Sustainable Practices</h3>
            <img src="./images/home2.png" alt="Sustainable Practices" />
          </div>
          <div className="feature">
            <div className="faci">Facility-2</div>
            <h3>Automated Monitoring System</h3>
            <img src="./images/home3.png" alt="Automated Monitoring System" />
          </div>
          <div className="feature">
            <div className="faci">Facility-3</div>
            <h3>Data Analytics and Visualization</h3>
            <img
              src="./images/home4.png"
              alt="Data Analytics and Visualization"
            />
          </div>
        </div>
      </section>
      {/* second section */}
      <div className="second-block-home">
        <div className="container">
          <div className="imageContainer">
            <img
              src="./images/home5.png"
              alt="Fish Tank"
              className="mainImage"
            />
            <img src="./images/home6.png" alt="Plants" className="subImage" />
          </div>
          <div className="textContainer">
            <p className="introduction">Our Introductions</p>
            <h1 className="title">Aquatech genomic agriculture center</h1>
            <p className="subtitle">
              Our fish tanks and biofilters work in harmony to provide
              nutrient-rich water for the plants
            </p>
            <p className="description">
              It represents a holistic approach to food production, combining
              the best aspects of aquaculture and hydroponics. This system
              leverages the natural biological processes of fish and plants to
              create a closed-loop, efficient, and environmentally friendly
              method of food production.
            </p>
            <div className="features">
              <div className="featureItem">
                <img
                  src="./images/VegetableInBasketIcon.svg"
                  alt="Chemical Free"
                  className="featureIcon"
                />
                <p>Chemical free vegetables</p>
              </div>
              <div className="featureItem">
                <img
                  src="./images/ResearchIcon.svg"
                  alt="Genomic Research"
                  className="featureIcon"
                />
                <p>Genomic Research</p>
              </div>
            </div>
            <ul className="list">
              <li>Lorem Ipsum is not simply random text.</li>
              <li>Making this the first true generator on the internet.</li>
            </ul>
            <button className="button">Discover More</button>
          </div>
        </div>
      </div>
      <div className="features-section">
        <h2>Our Features</h2>
        <h3>Key technologies</h3>
        <div className="tech-cards">
          <div className="card">
            <img src="./images/home15.png" alt="Soilless farming" />
            <h4>Soilless farming</h4>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="./images/home16.png" alt="Deep Water Culture" />
            <h4>Deep Water Culture</h4>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="./images/home17.png" alt="Year-Round Production" />
            <h4>Year-Round Production</h4>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="./images/home18.png" alt="Genomics Integration" />
            <h4>Genomics Integration</h4>
            <button>Read More</button>
          </div>
        </div>
        <div className="footer-links">
          <button>Aquaponics</button>
          <button>Ongoing Projects</button>
          <button>Precision Nutrition System™</button>
          <button>New technologies</button>
        </div>
      </div>
      <section className="fourth-home">
        <div className="title-4">Explore Project</div>
        <div className="introduction-4">
          Nature's harmony, technology's efficiency.
        </div>
        <div className="exp-img">
          <VideoComponent />
          <div className="img-4">
            <div className="img1">
              <img src="./images/home11.png" alt="" />
              <div className="imgtext">
                <h4>Grow Bed and Plant System</h4>
              </div>
            </div>
            <div className="img2">
              <img src="./images/home12.png" alt="" />
              <div className="imgtext">
                <h4>Harvesting and Processing Area</h4>
              </div>
            </div>
            <div className="img2">
              <img src="./images/home13.png" alt="" />
              <div className="imgtext">
                <h4>Automated Monitoring System</h4>
              </div>
            </div>
            <div className="img2">
              <img src="./images/home14.png" alt="" />
              <div className="imgtext">
                <h4>Fish Tanks and Biofilters</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-home">
        <div className="img5">
          <span
            style={{
              fontFamily: "Covered By Your Grace, sans-serif",
              color: "#EEC044",
              fontSize: "24px",
            }}
          >
            Fish Tanks and Biofilters
          </span>

          <img src="./images/home19.png" alt="" />
        </div>
        <div className="five-text">
          <div className="title-5">
            <h1>Overview of the center’s mission</h1>
          </div>
          <div className="para-5">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don't look even.
          </div>
          <div className="five-h4">Quality Organic Vegetables</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <div className="five-h4">Sustainable food production.</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <div className="five-h4">Cost Efficiency</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <button className="button">Discover More</button>
        </div>
      </section>

      <section className="six-home">
        <div className="six-title">
          <span
            style={{
              fontFamily: "Covered By Your Grace, sans-serif",
              color: "#EEC044",
              fontSize: "20px",
            }}
          >
            Success Stories
          </span>
          <div className="title-6">
            <h1>What They're Talking About AGAC</h1>
          </div>

          <div className="six-p">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don't look even.
          </div>
          <button className="button">View All Stories</button>
        </div>
        <div className="user-six">
          <div className="user-p1">
            <div className="six-p2">
              There are many variations of passages of available but the
              majortity have sufferred alteration in some form by injected humor
              or random word which don't look even.
            </div>
            <div className="user-name">
              <h3>Bonnie Tolbert</h3>
            </div>
          </div>
          <div class="circle"></div>
        </div>
      </section>
    </>
  );
}

export default Home;