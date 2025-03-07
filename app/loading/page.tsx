// components/Loader.js
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader}></div>
    </div>
  );
}
