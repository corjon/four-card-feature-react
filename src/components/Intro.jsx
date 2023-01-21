import styles from './Intro.module.css';

export default function Intro() {
    return (
      <div className={styles.div}>
        <h1 className={styles.h1}>
          Reliable, efficient delivery 
          <span className={styles.span}>Powered by Technology</span>
        </h1>
        <p className={styles.p}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </div>
    );
  }