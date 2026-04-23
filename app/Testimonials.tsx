"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Local Business Owner",
    role: "Retail Brand",
    text: "The design looked premium and immediately made our business feel more trustworthy online.",
  },
  {
    name: "Cafe Brand",
    role: "Food Business",
    text: "Clean layout, modern visuals, and a polished style that matched exactly what we wanted.",
  },
  {
    name: "Startup Founder",
    role: "Service Business",
    text: "The website concept felt professional, smooth, and clearly built to attract serious clients.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-block">
      <p className="section-tag">Testimonials</p>
      <h2 className="section-title">
        What people love about premium, client-focused design.
      </h2>

      <div className="testimonial-slider">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`testimonial-slide ${
              active === index ? "testimonial-active" : ""
            }`}
          >
            <div className="stars">★★★★★</div>
            <p>{item.text}</p>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${active === index ? "dot-active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}