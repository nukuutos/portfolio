import styles from './message.module.scss';

const Message = ({ isSuccess }) => (
  <div className={styles.message}>
    {isSuccess && (
      <>
        <p className={styles.text}>
          You <span className={styles.success}>successfully</span> sent a<br />
          message to me!
        </p>
        <span className={styles.emoji}>:)</span>
      </>
    )}

    {!isSuccess && (
      <>
        <p className={styles.text}>
          Sorry, you were <span className={styles.failure}>failed</span>
          <br />
          to send a message...
        </p>
        <span className={styles.emoji}>:(</span>
      </>
    )}
  </div>
);

export default Message;
