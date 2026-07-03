import "./WhyChoose.css";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaCamera,
  FaPlane,
  FaBatteryFull,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlane />,
    title: "Advanced Flight",
    desc: "Experience smooth and intelligent flight powered by the latest drone technology.",
  },
  {
    icon: <FaCamera />,
    title: "4K Ultra HD Camera",
    desc: "Capture breathtaking aerial photos and cinematic videos with stunning clarity.",
  },
  {
    icon: <FaBatteryFull />,
    title: "Long Battery Life",
    desc: "Enjoy extended flight sessions with high-capacity intelligent batteries.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Worldwide shipping with fast and secure delivery to your doorstep.",
  },
  {
    icon: <FaShieldAlt />,
    title: "2-Year Warranty",
    desc: "Every drone is protected by our official warranty and quality guarantee.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our experts are always ready to help you before and after every purchase.",
  },
];

function WhyChoose() {
  return (
    <section className="why">
      <span className="subtitle">WHY CHOOSE US</span>

      <h2>Why DronePlanet?</h2>

      <p className="description">
        We provide premium drones with cutting-edge technology, reliable
        service, and exceptional customer support to help you explore the sky
        like never before.
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;