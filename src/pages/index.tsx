import { AnimatePresence, motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import PostsComponent from '../components/Posts';
import { Post } from '@/types/post';
import { fetchPosts } from './api/posts';
import { useState } from 'react';
import PostComponent from '@/components/Post';

interface Props {
  posts: Post[];
}

export default function PostsPage({ posts }: Props) {
  
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(undefined);
  };

  return (
    <AnimatePresence>
      {selectedPost ? (
        <motion.div key="post" initial={{ opacity: 0 }} animate={{
          opacity: 1, transition: {
            duration: 1,
            delay: 0.2,
            ease: 'easeInOut',
          }
        }} exit={{ opacity: 0 }}>
          <PostComponent post={selectedPost} onBackClick={handleBackClick} />
        </motion.div>
      ) : (
        <motion.div key="index" initial={{ opacity: 0 }} animate={{
          opacity: 1, transition: {
            duration: 1,
            delay: 0.2,
            ease: 'easeInOut',
          }
        }} exit={{ opacity: 0 }}>
          <PostsComponent posts={posts} onPostClick={handlePostClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
};