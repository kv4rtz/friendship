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

export type TCardsVariants = "main" | "about"
export type TMainCardActions = "application" | "detailed"
