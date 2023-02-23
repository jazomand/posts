import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const pageVariants = {
  enter: {
    opacity: 0,
  },
  enterActive: {
    opacity: 1,
    transition: {
     
      duration: 1,
      delay: 0.2,
      ease: 'easeInOut',

    },
  },
  exit: {
    opacity: 0,
  },
  exitActive: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const PageTransition: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="enter"
      animate="enterActive"
      exit="exit"
      variants={pageVariants}
      transition={{ type: 'tween' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;