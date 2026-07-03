import { useState } from "react";
import "./HeroSection.css";
import flyVideo from "../../video/fly5.mp4";
import demoVideo from "../../video/demo.mp4";

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero">
      {/* Video nền */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={flyVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Nội dung */}
      <div className="hero-content">


        <h1>DJI AVATA 360</h1>

        <p>
          Experience intelligent flight, cinematic 4K recording,
          obstacle avoidance, and AI-powered navigation.
          Built for creators, professionals, and adventure seekers.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => {
              const section = document.getElementById("buy-section");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Buy Now
          </button>

          <button
            className="secondary-btn"
            onClick={() => setShowVideo(true)}
          >
            Watch Demo
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>45 min</h2>
            <span>Flight Time</span>
          </div>

          <div>
            <h2>15 km</h2>
            <span>Transmission</span>
          </div>

          <div>
            <h2>4K HDR</h2>
            <span>Ultra Camera</span>
          </div>
        </div>
      </div>

      {/* Popup video */}
      {showVideo && (
        <div
          className="video-modal"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="video-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>

            <video controls autoPlay>
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;