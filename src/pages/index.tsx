import Link from 'next/link';
import { Post } from '../types/post';
import { fetchPosts } from './api/posts';
import styles from '../styles/Home.module.scss';
import PageTransition from '../components/PageTransition';

type Props = {
  posts: Post[];
};

function Home({ posts }: Props) {

  return posts ? (
    <PageTransition>
     <div className={`${styles.container}`}>
      <div className={styles.title}>Posts</div>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </PageTransition>
  ) : null;
}

export async function getServerSideProps() {
  const posts = await fetchPosts();
  return {
    props: { posts },
  };
}

export default Home;