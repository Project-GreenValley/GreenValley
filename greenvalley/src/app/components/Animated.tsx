'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Animated({ children }: { children : React.ReactNode }) {
  
  // using whileInView, prop that animates when the element comes into view and persists
  // const ref = useRef(null);

  // return (
  //   <motion.div
  //     ref={ref}
  //     initial={{ opacity: 0, y: 20 }}
  //     whileInView={{ opacity: 1, y: 0 }}
  //     viewport={{ once: true, amount: 0.2 }}
  //     // animate={{ opacity: 1, y: 0 }}
  //     transition={{ duration: 0.5, ease: 'easeInOut' }}
  //     className="w-full h-full"
  //   >
  //     {children}
  //   </motion.div>
  // )

  // using useInView, hook that animates when the element comes into view and fades out when it leaves view
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}