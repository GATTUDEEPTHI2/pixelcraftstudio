"use client";

import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import Pricing from "./Pricing";
import Reveal from "./Reveal";
import Projects from "./Projects";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    {
      title: "Business Websites",
      text: "Professional websites for brands, cafes, restaurants, creators, and local businesses.",
    },
    {
      title: "Landing Pages",
      text: "High-converting pages for offers, campaigns, launches, and lead generation.",
    },
    {
      title: "Website Redesign",
      text: "Transform outdated websites into elegant, modern, premium experiences.",
    },
  ];

  const process = ["Discovery", "Planning", "Design", "Development", "Launch"];

  const whatsappBase = "https://wa.me/918074588452";

  const getWhatsappLink = (message: string) =>
    `${whatsappBase}?text=${encodeURIComponent(message)}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img
            src="/pixellogo.jpg"
            alt="PixelCraftStudio logo"
            className="brand-logo"
          />
          <div>
            <h2 className="brand-title">PixelCraftStudio</h2>
            <p className="brand-subtitle">Creative Design Studio</p>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">
            Start Project
          </a>
        </nav>

        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-drawer ${menuOpen ? "show" : ""}`}>
        <button
          type="button"
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#process" onClick={() => setMenuOpen(false)}>
          Process
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {menuOpen && (
        <div
          className={`mobile-backdrop ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <Reveal>
        <section id="home" className="hero">
          <div className="hero-left">
            <div className="eyebrow">PREMIUM • MODERN • CLIENT-FOCUSED</div>

            <h1>
              We create elegant websites that make your business look premium
              and attract serious clients.
            </h1>

            <p>
              PixelCraftStudio builds polished, responsive websites for
              businesses that want a stronger online presence, modern branding,
              and a more trustworthy first impression.
            </p>

            <p>
              PixelCraftStudio provides professional website design services for
              businesses, startups, and brands looking to build a strong online
              presence. We focus on modern UI, responsive design, and
              conversion-driven layouts.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Quote
              </a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h4>Premium Design</h4>
                <p>Modern and polished interfaces</p>
              </div>
              <div className="stat-card">
                <h4>Responsive Layout</h4>
                <p>Perfect across mobile and desktop</p>
              </div>
              <div className="stat-card">
                <h4>Lead-Focused</h4>
                <p>Built to convert visitors into clients</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual-card">
              <div className="hero-visual-top">
                <div>
                  <h4>PixelCraft Assistant</h4>
                  <p>Online now</p>
                </div>
                <span>Beta</span>
              </div>

              <div className="chat-bubble light">
                Hi, welcome to PixelCraftStudio. What type of website do you
                need?
              </div>

              <div className="chat-bubble dark">
                I need a premium business website.
              </div>

              <div className="chat-bubble light">
                Great. We can help with business websites, redesigns, and
                landing pages.
              </div>

              <div className="quick-options">
                <a
                  href={getWhatsappLink(
                    "Hi PixelCraftStudio, I need a Business Website. My business type is ____."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Business Website
                </a>

                <a
                  href={getWhatsappLink(
                    "Hi PixelCraftStudio, I need a Landing Page. My business type is ____."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Landing Page
                </a>

                <a
                  href={getWhatsappLink(
                    "Hi PixelCraftStudio, I want a Website Redesign. My current website is ____."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Redesign
                </a>

                <a
                  href={getWhatsappLink(
                    "Hi PixelCraftStudio, I want a quote for my website project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Quote
                </a>
              </div>
            </div>

            <div className="floating-shape floating-shape-one" />
            <div className="floating-shape floating-shape-two" />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="services" className="section-block">
          <p className="section-tag">Services</p>
          <h2 className="section-title">
            Services built for brands that want a refined online presence.
          </h2>

          <div className="card-grid three">
            {services.map((item) => (
              <div className="info-card" key={item.title}>
                <div className="icon-box" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <a
                  href={getWhatsappLink(
                    `Hi PixelCraftStudio, I’m interested in ${item.title}. Please share details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="service-wa-link"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <section className="section-block">
          <p className="section-tag">Why Choose Us</p>
          <div className="highlight-card">
            <h2 className="section-title narrow">
              We help businesses look polished, trustworthy, and ready for
              serious clients.
            </h2>
            <p>
              A premium website is not just about appearance. It is about trust,
              clarity, mobile responsiveness, and giving visitors confidence in
              your brand from the first impression.
            </p>
          </div>
        </section>
      </Reveal>

      <Pricing />

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

      <Reveal>
        <section id="process" className="section-block">
          <p className="section-tag">Process</p>
          <h2 className="section-title">
            A simple process that keeps every project clear and professional.
          </h2>

          <div className="process-grid">
            {process.map((step, index) => (
              <div className="process-card" key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="about" className="section-block">
          <p className="section-tag">About</p>
          <div className="about-grid">
            <div className="info-card large">
              <h2 className="section-title narrow">
                PixelCraftStudio is a creative studio focused on premium digital
                presence.
              </h2>
              <p>
                We create modern websites for businesses that want elegant
                design, clear presentation, and stronger trust from potential
                clients.
              </p>
            </div>

            <div className="info-card">
              <h3>What we believe</h3>
              <p>
                A website should look beautiful, feel professional, and help
                turn visitors into real inquiries.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="section-block contact-section">
          <div className="contact-left">
            <p className="section-tag">Contact</p>
            <h2 className="section-title narrow">
              Ready to create a premium website for your brand?
            </h2>

            <p className="contact-text">
              Tell us about your business and the type of website you need.
              We’ll help shape the right direction for your project.
            </p>

            <div className="contact-details">
              <div>
                📧 <strong>Email</strong>
                <br />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pixelcraftstudio91@gmail.com&su=Website%20Inquiry"
                  target="_blank"
                  rel="noreferrer"
                >
                  pixelcraftstudio91@gmail.com
                </a>
              </div>

              <div>
                📸 <strong>Instagram</strong>
                <br />
                <a
                  href="https://www.instagram.com/pixel_craftstudio_01/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @pixel_craftstudio_01
                </a>
              </div>

              <div>
                💬 <strong>WhatsApp</strong>
                <br />
                <a
                  href="https://wa.me/918074588452"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 80745 88452
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Tell us your requirement"
              value={form.message}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </Reveal>

      <Reveal>
        <footer className="footer">
          <div>© 2026 PixelCraftStudio. Crafted for modern brands.</div>
          <div className="footer-links">
            <span>Premium Design</span>
            <span>Responsive</span>
            <span>Client-Focused</span>
          </div>
        </footer>
      </Reveal>

      <a href="#contact" className="book-call-sticky" aria-label="Get quote">
        Get Quote
      </a>

      <a
        href={getWhatsappLink("Hi PixelCraftStudio, I need a website.")}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}