import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.CardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((Card) => (
                <Card data={Card} type={type} key={Card.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
