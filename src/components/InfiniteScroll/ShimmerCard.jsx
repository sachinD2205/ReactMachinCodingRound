import styles from "./Card.module.css";
const ShimmerCard = () => {
  return (
    <div className={styles.shimmerCardContainer}>
       <div className={styles.shimmerCard}></div>
        <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
    </div>
  );
};

export default ShimmerCard;
