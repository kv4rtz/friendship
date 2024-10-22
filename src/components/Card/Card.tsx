import {
  AboutCard,
  IAboutCardProps,
  IMainCardProps,
  MainCard,
} from "./components"
import { IAboutCard, IMainCard } from "./types"

type ICardProps = IAboutCardProps | IMainCardProps

export const Card = ({ variant = "main", data }: ICardProps) => {
  if (variant === "main") {
    return <MainCard data={data as IMainCard} />
  } else if (variant === "about") {
    return <AboutCard data={data as IAboutCard} />
  }
}
