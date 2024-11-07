import { ReactNode } from "react"

export interface IMainCard {
  subtitle: string
  title: string
  description: string
  text: string
  image: string
}

export interface IAboutCard {
  animateDelay: number
  title: ReactNode
  text: string
  width: string
  type: "default" | "primary" | "yellow"
  textWidth: string
  image: ReactNode
}

export interface IReviewCard {
  text: string
  name: string
  status: string
  image: string
}
export interface IContentCard {
  color?: "primary" | "gray" | "cyan" | "yellow" | "white"
  className?: string
  image?: ReactNode
  title?: ReactNode
  text?: string
}

export interface IShiftCard {
  shift: string
  date: string
  title: string
  description: string
  price: number
  priceWithDiscount: number
  image: string
}

export type TCardsVariants = "main" | "about"
export type TMainCardActions = "application" | "detailed"
