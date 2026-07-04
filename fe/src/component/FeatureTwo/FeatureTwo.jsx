import "./FeatureTwo.css";
import feature2 from "../../img/feature2.png";

function FeatureTwo() {
  return (
    <section className="feature-two">

      {/* Hình bên trái */}
      <div className="feature-right">
        <img src={feature2} alt="ActiveTrack 360°" />
      </div>

      {/* Nội dung bên phải */}
      <div className="feature-left">

        <span className="feature-tag">
          Intelligent Tracking
        </span>

        <h2>ActiveTrack 360°</h2>

        <p>
          ActiveTrack 360° automatically selects the optimal tracking
          mode, making every flight smoother and more intelligent.
          In Standard mode, the drone maintains a steady distance and
          altitude relative to the subject, ensuring stable cinematic
          footage throughout the flight.Cycling mode reacts faster to turns, keeping the subject
          locked and framed even in fast-paced or complex environments.
        </p>

      </div>

    </section>
  );
}

export default FeatureTwo;