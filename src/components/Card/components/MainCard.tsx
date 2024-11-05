"use client"

import { MotionButton } from "@/components/common"
import { motion } from "framer-motion"
import Image from "next/image"
import { IMainCard, TMainCardActions } from "../types"

export interface IMainCardProps {
  variant?: "main"
  onAction?: (action: TMainCardActions) => void
  data: IMainCard
}

const animation = {
  hidden: { opacity: 0, scale: 1.2, y: 100 },
  visible: (c: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: c * 0.05,
    },
  }),
}
const animationButton = {
  hidden: { opacity: 0, scale: 0 },
  visible: (c: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: c * 0.05,
    },
  }),
}

const animationText = {
  hidden: { y: -100, opacity: 0 },
  visible: (c: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: c * 0.05,
    },
  }),
}

const MotionImage = motion.create(Image)

export const MainCard = ({ data }: IMainCardProps) => {
  const { title, subtitle, description, text, image } = data

  return (
    <motion.div
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      variants={animation}
    >
      <article className="flex max-[1440px]:block justify-between gap-[15px] items-stretch pl-[70px] max-[1440px]:pl-[16px] p-[16px] bg-white border border-card rounded-[32px]">
        <div className="max-[820px]:flex-1">
          <motion.h3
            custom={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationText}
            className="text-[48px] max-[768px]:text-[32px] max-[768px]:leading-[34.83px] font-headline text-primary leading-[52.24px] max-w-[543px] max-[375px]:text-[24px]"
          >
            {subtitle}
          </motion.h3>
          <motion.h2
            custom={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationText}
            className="text-[128px] max-[768px]:text-[52px] max-[375px]:text-[44px] max-[768px]:mt-[21px] max-[768px]:leading-[52px] font-bold leading-[120px] mt-[50px] max-w-[711px]"
          >
            {title}
          </motion.h2>
          <motion.div
            custom={14}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationText}
            className="text-[24px] max-[768px]:text-[14px] max-[768px]:mt-[21px] text-grey font-semibold mt-[34px]"
          >
            {description}
          </motion.div>
          <motion.p
            custom={16}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationText}
            className="text-[24px] max-[768px]:text-[14px] max-[768px]:mt-[40px] max-[768px]:leading-[18.34px] font-medium leading-[31.44px] mt-[90px] max-w-[648px]"
          >
            {text}
          </motion.p>
          <div className="flex gap-[28px] max-[1440px]:flex-col max-[1440px]:gap-[10px] mt-[51px] max-[768px]:mt-[21px]">
            <MotionButton
              custom={18}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              className="max-[768px]:text-[16px] max-[768px]:py-[13px] max-[768px]:px-[30px] max-[768px]:rounded-[12px] min-w-[100px]"
            >
              Оставить заявку
            </MotionButton>
            <MotionButton
              custom={18}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              className="max-[768px]:text-[16px] max-[768px]:py-[13px] max-[768px]:px-[30px] max-[768px]:rounded-[12px]"
              severity="grey"
            >
              Подробнее
            </MotionButton>
          </div>
        </div>
        <MotionImage
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
          variants={animation}
          className="object-cover min-w-[200px] max-[768px]:h-[300px] max-[1440px]:hidden rounded-[25px]"
          src={image}
          alt={title}
          width={884}
          height={864}
        />
      </article>
      <MotionImage
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        variants={animation}
        className="object-cover w-full mt-[10px] max-h-[500px] max-[1440px]:block hidden rounded-[25px]"
        src={image}
        alt={title}
        width={884}
        height={864}
      />
    </motion.div>
  )
}
