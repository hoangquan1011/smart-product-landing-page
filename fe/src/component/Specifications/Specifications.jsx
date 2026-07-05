import "./Specifications.css";
import {
  FaCamera,
  FaBatteryFull,
  FaSatelliteDish,
  FaShieldAlt,
  FaWind,
  FaRobot,
} from "react-icons/fa";

function Specifications() {
  const specs = [
    {
      icon: <FaCamera />,
      title: "8K Ultra Vision",
      value: "8K HDR Camera",
      desc: "Capture every detail with cinematic quality and AI stabilization.",
    },
    {
      icon: <FaBatteryFull />,
      title: "Flight Time",
      value: "42 Minutes",
      desc: "Long-lasting intelligent battery for extended adventures.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Transmission",
      value: "20 KM Range",
      desc: "Ultra-low latency HD video transmission with stable connection.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Obstacle Avoidance",
      value: "360° Sensors",
      desc: "Smart omnidirectional detection keeps every flight safe.",
    },
    {
      icon: <FaWind />,
      title: "Wind Resistance",
      value: "Level 7",
      desc: "Maintain stability even in strong outdoor wind conditions.",
    },
    {
      icon: <FaRobot />,
      title: "AI Flight",
      value: "Smart Tracking",
      desc: "Automatically follows subjects using advanced AI recognition.",
    },
  ];

  return (
    <section className="specifications">
      <div className="spec-header">
        <p className="sub-title">ENGINEERED FOR THE FUTURE</p>

        <h2>
          Technical <span>Specifications</span>
        </h2>

        <p className="description">
          Every component of Avata 360 has been designed to deliver incredible
          speed, precision, and immersive aerial experiences.
        </p>
      </div>

      <div className="spec-grid">
        {specs.map((item, index) => (
          <div className="spec-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <h1>{item.value}</h1>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specifications;