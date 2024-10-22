import { LargeCard } from "./components"
import { ILargeCard, TCardsVariants, TLargeCardActions } from "./types"

interface ICardProps {
  variant?: TCardsVariants
  data: ILargeCard
  onAction?: (action: TLargeCardActions) => void
}

export const Card = ({ variant = "large", data }: ICardProps) => {
  if (variant === "large") {
    return <LargeCard data={data} />
  } else {
    return <div>test</div>
  }
}
