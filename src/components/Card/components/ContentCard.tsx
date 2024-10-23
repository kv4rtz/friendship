import clsx from "clsx"
import { IContentCard } from "../types"

export interface IContentCardProps {
  variant?: "content"
  data: IContentCard
  onAction?: never
}

export const ContentCard = ({ data }: IContentCardProps) => {
  const { title, text, color } = data
  return (
    <article
      className={clsx(
        "min-h-[316px] max-[768px]:min-h-[200px] flex-1",
        {
          "py-[42px] px-[39px] flex flex-col justify-between rounded-[32px]":
            !data.image,
          "bg-primary text-white": color === "primary" && !data.image,
          "bg-cardGrey text-white": color === "gray" && !data.image,
          "bg-cyan text-white": color === "cyan" && !data.image,
          "bg-yellow text-white": color === "yellow" && !data.image,
          "bg-white border border-card text-black":
            color === "white" && !data.image,
        },
        data.className
      )}
    >
      {!data.image && (
        <>
          <h3 className="leading-[30px] text-[28px] max-[768px]:text-[16px] max-[768px]:leading-[17px] font-bold uppercase">
            {title}
          </h3>
          <p className="leading-[26.2px] text-[20px] max-[768px]:text-[14px] max-[768px]:leading-[18.34px]">
            {text}
          </p>
        </>
      )}
      {data.image}
    </article>
  )
}
