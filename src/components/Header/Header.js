import React from "react";
import headerStyles from "./Header.module.scss";
import Img from "../../UI/ImageComponent/ImageComponent";
import imageProfile from "../../imgs/profile.jpg";

export default function Header() {
  return (
    <div className={headerStyles.header__container}>
      <Img image={imageProfile} />
      <div className={headerStyles.header__info}>
        <h1 className={headerStyles.header__title}>Привет!</h1>
        <span className={headerStyles.header__about}>
          Меня зовут Анастасия. Я занимаюсь фронтенд-разработкой 3 года, из
          которых 1,5 года - участие в групповых проектах в рамках обучения на
          курсах и выполнение проекта на стажировке в крупной компании. В этом
          портфолио я собрала те работы, которыми горжусь больше всего.
        </span>
      </div>
    </div>
  );
}
