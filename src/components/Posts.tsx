import { Post } from "@/types/post";
import styles from '../styles/Home.module.scss';

interface Props {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export default function IndexPage({ posts, onPostClick }: Props) {
  const handlePostClick = (post: Post) => {
    onPostClick(post);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>Posts</div>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem} onClick={() => handlePostClick(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}