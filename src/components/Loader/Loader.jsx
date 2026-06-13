import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.9,
            },
          }}
        >
          <div className={styles.backgroundNumber}>1869</div>

          <motion.img
            src="/logos/sherwood-logo.png"
            alt="Sherwood College"
            className={styles.logo}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
          />

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            SHERWOOD COLLEGE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{
              delay: 1,
            }}
          >
            NAINITAL • ESTABLISHED 1869
          </motion.p>

          <motion.div
            className={styles.line}
            initial={{
              width: 0,
            }}
            animate={{
              width: 260,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
          />

          <motion.small
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.75,
            }}
            transition={{
              delay: 2,
            }}
          >
            MEREAT QUISQUE PALMAM
          </motion.small>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
