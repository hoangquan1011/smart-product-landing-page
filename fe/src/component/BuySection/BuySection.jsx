import { useState } from "react";
import "./BuySection.css";

function BuySection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    quantity: 1,
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your order has been submitted!");
  };

  return (
    <section id="buy-section" className="buy-section">

      <h2>Order DJI AVATA 360</h2>

      <p>
        Fill in your information and we'll contact you as soon as possible.
      </p>

      <form className="order-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
        />

        <textarea
          name="note"
          rows="4"
          placeholder="Additional Notes"
          value={formData.note}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Order Now
        </button>

      </form>

    </section>
  );
}

export default BuySection;