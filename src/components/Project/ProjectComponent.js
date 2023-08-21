import React, { PureComponent } from "react";
import projectStyles from "./Project.module.scss";

export default class Project extends PureComponent {
  // PureComponent отличается от обычного Component тем,
  // что автоматически реализует перестроение с shouldComponentUpd

  render() {
    const { project, isOpen, isTemplate, onButtonClick } = this.props;

    const templateContent = isTemplate && (
      <>
        <span
          className="card-subtitle"
          style={{ fontWeight: 600, fontSize: 18 }}
        >
          Макет:{" "}
        </span>
        <a href={project.template} className="card-subtitle">
          {project.template}
        </a>
      </>
    );

    const body = isOpen && (
      <>
        {templateContent}
        <section
          className="card-subtitle my-2"
          style={{ fontWeight: 500, fontSize: 20 }}
        >
          {project.text}
        </section>
      </>
    );

    return (
      <div
        className={["card", "mx-auto", projectStyles.project__card].join(" ")}
      >
        <div className="card-header my-1">
          <h3>
            {project.title}
            <button
              onClick={onButtonClick}
              className="btn btn-outline-dark btn-lg float-end"
              style={{ fontWeight: 600 }}
            >
              {isOpen ? "close" : "open"}
            </button>
          </h3>
        </div>

        <div className="card-body">
          <span className={projectStyles.github__link}>
            <h6 className="card-subtitle">GitHub Pages link: </h6>
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
