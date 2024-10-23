import {
  AboutCard,
  ContentCard,
  IAboutCardProps,
  IContentCardProps,
  IMainCardProps,
  IReviewCardProps,
  IShiftCardProps,
  MainCard,
  ReviewCard,
  ShiftCard,
} from "./components"
import {
  IAboutCard,
  IContentCard,
  IMainCard,
  IReviewCard,
  IShiftCard,
} from "./types"

type ICardProps =
  | IAboutCardProps
  | IMainCardProps
  | IContentCardProps
  | IShiftCardProps
  | IReviewCardProps

export const Card = ({ variant = "main", data }: ICardProps) => {
  if (variant === "main") {
    return <MainCard data={data as IMainCard} />
  } else if (variant === "about") {
    return <AboutCard data={data as IAboutCard} />
  } else if (variant === "content") {
    return <ContentCard data={data as IContentCard} />
  } else if (variant === "shift") {
    return <ShiftCard data={data as IShiftCard} />
  } else if (variant === "review") {
    return <ReviewCard data={data as IReviewCard} />
  }
}
