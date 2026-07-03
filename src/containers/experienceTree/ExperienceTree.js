import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExperienceTree.css";

/* ────────────────────────────────────────────
   ProjectCard – expands to show the 3 sections
   ──────────────────────────────────────────── */
function ProjectCard({ project, companyColor, theme, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="exp-project-item">
      {/* VSCode-style tree lines */}
      <div className="exp-tree-indent">
        <div
          className="exp-tree-line-v"
          style={{
            background: `${companyColor}40`,
            visibility: isLast && !open ? "hidden" : "visible",
          }}
        />
      </div>

      <div style={{ flex: 1 }}>
        {/* Project header / trigger */}
        <div
          className="exp-project-trigger"
          onClick={() => setOpen((o) => !o)}
          role="button"
          aria-expanded={open}
        >
          <span className="exp-project-icon">💻</span>
          <span className="exp-project-name" style={{ color: theme.text }}>
            {project.name}
          </span>
          <span
            className="exp-project-duration-badge"
            style={{ color: theme.secondaryText }}
          >
            {project.duration}
          </span>
          <span
            className={`exp-project-chevron ${open ? "open" : ""}`}
            style={{ color: theme.secondaryText }}
          >
            ➡️
          </span>
        </div>

        {/* Expanded detail */}
        {open && (
          <div className="exp-project-detail">
            {/* Description */}
            <p
              className="exp-detail-description"
              style={{
                color: theme.text,
                borderLeftColor: `${companyColor}60`,
                background: `${companyColor}08`,
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div
              className="exp-detail-section-label"
              style={{ color: theme.secondaryText }}
            >
              Tech Stack
            </div>
            <div className="exp-tech-chips">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="exp-tech-chip"
                  style={{
                    color: companyColor,
                    borderColor: `${companyColor}60`,
                    background: `${companyColor}10`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Responsibilities */}
            <div
              className="exp-detail-section-label"
              style={{ color: theme.secondaryText }}
            >
              Responsibilities
            </div>
            <ul className="exp-responsibilities">
              {project.responsibilities.map((item, i) => (
                <li key={i} className="exp-responsibility-item">
                  <span
                    className="exp-responsibility-bullet"
                    style={{ background: companyColor }}
                  />
                  <span style={{ color: theme.text }}>{item}</span>
                </li>
              ))}
            </ul>

            {project.id && (
              <div style={{ marginTop: "15px", display: "flex" }}>
                <Link
                  to={`/experience/project/${project.id}`}
                  style={{
                    padding: "8px 16px",
                    background: companyColor,
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                  }}
                  className="exp-project-detail-btn"
                >
                  View Full Project Details &rarr;
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   CompanyFolder – collapsible folder for a company
   ──────────────────────────────────────────── */
function CompanyFolder({ company, theme }) {
  const [open, setOpen] = useState(true); // open by default

  return (
    <div className="exp-company">
      {/* Company header */}
      <div
        className="exp-company-header"
        onClick={() => setOpen((o) => !o)}
        style={{
          background: `${company.color}18`,
          borderLeftColor: company.color,
        }}
        role="button"
        aria-expanded={open}
      >
        <span
          className={`exp-company-chevron ${open ? "open" : ""}`}
          style={{ color: company.color }}
        ></span>
        {company.logo_path ? (
          <img
            className="exp-company-logo"
            src={
              new URL(
                `../../assests/images/${company.logo_path}`,
                import.meta.url
              ).href
            }
            alt={company.name}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              objectFit: "contain",
              backgroundColor: "white",
              padding: "2px",
              border: `2px solid ${company.color}`,
              flexShrink: 0,
            }}
          />
        ) : (
          <span className="exp-company-icon">🏢</span>
        )}
        <div className="exp-company-info">
          <p className="exp-company-name" style={{ color: theme.text }}>
            {company.name}
          </p>
          <div className="exp-company-meta">
            <span className="exp-company-role" style={{ color: company.color }}>
              {company.role}
            </span>
            <span
              className="exp-company-duration"
              style={{
                color: theme.secondaryText,
                background: `${company.color}20`,
              }}
            >
              {company.duration}
            </span>
          </div>
        </div>
        <span
          className="exp-project-count"
          style={{ color: theme.secondaryText }}
        >
          {company.projects.length} project
          {company.projects.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Project list */}
      {open && (
        <div className="exp-projects-list" style={{ background: theme.body }}>
          {company.projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              project={project}
              companyColor={company.color}
              theme={theme}
              isLast={idx === company.projects.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────
   ExperienceTree – main export
   ──────────────────────────────────────────── */
export default function ExperienceTree({ companies, theme }) {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="exp-tree">
      {companies.map((company) => (
        <CompanyFolder key={company.name} company={company} theme={theme} />
      ))}
    </div>
  );
}
