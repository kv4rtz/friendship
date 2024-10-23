"use client"

import { useState } from "react"
import "swiper/css"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"
import { ShiftsTabs, TTabVariants } from "../ShiftsTabs"
import { SwiperArrow } from "../icons"

export const ShiftsBlock = () => {
  const [, setCurrentTab] = useState<TTabVariants>()

  return (
    <section className="mx-auto max-w-container">
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
          <SwiperSlide>
            <Card
              variant="shift"
              data={{
                date: "10 июня - 24 июня",
                shift: "1 смена",
                title: "Конно-туристичская",
                description:
                  "Конно — туристическая смена Создана для детей, которые любят лошадей и активный отдых, мечтают научиться ездить верхом или хотят совершенствовать уже имеющиеся навыки! Опыт верховой езды не обязателен",
                image: "/images/large-card.png",
                price: 41_290,
                priceWithDiscount: 34_990,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="shift"
              data={{
                date: "10 июня - 24 июня",
                shift: "2 смена",
                title: "Конно-туристичская",
                description:
                  "Конно — туристическая смена Создана для детей, которые любят лошадей и активный отдых, мечтают научиться ездить верхом или хотят совершенствовать уже имеющиеся навыки! Опыт верховой езды не обязателен",
                image: "/images/large-card.png",
                price: 41_290,
                priceWithDiscount: 34_990,
              }}
            />
          </SwiperSlide>
        </Swiper>
        <button className="max-[1024px]:hidden nextSlide">
          <SwiperArrow className="fill-black rotate-180 transition" />
        </button>
      </div>
    </section>
  )
}
