export default function Pricing() {
  return (
    <section className="section-block">
      <p className="section-tag">Packages</p>
      <h2 className="section-title">
        Affordable website solutions tailored for your business growth.
      </h2>

      <div className="pricing-grid">

        {/* Starter */}
        <div className="pricing-card">
          <p className="pricing-label">Starter</p>
          <h3>Basic Website</h3>
          <div className="price">Starting from ₹4,999</div>
          <p className="pricing-desc">
            Perfect for small businesses and local shops.
          </p>
          <ul>
            <li>Single page website</li>
            <li>Mobile responsive design</li>
            <li>Clean modern UI</li>
            <li>Contact section</li>
          </ul>
        </div>

        {/* Business */}
        <div className="pricing-card featured-pricing">
          <p className="pricing-label">Business</p>
          <h3>Professional Website</h3>
          <div className="price">Custom Pricing</div>
          <p className="pricing-desc">
            Designed based on your business goals and requirements.
          </p>
          <ul>
            <li>Multi-section website</li>
            <li>Premium UI/UX design</li>
            <li>Projects & services sections</li>
            <li>Contact form integration</li>
          </ul>
        </div>

        {/* Premium */}
        <div className="pricing-card">
          <p className="pricing-label">Premium</p>
          <h3>Advanced Website</h3>
          <div className="price">Advanced Solution</div>
          <p className="pricing-desc">
            Best for growing brands that want a strong online presence.
          </p>
          <ul>
            <li>Custom design & layout</li>
            <li>Advanced animations</li>
            <li>Brand-focused UI</li>
            <li>High-conversion structure</li>
          </ul>
        </div>

      </div>
      </section>  
  );
}
      