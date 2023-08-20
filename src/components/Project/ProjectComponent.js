import React, { Component, PureComponent } from "react";
import projectStyles from "./Project.module.scss";

class Project extends PureComponent {
  // PureComponent отличается от обычного Component тем,
  // что автоматически реализует перестроение с shouldComponentUpd

  constructor(props) {
    super(props);
  }

  render() {
    const { project, isOpen, onButtonClick } = this.props;
    console.log("---", this.props);
    const body = isOpen && (
      <>
        <a href={project.template} className="card-subtitle">
          <span className="card-subtitle">Макет: </span> {project.template}
        </a>
        <section className="card-subtitle">{project.text}</section>
      </>
    );
    return (
      <div
        className={["card", "mx-auto", projectStyles.project__card].join(" ")}
      >
        <div className="card-header">
          <h3>
            {project.title}
            <button
              onClick={onButtonClick}
              className="btn btn-primary btn-lg float-end"
            >
              {isOpen ? "close" : "open"}
            </button>
          </h3>
        </div>

        <div className="card-body">
          <span className={projectStyles.github__link}>
            <h6 className="card-subtitle">GitHub Pages link:</h6>
            <a href={project.link} className="card-subtitle">
              {project.link}
            </a>
          </span>
          {body}
        </div>
      </div>
    );
  }
}

export default Project;
