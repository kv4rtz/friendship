"use client"

import { shifts } from "@/data"
import { motion } from "framer-motion"
import { useState } from "react"
import "swiper/css"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"
import { ShiftsTabs, TTabVariants } from "../ShiftsTabs"
import { SwiperArrow } from "../icons"

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

export const ShiftsBlock = () => {
  const [currentTab, setCurrentTab] = useState<TTabVariants>()

  return (
    <section id="shifts" className="mx-auto max-w-container">
      <BlockTitle>Наши смены</BlockTitle>
      <ShiftsTabs onChange={(t) => setCurrentTab(t)} />
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={animation}
        className="mt-[50px] flex gap-[33px] items-center"
      >
        <button className="max-[1024px]:hidden prevSlide">
          <SwiperArrow className="fill-black transition" />
        </button>
        <Swiper
          navigation={{ nextEl: ".nextSlide", prevEl: ".prevSlide" }}
          modules={[Navigation]}
          className="w-full"
          slidesPerView={1}
        >
          {shifts[currentTab || "summer"].map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Card
                variant="shift"
                data={{
                  date: slide.date,
                  shift: slide.shift,
                  title: slide.title,
                  description: slide.description,
                  image: slide.image,
                  price: slide.price,
                  priceWithDiscount: slide.priceWithDiscount,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="max-[1024px]:hidden nextSlide">
          <SwiperArrow className="fill-black rotate-180 transition" />
        </button>
      </motion.div>
    </section>
  )
}
