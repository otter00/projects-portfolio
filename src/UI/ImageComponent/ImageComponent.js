import React from "react";
import imageStyles from "./ImageComponent.module.scss";

export default function ImageComponent(props) {
  return <img src={props.image} />;
}
