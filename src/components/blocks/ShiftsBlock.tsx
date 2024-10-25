"use client"

import { shifts } from "@/data"
import { useState } from "react"
import "swiper/css"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"
import { ShiftsTabs, TTabVariants } from "../ShiftsTabs"
import { SwiperArrow } from "../icons"

export const ShiftsBlock = () => {
  const [currentTab, setCurrentTab] = useState<TTabVariants>()

  return (
    <section id="shifts" className="mx-auto max-w-container">
      <BlockTitle>Наши смены</BlockTitle>
      <ShiftsTabs onChange={(t) => setCurrentTab(t)} />
      <div className="mt-[50px] flex gap-[33px] items-center">
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
      </div>
    </section>
  )
}
