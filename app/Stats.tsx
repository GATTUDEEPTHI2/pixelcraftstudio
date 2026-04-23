"use client";

import { useEffect, useState } from "react";

function Counter({
  end,
  label,
}: {
  end: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stats-premium-card">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-block">
      <p className="section-tag">Why Brands Choose Us</p>
      <h2 className="section-title">
        Built to impress visitors and convert them into real inquiries.
      </h2>

      <div className="stats-premium-grid">
        <Counter end={25} label="Modern Design Concepts" />
        <Counter end={15} label="Landing Page Ideas" />
        <Counter end={100} label="Responsive Layout Quality" />
      </div>
    </section>
  );
}