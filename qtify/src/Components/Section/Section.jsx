import React, { useState } from "react";
import styles from "./Section.module.css"
import { CircularProgress, Tab, Tabs } from "@mui/material";
import Card from "../Card/Card";



export default function Section({ title, type, data }) {
    const [carouselToggle, setCarouselToggle] = useState(false);
    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    const getSection = (type) => {
        switch(type){
            case "album": {
                return(
                    <div>
                        <div className={styles.header}>
                            <h3>{title}</h3>
                            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
                        </div>
                        {
                            data.length === 0 ? (
                                <div className={styles.circularProgress}>
                                <CircularProgress/>
                                </div>
                            ) : (
                                <div className={styles.cardWrapper}>
                                    {!carouselToggle ? (
                                        <div className={styles.wrapper}>
                                            {data.map((ele) => (
                                                <Card data={ele} type={type}/>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>Carousel</div>
                                    )}
                                </div>
                            )
                        }
                    </div>
                )
            }
            case "song": {
                return(
                    <div>
                        <div className={styles.header}>
                            <h3>{title}</h3>
                            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
                        </div>
                        <Tabs>
                            
                        </Tabs>
                        {
                            data.length === 0 ? (
                                <div className={styles.circularProgress}>
                                <CircularProgress/>
                                </div>
                            ) : (
                                <div className={styles.cardWrapper}>
                                    {!carouselToggle ? (
                                        <div className={styles.wrapper}>
                                            {data.map((ele) => (
                                                <Card data={ele} type={type}/>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>Carousel</div>
                                    )}
                                </div>
                            )
                        }
                    </div>
                )
            }
            default:
                return <></>
        }
    }
    return getSection(type);
}