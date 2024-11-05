import { Button } from "@/components/common"
import { formatPrice } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { IShiftCard, TMainCardActions } from "../types"

export interface IShiftCardProps {
  variant?: "shift"
  data: IShiftCard
  onAction?: (action: TMainCardActions) => void
}

export const ShiftCard = ({ data }: IShiftCardProps) => {
  return (
    <article className="p-[16px] pl-[70px] border items-stretch border-card flex gap-[24px] justify-between rounded-[32px] max-[1510px]:flex-col-reverse max-[1510px]:pl-[16px]">
      <div>
        <h4 className="text-[96px] font-headline text-primary leading-[104.48px] max-[790px]:text-[32px] max-[790px]:leading-[34.83px]">
          {data.shift}
        </h4>
        <time
          dateTime={data.date}
          className="text-[78px] font-semibold leading-[62.88px] max-[790px]:text-[20px] max-[790px]:leading-[20px]"
        >
          {data.date}
        </time>
        <h3 className="text-[40px] leading-[52.4px] font-semibold mt-[50px] max-[790px]:text-[20px] max-[790px]:leading-[26.2px] max-[790px]:mt-[23px]">
          {data.title}
        </h3>
        <p className="text-[32px] font-medium leading-[41.92px] mt-[20px] max-[790px]:text-[14px] max-[790px]:leading-[18.34px] max-[790px]:mt-[10px]">
          {data.description}
        </p>
        <div className="mt-[36px] max-[790px]:mt-[21px]">
          <div className="flex items-center gap-[20px] max-[790px]:gap-[7px]">
            <b className="text-[40px] font-semibold leading-[52.4px] line-through max-[790px]:text-[24px] max-[790px]:leading-[31.44px]">
              {formatPrice(data.price)}
            </b>
            <Link href="/game">
              <Button
                design="rounded"
                severity="cyan"
                className="max-[790px]:text-[10px]"
              >
                Пройди игру и получи скидку!
              </Button>
            </Link>
          </div>
          <b className="font-bold text-[96px] leading-[115.2px] max-[790px]:text-[40px] max-[790px]:leading-[48px]">
            {formatPrice(data.priceWithDiscount)}
          </b>
        </div>
        <div className="flex gap-[28px] mt-[51px] max-[790px]:mt-[19px] max-[790px]:flex-col max-[790px]:gap-[10px]">
          <Button className="w-fit max-[790px]:w-full  max-[790px]:text-[16px] max-[790px]:py-[15px]  max-[790px]:rounded-[12px]">
            Оставить заявку
          </Button>
          <Button
            className="w-fit max-[790px]:w-full max-[790px]:text-[16px] max-[790px]:py-[15px] max-[790px]:rounded-[12px]"
            severity="grey"
          >
            Подробнее
          </Button>
        </div>
      </div>

      <Image
        className="max-[1610px]:max-w-[650px] max-[790px]:max-w-full object-cover rounded-[24px] max-[1510px]:min-w-full max-[1510px]:max-h-[400px]"
        src={data.image}
        alt={data.title}
        width="747"
        height="864"
      />
    </article>
  )
}
