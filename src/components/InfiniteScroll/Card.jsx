import styles from "./Card.module.css"
const Card = ({ meme }) => {
  return (
    <div className={styles.cardContainer}>
      <h4>{meme?.title}</h4>
      <h6>{meme?.author}</h6>
      <img src={meme.preview[0]}/>
    </div>
  );
};

export default Card;
