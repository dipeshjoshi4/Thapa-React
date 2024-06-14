
import styles from "./Netflix.module.css";

import styled from "styled-components";


export const SeriesCard = ({ data }) => {

    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor:"pointer",
    }

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
    

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} />
            </div>

            <div className={styles["card-content"]}>
                <h2>Name:{name}</h2>

                <h3 style={{ fontSize: "1.5rem" }}>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
                <p>Summary:{description}</p>
                <h4>Genre:{genre.join(" , ")}</h4>
                <p>Cast:{cast.join(" , ")}</p>

                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    )
}