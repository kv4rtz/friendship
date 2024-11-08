import Image from "next/image"
import { BlockTitle } from "../BlockTitle"
import { Card } from "../Card"

export const AboutUsBlock = () => {
  return (
    <section id="aboutus" className="max-w-container mx-auto select-none">
      <BlockTitle>О нас</BlockTitle>
      <div className="flex gap-[20px] flex-wrap">
        <Card
          variant="about"
          data={{
            animateDelay: 1,
            type: "default",
            width: "593px",
            textWidth: "376px",
            title: (
              <>
                Тематические <br />
                смены
              </>
            ),
            text: "Каждая смена имеет свою тему — книги, кино, искусство или спорт, создавая особую атмосферу для детей на протяжении всего пребывания в лагере.",
            image: (
              <Image
                className="absolute right-0 max-[620px]:w-[257px] max-[620px]:top-16 max-[620px]:-rotate-[24deg] max-[620px]:h-[309px]"
                src="/images/card1.png"
                alt="render"
                width={295}
                height={338}
              />
            ),
          }}
        />
        <Card
          variant="about"
          data={{
            animateDelay: 2,
            width: "593px",
            textWidth: "315px",
            type: "primary",
            title: (
              <>
                Незабываемые <br />
                каникулы
              </>
            ),
            text: "Устроить незабываемые каникулы для детей твоя забота, но наша награда!",
            image: (
              <Image
                className="absolute right-0 top-[75px] max-[555px]:w-[233px] max-[555px]:h-[295px]"
                src="/images/card2.png"
                alt="render"
                width={295}
                height={338}
              />
            ),
          }}
        />
        <Card
          variant="about"
          data={{
            animateDelay: 3,
            width: "593px",
            textWidth: "329px",
            type: "default",
            title: (
              <>
                Воплоти свои <br />
                фантазии
              </>
            ),
            text: "Каждый день с ДРУЖБОЙ - это не возможность, это момент",
            image: (
              <Image
                className="absolute right-0 bottom-0 max-[458px]:w-[242px] max-[458px]:h-[338px]"
                src="/images/card3.png"
                alt="render"
                width={352}
                height={425}
              />
            ),
          }}
        />
        <Card
          variant="about"
          data={{
            animateDelay: 4,
            width: "950px",
            textWidth: "536px",
            type: "default",
            title: (
              <>
                приключения и дружба <br />
                за городом!
              </>
            ),
            text: "Мы расположены в лесной зоне г.Ижевска, на 14 км. Якшур - Бодьинского тракта",
            image: undefined,
          }}
        />
        <Card
          variant="about"
          data={{
            animateDelay: 5,
            width: "494px",
            textWidth: "207px",
            type: "default",
            title: "40 лет",
            text: "Активной работы и счастливых детей",
            image: (
              <Image
                className="absolute right-0 bottom-0"
                src="/images/card5.png"
                alt="render"
                width={328}
                height={274}
              />
            ),
          }}
        />
        <Card
          variant="about"
          data={{
            animateDelay: 6,
            width: "331px",
            textWidth: "261px",
            type: "yellow",
            title: "90 %",
            text: "Детей, которые побывали в ДРУЖБЕ однажды, возвращаются за новыми впечатлениями",
            image: undefined,
          }}
        />
      </div>
    </section>
  )
}
