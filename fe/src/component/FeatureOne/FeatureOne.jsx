import "./FeatureOne.css";
import featureImg from "../../img/feature1.png";

function FeatureOne() {
  return (
    <section className="feature-one">

      <div className="feature-left">

        <span className="feature-tag">
          Advanced Safety
        </span>

        <h2>
          Omnidirectional <br />
          Obstacle Sensing
        </h2>

        <p>
          Equipped with forward-facing LiDAR, Avata 360 features
          nightscape omnidirectional obstacle sensing in 360° mode,
          delivering reliable protection even during dynamic tracking
          shots.The integrated propeller guard adds another layer of safety,
          allowing pilots to fly with greater confidence in complex
          environments.
        </p>

      </div>

      <div className="feature-right">
        <img src={featureImg} alt="Obstacle Sensing" />
      </div>

    </section>
  );
}

export default FeatureOne;