/* eslint-disable */

'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { useState } from 'react'

const arrowVariant = {
  initial: {
    rotate: '45deg',
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0],
    translateY: ['-30px', '0px', '20px'],
  },
}

const transition = {
  duration: 2,
  times: [0, 0.3, 1],
  repeat: Infinity,
  repeatType: 'loop',
  repeatDelay: 1,
} as const

const ArrowDown = () => {
  const [isVisible, setVisible] = useState(true)

  useMotionValueEvent(useScroll().scrollY, 'change', (value) => {
    setVisible(value < 100)
  })

  return (
    <AnimatePresence>
      {!!isVisible && (
        <motion.div
          className="fixed bottom-7 left-5 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="m-[-12px_0px] block size-3 rotate-45 border-b border-r border-yellow-400"
            variants={arrowVariant}
            animate="animate"
            initial="initial"
            transition={{
              ...transition,
              delay: 0,
            }}
          />
          <motion.div
            className="m-[-12px_0px] block size-3 rotate-45 border-b border-r border-yellow-400"
            variants={arrowVariant}
            animate="animate"
            initial="initial"
            transition={{
              ...transition,
              delay: -0.2,
            }}
          />
          <motion.div
            className="m-[-12px_0px] block size-3 rotate-45 border-b border-r border-yellow-400"
            variants={arrowVariant}
            animate="animate"
            initial="initial"
            transition={{
              ...transition,
              delay: -0.4,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArrowDown
