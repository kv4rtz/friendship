"use client"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"
import { MotionQuotes, SwiperArrow } from "../icons"

const animation = {
  hidden: { opacity: 0, rotate: -100 },
  visible: (c: number) => ({
    opacity: 1,
    x: 0,
    rotate: c === 1 ? 180 : 0,
    transition: {
      delay: c * 0.05,
    },
  }),
}

export const ReviewsBlock = () => {
  return (
    <section className="relative max-w-container mx-auto min-[1176px]:mb-[430px]">
      <BlockTitle>Отзывы</BlockTitle>
      <MotionQuotes
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={animation}
        className="absolute max-[1176px]:hidden top-0 left-[42px] rotate-180 max-[1669px]:w-[250px]"
      />
      <MotionQuotes
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={animation}
        className="absolute max-[1176px]:hidden -bottom-[202px] right-[42px] max-[1669px]:w-[250px] max-[1496px]:-bottom-[220px]"
      />
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
