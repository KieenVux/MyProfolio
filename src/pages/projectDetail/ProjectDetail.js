import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./ProjectDetail.css";

class ProjectDetail extends Component {
  state = {
    isImageModalOpen: false,
    currentImageUrl: "",
  };

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }

  openImageModal = (url) => {
    this.setState({ isImageModalOpen: true, currentImageUrl: url });
  };

  closeImageModal = () => {
    this.setState({ isImageModalOpen: false, currentImageUrl: "" });
  };

  render() {
    const theme = this.props.theme;
    const { id } = this.props.match.params;

    // Find the project and its company based on the ID
    let currentProject = null;
    let parentCompany = null;

    for (const company of experience.companies) {
      const proj = company.projects.find((p) => p.id === id);
      if (proj) {
        currentProject = proj;
        parentCompany = company;
        break;
      }
    }

    if (!currentProject) {
      return (
        <div className="project-detail-main">
          <Header theme={theme} />
          <div className="project-not-found" style={{ color: theme.text }}>
            <h2>Project Not Found</h2>
            <Link to="/experience" style={{ color: theme.secondaryText }}>
              Back to Experience
            </Link>
          </div>
          <Footer theme={theme} onToggle={this.props.onToggle} />
        </div>
      );
    }

    return (
      <div className="project-detail-main">
        <Header theme={theme} />
        <div className="project-detail-content">
          <Fade bottom duration={2000} distance="40px">
            <div
              className="project-header"
              style={{ borderBottom: `2px solid ${parentCompany.color}` }}
            >
              <Link
                to="/experience"
                className="back-btn"
                style={{ color: theme.secondaryText }}
              >
                &larr; Back to Experience
              </Link>
              <h1 className="project-title" style={{ color: theme.text }}>
                {currentProject.name}
              </h1>
              <div className="project-meta">
                <span
                  className="project-company"
                  style={{ color: parentCompany.color }}
                >
                  <span role="img" aria-label="company">
                    🏢
                  </span>{" "}
                  {parentCompany.name}
                </span>
                <span
                  className="project-duration"
                  style={{
                    color: theme.secondaryText,
                    background: `${parentCompany.color}20`,
                  }}
                >
                  <span role="img" aria-label="calendar">
                    📅
                  </span>{" "}
                  {currentProject.duration}
                </span>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={2000} distance="20px">
            <div className="project-body">
              <div className="project-section">
                <h3 style={{ color: theme.text }}>Overview</h3>
                <p style={{ color: theme.secondaryText, lineHeight: "1.6" }}>
                  {currentProject.description}
                </p>
              </div>

              <div className="project-section">
                <h3 style={{ color: theme.text }}>Tech Stack</h3>
                <div className="project-tech-chips">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech-chip"
                      style={{
                        color: parentCompany.color,
                        borderColor: `${parentCompany.color}60`,
                        background: `${parentCompany.color}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h3 style={{ color: theme.text }}>Key Responsibilities</h3>
                <ul className="project-responsibilities">
                  {currentProject.responsibilities.map((item, i) => (
                    <li key={i} style={{ color: theme.text }}>
                      <span
                        className="bullet"
                        style={{ background: parentCompany.color }}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {currentProject.extendedDetails && (
                <div className="project-extended-details">
                  {(currentProject.extendedDetails.architecture ||
                    currentProject.extendedDetails.architectureOverview) && (
                    <div className="project-section">
                      <h3 style={{ color: theme.text }}>
                        Architecture Overview
                      </h3>
                      <div
                        className="extended-card"
                        style={{
                          background: theme.compImgHighlight,
                          borderColor: `${parentCompany.color}40`,
                        }}
                      >
                        <p style={{ color: theme.text }}>
                          {currentProject.extendedDetails.architecture ||
                            currentProject.extendedDetails.architectureOverview}
                        </p>
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.features && (
                    <div className="project-section">
                      <h3 style={{ color: theme.text }}>Core Features</h3>
                      <div
                        className="extended-card"
                        style={{
                          background: theme.compImgHighlight,
                          borderColor: `${parentCompany.color}40`,
                        }}
                      >
                        <ul className="project-features">
                          {currentProject.extendedDetails.features.map(
                            (feature, idx) => (
                              <li key={idx} style={{ color: theme.text }}>
                                <span className="check">✓</span> {feature}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.techDetails && (
                    <div className="project-section">
                      <h3 style={{ color: theme.text }}>
                        Technical Implementation
                      </h3>
                      <div
                        className="extended-card"
                        style={{
                          background: theme.compImgHighlight,
                          borderColor: `${parentCompany.color}40`,
                        }}
                      >
                        <p style={{ color: theme.text }}>
                          {currentProject.extendedDetails.techDetails}
                        </p>
                      </div>
                    </div>
                  )}

                  {(currentProject.extendedDetails.userRoles || currentProject.extendedDetails.userTypes) && (
                    <div className="project-section">
                      <h3 style={{ color: theme.text }}>
                        User Roles & Permissions
                      </h3>
                      <div className="user-roles-grid">
                        {(currentProject.extendedDetails.userRoles || currentProject.extendedDetails.userTypes).map(
                          (user, idx) => {
                            const isString = typeof user === 'string';
                            return (
                              <div
                                key={idx}
                                className="user-role-card"
                                style={{
                                  background: theme.compImgHighlight,
                                  borderColor: `${parentCompany.color}40`,
                                }}
                              >
                                <h4 style={{ color: parentCompany.color }}>
                                  {isString ? user : user.role}
                                </h4>
                                {!isString && user.details && (
                                  <ul
                                    className="project-features"
                                    style={{ marginTop: "10px" }}
                                  >
                                    {user.details.map((detail, dIdx) => (
                                      <li key={dIdx} style={{ color: theme.text }}>
                                        <span
                                          className="bullet"
                                          style={{
                                            background: parentCompany.color,
                                            minWidth: "6px",
                                            height: "6px",
                                          }}
                                        ></span>
                                        <span style={{ fontSize: "0.95rem" }}>
                                          {detail}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.apiFlows && (
                    <div className="project-section">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3 style={{ color: theme.text }}>Key System Flows</h3>
                        {currentProject.extendedDetails.githubDocs &&
                          currentProject.extendedDetails.githubDocs
                            .apiFlows && (
                            <a
                              href={
                                currentProject.extendedDetails.githubDocs
                                  .apiFlows
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: theme.text,
                                opacity: 0.7,
                                textDecoration: "underline",
                                fontSize: "0.9rem",
                              }}
                            >
                              View Details on GitHub ↗
                            </a>
                          )}
                      </div>
                      <div className="api-flows-list">
                        {currentProject.extendedDetails.apiFlows.map(
                          (flow, idx) => {
                            const isString = typeof flow === 'string';
                            return (
                              <div
                                key={idx}
                                className="extended-card api-flow-item"
                                style={{
                                  background: theme.compImgHighlight,
                                  borderColor: `${parentCompany.color}40`,
                                }}
                              >
                                <h4 style={{ color: parentCompany.color }}>
                                  {idx + 1}. {isString ? flow : flow.title}
                                </h4>
                                {!isString && (
                                  Array.isArray(flow.description) ? (
                                    <ul
                                      style={{
                                        margin: 0,
                                        paddingLeft: "20px",
                                        color: theme.text,
                                        fontSize: "0.95rem",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {flow.description.map((descLine, i) => (
                                        <li key={i} style={{ marginBottom: "6px" }}>
                                          {descLine}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p style={{ color: theme.text }}>
                                      {flow.description}
                                    </p>
                                  )
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.engineeringChallenges && (
                    <div className="project-section">
                      <h3 style={{ color: theme.text }}>
                        Engineering Challenges Solved
                      </h3>
                      <div className="engineering-challenges-list">
                        {currentProject.extendedDetails.engineeringChallenges.map(
                          (challenge, idx) => {
                            const isString = typeof challenge === 'string';
                            return (
                              <div
                                key={idx}
                                className="extended-card challenge-card"
                                style={{
                                  background: theme.compImgHighlight,
                                  borderColor: `${parentCompany.color}40`,
                                  marginBottom: "15px",
                                }}
                              >
                                <h4
                                  style={{
                                    color: parentCompany.color,
                                    marginTop: 0,
                                    marginBottom: "10px",
                                    fontSize: "1.15rem",
                                  }}
                                >
                                  <span role="img" aria-label="challenge">
                                    💡
                                  </span>{" "}
                                  {isString ? challenge : challenge.title}
                                </h4>
                                {!isString && (
                                  <p style={{ color: theme.text }}>
                                    {challenge.description}
                                  </p>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.systemArchitecture && (
                    <div className="project-section">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3 style={{ color: theme.text }}>
                          System Architecture
                        </h3>
                        {currentProject.extendedDetails.githubDocs &&
                          currentProject.extendedDetails.githubDocs
                            .architecture && (
                            <a
                              href={
                                currentProject.extendedDetails.githubDocs
                                  .architecture
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: theme.text,
                                opacity: 0.7,
                                textDecoration: "underline",
                                fontSize: "0.9rem",
                              }}
                            >
                              View Details on GitHub ↗
                            </a>
                          )}
                      </div>
                      <div className="engineering-challenges-list">
                        {Array.isArray(currentProject.extendedDetails.systemArchitecture) ? 
                          currentProject.extendedDetails.systemArchitecture.map((arch, idx) => (
                            <div key={idx} className="extended-card challenge-card" style={{ background: theme.compImgHighlight, borderColor: `${parentCompany.color}40`, marginBottom: "15px" }}>
                              <h4 style={{ color: parentCompany.color, marginTop: 0, marginBottom: "10px", fontSize: "1.15rem" }}>
                                <span role="img" aria-label="arch">⚙️</span> {arch.title}
                              </h4>
                              {Array.isArray(arch.description) ? (
                                <ul style={{ margin: 0, paddingLeft: '20px', color: theme.text, fontSize: '0.95rem', lineHeight: '1.5' }}>
                                  {arch.description.map((descLine, i) => (
                                    <li key={i} style={{ marginBottom: '6px' }}>{descLine}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p style={{ color: theme.text }}>{arch.description}</p>
                              )}
                            </div>
                          )) 
                        : (
                          <div className="extended-card challenge-card" style={{ background: theme.compImgHighlight, borderColor: `${parentCompany.color}40`, marginBottom: "15px" }}>
                            <p style={{ color: theme.text }}>{currentProject.extendedDetails.systemArchitecture}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentProject.extendedDetails.images &&
                    currentProject.extendedDetails.images.erDiagram && (
                      <div className="project-section">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            flexWrap: "wrap",
                          }}
                        >
                          <h3 style={{ color: theme.text }}>
                            Database Schema (ER Diagram)
                          </h3>
                          {currentProject.extendedDetails.githubDocs &&
                            currentProject.extendedDetails.githubDocs
                              .erDiagram && (
                              <a
                                href={
                                  currentProject.extendedDetails.githubDocs
                                    .erDiagram
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: theme.text,
                                  opacity: 0.7,
                                  textDecoration: "underline",
                                  fontSize: "0.9rem",
                                }}
                              >
                                View Details on GitHub ↗
                              </a>
                            )}
                        </div>
                        <div
                          className="extended-card"
                          style={{
                            background: theme.compImgHighlight,
                            borderColor: `${parentCompany.color}40`,
                            padding: "10px",
                          }}
                        >
                          <img
                            src={
                              currentProject.extendedDetails.images.erDiagram
                            }
                            alt="ER Diagram"
                            className="clickable-image"
                            onClick={() =>
                              this.openImageModal(
                                currentProject.extendedDetails.images.erDiagram
                              )
                            }
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </div>
                    )}

                  {((currentProject.extendedDetails.images &&
                    currentProject.extendedDetails.images.functionalMap) ||
                    currentProject.extendedDetails.functionalMap) && (
                    <div className="project-section">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3 style={{ color: theme.text }}>Functional Map</h3>
                        {currentProject.extendedDetails.githubDocs &&
                          currentProject.extendedDetails.githubDocs
                            .functionalMap && (
                            <a
                              href={
                                currentProject.extendedDetails.githubDocs
                                  .functionalMap
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: theme.text,
                                opacity: 0.7,
                                textDecoration: "underline",
                                fontSize: "0.9rem",
                              }}
                            >
                              View Details on GitHub ↗
                            </a>
                          )}
                      </div>
                      {currentProject.extendedDetails.images &&
                        currentProject.extendedDetails.images.functionalMap && (
                          <div
                            className="extended-card"
                            style={{
                              background: theme.compImgHighlight,
                              borderColor: `${parentCompany.color}40`,
                              padding: "10px",
                              marginBottom: "20px",
                            }}
                          >
                            <img
                              src={
                                currentProject.extendedDetails.images
                                  .functionalMap
                              }
                              alt="Functional Map"
                              className="clickable-image"
                              onClick={() =>
                                this.openImageModal(
                                  currentProject.extendedDetails.images
                                    .functionalMap
                                )
                              }
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                        )}
                      {typeof currentProject.extendedDetails.functionalMap ===
                        "string" && (
                        <div
                          className="extended-card"
                          style={{
                            background: theme.compImgHighlight,
                            borderColor: `${parentCompany.color}40`,
                            overflowX: "auto",
                          }}
                        >
                          <pre
                            style={{
                              color: theme.text,
                              fontFamily: "monospace",
                              fontSize: "0.9rem",
                              lineHeight: "1.4",
                              margin: 0,
                            }}
                          >
                            {currentProject.extendedDetails.functionalMap}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />

        {this.state.isImageModalOpen && (
          <div
            className="image-zoom-modal-overlay"
            onClick={this.closeImageModal}
          >
            <div
              className="image-zoom-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="image-zoom-close-btn"
                onClick={this.closeImageModal}
              >
                &times;
              </button>
              <TransformWrapper
                defaultScale={1}
                options={{ minScale: 0.5, maxScale: 5 }}
                wheel={{ step: 10 }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <React.Fragment>
                    <div className="image-zoom-tools">
                      <button onClick={zoomIn}>Zoom In (+)</button>
                      <button onClick={zoomOut}>Zoom Out (-)</button>
                      <button onClick={resetTransform}>Reset</button>
                    </div>
                    <TransformComponent
                      wrapperStyle={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={this.state.currentImageUrl}
                        alt="Zoom Preview"
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "80vh",
                          objectFit: "contain",
                        }}
                      />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectDetail;
