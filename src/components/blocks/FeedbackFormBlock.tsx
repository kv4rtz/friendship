import Image from "next/image"
import { BlockTitle } from "../BlockTitle"
import { Button, Input } from "../common"

export const FeedbackFormBlock = () => {
  return (
    <section id="buy" className="max-w-container mx-auto">
      <BlockTitle>Оформить путевку</BlockTitle>
      <div className="relative rounded-[32px] bg-primary py-[65px] px-[70px] max-[768px]:px-[16px] max-[768px]:py-[16px] text-white">
        <form className="max-w-[680px] max-[1600px]:max-w-full">
          <Image
            className="absolute left-1/2 -top-[65px] min-[521px]:hidden -translate-x-1/2 min-w-[414px]"
            src="/images/blue-star.png"
            alt="blue-star"
            width="414"
            height="390"
          />
          <h3 className="font-bold text-[48px] leading-[56.35px] max-[520px]:mt-[276px] max-[768px]:text-[24px] max-[768px]:leading-[28px]">
            Узнать стоимость <br /> путёвки и наличие мест
          </h3>
          <div className="mt-[57px] max-[768px]:mt-[24px] space-y-[20px] max-[768px]:space-y-[10px]">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваш номер телефона" />
            <Input placeholder="your@email.ru" />
            <Button
              className="max-[768px]:py-[13px] max-[768px]:!min-w-full max-[768px]:rounded-[12px] max-[768px]:leading-[131%] max-[768px]:text-[14px]"
              severity="yellow"
            >
              Забронировать
            </Button>
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
          <Image
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
      </div>
    </section>
  )
}
