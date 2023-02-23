import { Post } from '@/types/post';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/PostDetail.module.scss';
import { fetchPostById } from '../api/posts';
import PageTransition from '../../components/PageTransition';

type Props = {
  post: Post;
};

function PostDetail({ post }: Props) {
  const router = useRouter();
  const [pageTransitionClass, setPageTransitionClass] = useState('');

  useEffect(() => {
    const handleRouteChange = () => {
      setPageTransitionClass(styles.page);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const handleBackClick = () => {
    router.push('/');
  };

  return post ? (
    <PageTransition>
      <div className={`${styles.container} ${pageTransitionClass}`}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{post.title}</h1>
          </div>
          <div className={styles.bodyContent}>
            <p className={styles.body}>{post.body}</p>
          </div>
          <div className={styles.backButtonContainer}>
            <button className={styles.backButton} onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  ) : null;
}

export async function getServerSideProps(context: { query: { id: any; }; }) {
  const { id } = context.query;
  const post = await fetchPostById(id);
  return {
    props: {
      post,
    },
  };
}

export default PostDetail;