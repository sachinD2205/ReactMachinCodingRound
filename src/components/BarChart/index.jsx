
import styles from "./components/BarChart.module.css";

const BarChart = () => {
  const data = [
    { id: 1, name: "Sachin", ticketCount: 5, color: "red" },
    { id: 2, name: "Amit", ticketCount: 2, color: "blue" },
    { id: 3, name: "Neha", ticketCount: 8, color: "green" },
    { id: 4, name: "Rahul", ticketCount: 1, color: "yellow" },
    { id: 5, name: "Priya", ticketCount: 4, color: "purple" },
  ];

  const maxTicketCount = Math.max(...data.map((d) => d.ticketCount));
  const scaleFactor = 150 / maxTicketCount;

  return (
    <div className={styles.container}>
      <div className={styles.barCharContainer}>
        <div className={styles.barsContainer}>
          <div className={styles.bars}>
            {data?.map((d) => (
              <div
                key={d?.name}
                style={{
                  backgroundColor: `${d.color}`,
                  height: `${d.ticketCount * scaleFactor}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.ticketCount}>ticket count</div>
        <div className={styles.ticketHolderName}>name</div>
      </div>
    </div>
  );
};

export default BarChart;
