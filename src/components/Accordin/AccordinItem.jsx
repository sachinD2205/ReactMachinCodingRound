import styles from "./Accordin.module.css";
const AccordinItem = ({ data, handleAccordin }) => {
  const { title, content, id, isOpen = false } = data;

  return (
    <div className={styles.AccordinItem}>
      <div className={styles.buttonWrapper}>
        <button onClick={() => handleAccordin(id)}>
          <div>
            <h1>{title}</h1>
            <span className={styles.AccordinIcon} data-is-open={isOpen}>
              ^
            </span>
          </div>
        </button>
      </div>
      <div className={styles.AccordinContent} data-is-open={isOpen}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordinItem;
