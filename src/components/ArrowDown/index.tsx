'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

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

  const handleNavigation = useCallback((e: any) => {
    const _window = e.currentTarget
    const _opacity = 1 - _window.pageYOffset / 100
    setVisible(Boolean(_opacity > 0 ? _opacity : 0))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

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
