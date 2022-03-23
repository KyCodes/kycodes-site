import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/Main.module.css'

export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Inquire about KyCodes custom app and web development so your next project is here!</h1>
                <p>Make more!</p>
            </div>
            <a href='https://ideality.dev/' className={styles.card}>
                <StaticImage layout='fullWidth' placeholder='blurred' className={styles.card__image} src='../images/ideality-banner.webp' alt="Ideality App Banner" />
                <p>Ideality</p>
            </a>
            <a href='https://honeylocustfilm.com/' className={styles.card}>
                <StaticImage layout='fullWidth' placeholder='blurred' className={styles.card__image} src='../images/honeylocust-banner.webp' alt="Honey Locust Film Banner" />
                <p>Honey Locust Film</p>
            </a>
        </div>
    )
}