"use client"

import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

const animationText = {
  hidden: { x: -100, opacity: 0 },
  visible: (c: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: c * 0.05,
    },
  }),
}

export const BlockTitle = ({ children }: PropsWithChildren) => {
  return (
    <motion.h2
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      variants={animationText}
      className="font-headline text-[96px] mt-[210px] mb-[50px] text-primary text-center max-[768px]:text-[32px] max-[768px]:mt-[70px] max-[768px]:mb-[30px]"
    >
      {children}
    </motion.h2>
  )
}
