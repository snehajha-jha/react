/* eslint-disable react/prop-types */
import styles from './transactionItem.module.css';

const TransactionItem = ({ credit, value }) => {
  return (
    <div style={{display:'flex',gap:'10px'}}>
      <div className={styles.imgContainer}>
        <img
          className={styles.icon}
          src={`/icons/${credit ? 'up' : 'down'}.svg`}
        />
      </div>
      <div style={{flexGrow:'1'}} className={styles.container}>
        <div className={styles.dataContainer}>
          <span className={`${styles.dataSize}`}>
            {credit ? 'Deposit' : 'Withdraw'}
          </span>
          <span className={`${styles.dataSize} ${styles.secondary}`}>
            Money {credit ? 'Send' : 'Received'}
          </span>
        </div>
        <div  className={styles.dataContainer}>
          <span className={`${styles.dataSize}`}>
            {credit ? `${-1 * value}` : value}
          </span>
          <span className={`${styles.dataSize} ${styles.secondary}`}>
            Apr23
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
