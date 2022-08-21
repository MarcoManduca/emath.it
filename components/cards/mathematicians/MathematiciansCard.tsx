import Image from 'next/image';
import styles from './MathematiciansCard.module.css';

export interface IMathematiciansCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const MathematiciansCard: React.FC<IMathematiciansCard> = ({
  tag,
  title,
  body,
  author,
  time,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <Image
            src="https://static.oilproject.org/category/1855/cover/7ac99c9915b6a17442f5de4243b42868_large_.jpg"
            alt="card_image"
            className={styles.card_image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card_body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.user}>
            <Image
              src="/foto_profilo.jpg"
              alt="user_image"
              className={styles.user_image}
              width="40"
              height="40"
            />
            <div className={styles.user_info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathematiciansCard;
