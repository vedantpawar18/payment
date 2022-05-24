import React from 'react'
import styles from './Card1.module.css'

const card1 = (props) => {
  return (
    <div className={styles.card1}>
        <div className={styles.div1}>
            <h4>{props.date}</h4>
            <div className={styles.case}>
                <h4>Case Study</h4>
            </div>
            <h2>{props.head} Gift</h2>
            <h2>Pay</h2>
            <h4>{props.method}</h4>
        </div>

        <div className={styles.div2}>
            <div className={styles.logo}>
                <img src={props.src} alt="" />
            </div>
            <div className={styles.arrow}>
            <i class="fa-solid fa-arrow-right fa-2x"></i>
            </div>
        </div>
  
    </div>
  )
}

export default card1