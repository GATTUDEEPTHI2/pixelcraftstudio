"use client";

import { useState } from "react";

type Project = {
  title: string;
  text: string;
  image: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Cafe Website",
      text: "Modern and attractive website design for cafes and restaurants.",
      image: "/project1.jpg",
    },
    {
      title: "Business Landing Page",
      text: "High-converting landing page for generating leads and clients.",
      image: "/project2.jpg",
    },
    {
      title: "Portfolio Website",
      text: "Clean and professional portfolio for personal branding.",
      image: "/project3.jpg",
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="section-block">
        <p className="section-tag">Work / Projects</p>
        <h2 className="section-title">
          Selected concepts that show our premium design direction.
        </h2>

        <div className="card-grid three">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-image-wrap"
                onClick={() => setActiveProject(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="project-real-image"
                />

                <div className="project-overlay">
                  <button
                    type="button"
                    className="project-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(item);
                    }}
                  >
                    View Project
                  </button>
                </div>
              </div>

              <div className="project-content">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close preview"
            >
              ×
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="project-modal-image"
            />

            <div className="project-modal-content">
              <p className="project-modal-tag">Project Preview</p>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}