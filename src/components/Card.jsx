import styles from './Card.module.css';

export default function Card({ title, text, image, color }) {
    return (
      <div className={styles.div} style={{borderTopColor: color}}>
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>{text}</p>
        <img className={styles.img} src={image} alt="" aria-hidden="true"/>
      </div>
    );
  }