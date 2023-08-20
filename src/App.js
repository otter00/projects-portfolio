import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import projects from "./assets/projectsList";

function App() {
  return (
    <div className="body">
      <Header />
      <ProjectsList projects={projects} />
    </div>
  );
}

export default App;
