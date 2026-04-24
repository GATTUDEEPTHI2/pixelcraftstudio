export default function CTASection() {
  return (
    <section className="section-block">
      <div className="cta-glow-card">
        <p className="section-tag">Let’s Build Something Great</p>
        <h2 className="section-title narrow">
          Ready to give your business a website that looks premium and wins trust?
        </h2>
        <p className="cta-text">
          Whether you need a landing page, business website, or a custom premium
          layout, let’s discuss the right direction for your brand.
        </p>

        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">
            Get Quote
          </a>
          <a
            href="https://wa.me/919347479356?text=Hi%20PixelCraftStudio%2C%20I%20need%20a%20website."
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}