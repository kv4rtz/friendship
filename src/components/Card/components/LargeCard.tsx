import { Button } from "@/components/common"
import Image from "next/image"
import { ILargeCard, TLargeCardActions } from "../types"

interface ILargeCardProps {
  onAction?: (action: TLargeCardActions) => void
  data: ILargeCard
}

export const LargeCard = ({ data }: ILargeCardProps) => {
  const { title, subtitle, description, text, image } = data

  return (
    <div>
      <article className="flex justify-between gap-[15px] items-center pl-[70px] max-[1440px]:pl-[16px] p-[16px] bg-white border border-[#BFBFBF] rounded-[32px]">
        <div>
          <h3 className="text-[48px] max-[1820px]:text-[32px] max-[1820px]:leading-[34.83px] font-headline text-primary leading-[52.24px] max-w-[543px]">
            {subtitle}
          </h3>
          <h2 className="text-[128px] max-[1820px]:text-[52px] max-[1820px]:mt-[21px] max-[1820px]:leading-[52px] font-bold leading-[120px] mt-[50px] max-w-[711px]">
            {title}
          </h2>
          <div className="text-[24px] max-[1820px]:text-[14px] max-[1820px]:mt-[21px] text-grey font-semibold mt-[34px]">
            {description}
          </div>
          <p className="text-[24px] max-[1820px]:text-[14px] max-[1820px]:mt-[40px] max-[1820px]:leading-[18.34px] font-medium leading-[31.44px] mt-[90px] max-w-[648px]">
            {text}
          </p>
          <div className="flex gap-[28px] max-[820px]:flex-col max-[1820px]:gap-[10px] mt-[51px] max-[1820px]:mt-[21px]">
            <Button className="max-[1820px]:text-[16px] max-[1820px]:py-[13px] max-[1820px]:px-[30px] max-[1820px]:rounded-[12px] min-w-[100px]">
              Оставить заявку
            </Button>
            <Button
              className="max-[1820px]:text-[16px] max-[1820px]:py-[13px] max-[1820px]:px-[30px] max-[1820px]:rounded-[12px]"
              severity="grey"
            >
              Подробнее
            </Button>
          </div>
        </div>
        <Image
          className="object-cover max-[1820px]:h-[300px] max-[1440px]:hidden rounded-[25px]"
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
