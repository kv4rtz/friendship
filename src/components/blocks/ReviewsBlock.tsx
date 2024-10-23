"use client"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"
import { Quotes, SwiperArrow } from "../icons"

export const ReviewsBlock = () => {
  return (
    <section className="relative max-w-container mx-auto">
      <BlockTitle>Отзывы</BlockTitle>
      <Quotes className="absolute max-[1176px]:hidden top-0 left-[42px] rotate-180 max-[1669px]:w-[250px]" />
      <Quotes className="absolute max-[1176px]:hidden -bottom-[202px] right-[42px] max-[1669px]:w-[250px] max-[1496px]:-bottom-[220px]" />
      <div className="py-[60px] max-[1176px]:p-[15px] border border-card rounded-[32px]">
        <div className="max-w-[1104px] mx-auto flex gap-[45px] items-center">
          <button className="max-[1024px]:hidden prevSlideReview">
            <SwiperArrow className="fill-black transition" />
          </button>
          <Swiper
            navigation={{
              nextEl: ".nextSlideReview",
              prevEl: ".prevSlideReview",
            }}
            modules={[Navigation]}
            className="w-full"
            slidesPerView={1}
          >
            <SwiperSlide>
              <Card
                variant="review"
                data={{
                  name: "Илена Герасимова",
                  status: "Ребенок",
                  text: "«Вот и закончилась 3 летняя смена в лагере «Дружба». 18 дней пролетели на одном дыхании, как один день. Было очень КРУТО, поэтому и быстро!!! Зарядки, танцы, огоньки, игры, театральные постановки, дискотеки — это всё останется в памяти надолго!!! В нашей бригаде было 29 строителей. Заряжавшие меня своей энергией, позитивными эмоциями. И каждого из которых я полюбила всей душой. СПАСИБО вам, мальчишки и девчонки, ВЫ СУПЕР ребята!!! Все вместе мы были одной дружной семьёй!!! С вами приятно было работать!!! Также просто СПАСИБО, «Дружба», что ты есть!!!»",
                  image: "/images/review.png",
                }}
              />
            </SwiperSlide>
          </Swiper>
          <button className="max-[1024px]:hidden nextSlideReview">
            <SwiperArrow className="fill-black rotate-180 transition" />
          </button>
        </div>
      </div>
    </section>
  )
}
