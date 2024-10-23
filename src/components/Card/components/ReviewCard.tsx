import Image from "next/image"
import { IReviewCard } from "../types"

export interface IReviewCardProps {
  variant?: "review"
  data: IReviewCard
}

export const ReviewCard = ({ data }: IReviewCardProps) => {
  return (
    <article className=" flex gap-[73px] max-[1176px]:gap-[29px] items-stretch max-[1176px]:flex-col-reverse">
      <p className="text-[20px] max-[1176px]:max-w-full  max-w-[561px] max-[768px]:text-[14px] font-medium leading-[131.9%]">
        {data.text}
      </p>
      <div className="relative max-[1176px]:max-w-full flex flex-col justify-end">
        <div className="text-white">
          <div className="absolute left-[19px] bottom-[46px] max-w-[176px] font-bold text-[28px] leading-[30px]">
            {data.name}
          </div>
          <div className="absolute left-[19px] bottom-[13px] font-semibold text-[20px] mt-[7px]">
            {data.status}
          </div>
        </div>
        <Image
          className="max-w-[300px] max-h-[305px] left-0 top-0 rounded-[24px] object-cover max-[1176px]:w-full max-[1176px]:max-w-full"
          src={data.image}
          alt="reviewer photo"
          width="300"
          height="305"
        />
      </div>
    </article>
  )
}
