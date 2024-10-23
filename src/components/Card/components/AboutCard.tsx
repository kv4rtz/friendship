"use client"

import clsx from "clsx"
import * as motion from "framer-motion/client"
import { IAboutCard } from "../types"

export interface IAboutCardProps {
  variant?: "about"
  data: IAboutCard
  onAction?: never
}

const animation = {
  hidden: { opacity: 0, y: -100 },
  visible: (c: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: c * 0.05,
    },
  }),
}

export const AboutCard = ({ data }: IAboutCardProps) => {
  const { title, text, image, width, type, textWidth } = data
  return (
    <motion.article
      custom={data.animateDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={animation}
      style={{ minWidth: width }}
      className={clsx(
        `relative flex-1 max-[950px]:!min-w-full rounded-[32px] py-[42px] px-[35px] flex flex-col justify-between min-h-[402px] border border-card`,
        {
          "bg-primary": type === "primary",
          "bg-white": type === "default",
          "bg-yellow": type === "yellow",
        }
      )}
    >
      <h3
        className={clsx(
          "font-headline max-[768px]:leading-[32.65px] leading-[52.24px]",
          type !== "default" ? "text-white" : "text-primary",
          title === "40 лет" || title === "90 %"
            ? "text-[96px] max-[768px]:text-[72px]"
            : "text-[48px] max-[768px]:text-[30px]"
        )}
      >
        {title}
      </h3>
      <p
        style={{ maxWidth: textWidth }}
        className={clsx(
          "font-medium text-[20px]  max-[768px]:text-[14px] max-[768px]:leading-[18.34px] leading-[26.2px] z-10",
          type !== "default" ? "text-white" : "text-black"
        )}
      >
        {text}
      </p>
      {image}
    </motion.article>
  )
}
