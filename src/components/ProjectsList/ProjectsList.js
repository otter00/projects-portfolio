import React, { PureComponent } from "react";
import Project from "../Project/ProjectComponent";
import projectsListStyles from "./ProjectsList.module.scss";

export default class ArticleList extends PureComponent {
  state = {
    openArticleId: null,
  };
  render() {
    const articleElems = this.props.projects.map((project, index) => (
      <li
        key={project.id}
        className={["article-list__li", projectsListStyles.project__item].join(
          " "
        )}
      >
        <Project
          project={project}
          isOpen={this.state.openArticleId === project.id}
          isTemplate={project.template}
          onButtonClick={this.handleClick.bind(this, project.id)}
        />
      </li>
    ));

    return (
      <ul className={projectsListStyles.projects__list}>{articleElems}</ul>
    );
  }

  handleClick = (openArticleId) =>
    this.setState({
      // реализация кнопки close - если открываем открытую, то закрываем ее
      openArticleId:
        this.state.openArticleId === openArticleId ? null : openArticleId,
    });
}
