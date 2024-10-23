import { ReactNode } from "react"

export interface IMainCard {
  subtitle: string
  title: string
  description: string
  text: string
  image: string
}

export interface IAboutCard {
  title: ReactNode
  text: string
  width: string
  type: "default" | "primary" | "yellow"
  textWidth: string
  image: ReactNode
}

export interface IContentCard {
  color?: "primary" | "gray" | "cyan" | "yellow" | "white"
  className?: string
  image?: ReactNode
  title?: string
  text?: string
}

export type TCardsVariants = "main" | "about"
export type TMainCardActions = "application" | "detailed"
