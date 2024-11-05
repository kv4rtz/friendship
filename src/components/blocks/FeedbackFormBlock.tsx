"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BlockTitle } from "../BlockTitle"
import { MotionButton, MotionInput } from "../common"

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
const animationBlock = {
  hidden: { opacity: 0, scaleX: 1.2 },
  visible: (c: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: c * 0.05,
    },
  }),
}
const animationImage = {
  hidden: { scale: 0, rotate: -50 },
  visible: (c: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: c * 0.05,
    },
  }),
}

const MotionImage = motion.create(Image)

export const FeedbackFormBlock = () => {
  return (
    <section id="buy" className="max-w-container mx-auto">
      <BlockTitle>Оформить путевку</BlockTitle>
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        variants={animationBlock}
        className="relative rounded-[32px] bg-primary py-[65px] px-[70px] max-[768px]:px-[16px] max-[768px]:py-[16px] text-white"
      >
        <form className="max-w-[680px] max-[1600px]:max-w-full">
          <Image
            className="absolute left-1/2 -top-[65px] min-[521px]:hidden -translate-x-1/2 min-w-[414px]"
            src="/images/blue-star.png"
            alt="blue-star"
            width="414"
            height="390"
          />
          <motion.h3
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationText}
            className="font-bold text-[48px] leading-[56.35px] max-[520px]:mt-[276px] max-[768px]:text-[24px] max-[768px]:leading-[28px]"
          >
            Узнать стоимость <br /> путёвки и наличие мест
          </motion.h3>
          <div className="mt-[57px] max-[768px]:mt-[24px] space-y-[20px] max-[768px]:space-y-[10px]">
            <MotionInput
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              placeholder="Ваше имя"
            />
            <MotionInput
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              placeholder="Ваш номер телефона"
            />
            <MotionInput
              custom={8}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              placeholder="your@email.ru"
            />
            <MotionButton
              custom={9}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              variants={animationButton}
              className="max-[768px]:py-[13px] max-[768px]:!min-w-full max-[768px]:rounded-[12px] max-[768px]:leading-[131%] max-[768px]:text-[14px]"
              severity="yellow"
            >
              Забронировать
            </MotionButton>
          </div>
        </form>
        <div className="max-[1600px]:hidden">
          <Image
            className="absolute right-0 z-20 bottom-0 max-w-[723px] max-h-[740px]"
            src="/images/friendship-people.png"
            alt="friendship-people"
            width="723"
            height="740"
          />
          <MotionImage
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
            variants={animationImage}
            className="absolute -right-[257px] z-30 -bottom-[216px] max-w-[776px] max-h-[730px]"
            src="/images/blue-star.png"
            alt="blue-star"
            width="776"
            height="730"
          />
          <Image
            className="absolute right-[368px] max-[1680px]:right-[250px] z-10 -top-[108px] max-w-[631px] max-h-[572px]"
            src="/images/purple-star.png"
            alt="purple-star"
            width="631"
            height="572"
          />
        </div>
      </motion.div>
    </section>
  )
}
