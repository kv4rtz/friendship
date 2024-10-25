import { Button } from "@/components/common"
import Image from "next/image"
import { IMainCard, TMainCardActions } from "../types"

export interface IMainCardProps {
  variant?: "main"
  onAction?: (action: TMainCardActions) => void
  data: IMainCard
}

export const MainCard = ({ data }: IMainCardProps) => {
  const { title, subtitle, description, text, image } = data

  return (
    <div>
      <article className="flex max-[1440px]:block justify-between gap-[15px] items-stretch pl-[70px] max-[1440px]:pl-[16px] p-[16px] bg-white border border-card rounded-[32px]">
        <div className="max-[820px]:flex-1">
          <h3 className="text-[48px] max-[768px]:text-[32px] max-[768px]:leading-[34.83px] font-headline text-primary leading-[52.24px] max-w-[543px] max-[375px]:text-[24px]">
            {subtitle}
          </h3>
          <h2 className="text-[128px] max-[768px]:text-[52px] max-[375px]:text-[44px] max-[768px]:mt-[21px] max-[768px]:leading-[52px] font-bold leading-[120px] mt-[50px] max-w-[711px]">
            {/* {title.split("").map((item, idx) => {
              return (
                <motion.span
                  className="inline-block"
                  viewport={{ amount: 0.5, once: true }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                      delay: idx / 25,
                    },
                  }}
                  initial={{ opacity: 0, y: 25, x: -10 }}
                  key={idx}
                >
                  {item === " " ? <>&nbsp;</> : item}
                </motion.span>
              )
            })} */}
            {title}
          </h2>
          <div className="text-[24px] max-[768px]:text-[14px] max-[768px]:mt-[21px] text-grey font-semibold mt-[34px]">
            {description}
          </div>
          <p className="text-[24px] max-[768px]:text-[14px] max-[768px]:mt-[40px] max-[768px]:leading-[18.34px] font-medium leading-[31.44px] mt-[90px] max-w-[648px]">
            {text}
          </p>
          <div className="flex gap-[28px] max-[1440px]:flex-col max-[1440px]:gap-[10px] mt-[51px] max-[768px]:mt-[21px]">
            <Button className="max-[768px]:text-[16px] max-[768px]:py-[13px] max-[768px]:px-[30px] max-[768px]:rounded-[12px] min-w-[100px]">
              Оставить заявку
            </Button>
            <Button
              className="max-[768px]:text-[16px] max-[768px]:py-[13px] max-[768px]:px-[30px] max-[768px]:rounded-[12px]"
              severity="grey"
            >
              Подробнее
            </Button>
          </div>
        </div>
        <Image
          className="object-cover min-w-[200px] max-[768px]:h-[300px] max-[1440px]:hidden rounded-[25px]"
          src={image}
          alt={title}
          width={884}
          height={864}
        />
      </article>
      <Image
        className="object-cover w-full mt-[10px] max-h-[500px] max-[1440px]:block hidden rounded-[25px]"
        src={image}
        alt={title}
        width={884}
        height={864}
      />
    </div>
  )
}
