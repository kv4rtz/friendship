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
        "min-h-[316px] py-[42px] px-[39px] flex flex-col justify-between rounded-[32px]",
        {
          "bg-primary text-white": color === "primary",
          "bg-cardGrey text-white": color === "gray",
          "bg-cyan text-white": color === "cyan",
          "bg-yellow text-white": color === "yellow",
          "bg-white text-black": color === "white",
        }
      )}
    >
      <h3 className="leading-[30px] text-[28px] font-bold uppercase">
        {title}
      </h3>
      <p className="leading-[26.2px] text-[20px]">{text}</p>
    </article>
  )
}
