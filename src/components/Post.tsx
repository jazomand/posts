import { Post } from '@/types/post';
import styles from '../styles/PostDetail.module.scss';

interface Props {
  post: Post;
  onBackClick?: () => void;
}

export default function PostComponent({ post, onBackClick }: Props) {

  return (
    <div className={`${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div className={styles.bodyContent}>
          <p className={styles.body}>{post.body}</p>
        </div>
        <div className={styles.backButtonContainer}>
          <button className={styles.backButton} onClick={onBackClick}>Back to posts</button>
        </div>
      </div>
    </div>
  );
}
