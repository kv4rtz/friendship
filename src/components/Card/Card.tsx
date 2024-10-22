import {
  AboutCard,
  ContentCard,
  IAboutCardProps,
  IContentCardProps,
  IMainCardProps,
  MainCard,
} from "./components"
import { IAboutCard, IContentCard, IMainCard } from "./types"

type ICardProps = IAboutCardProps | IMainCardProps | IContentCardProps

export const Card = ({ variant = "main", data }: ICardProps) => {
  if (variant === "main") {
    return <MainCard data={data as IMainCard} />
  } else if (variant === "about") {
    return <AboutCard data={data as IAboutCard} />
  } else if (variant === "content") {
    return <ContentCard data={data as IContentCard} />
  }
}
