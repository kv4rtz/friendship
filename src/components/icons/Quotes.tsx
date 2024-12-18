"use client"

import { motion } from "framer-motion"
import { ComponentProps, ForwardedRef, forwardRef } from "react"

export const Q = (
  props: ComponentProps<"svg">,
  ref: ForwardedRef<SVGSVGElement>
) => {
  return (
    <svg
      width="330"
      height="305"
      viewBox="0 0 330 305"
      fill="#8100FF"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M189 0.610339L329.5 0.610352L329.5 101.11C329.5 141.777 326 173.777 319 197.11C311.667 220.777 298.333 241.944 279 260.61C259.667 279.277 235 293.944 205 304.61L177.5 246.61C205.5 237.277 225.667 224.277 238 207.61C250 190.944 256.333 168.777 257 141.11L189 141.11L189 0.610339Z" />
      <path d="M12 0.610339L152.5 0.610352L152.5 101.11C152.5 141.777 149 173.777 142 197.11C134.667 220.777 121.333 241.944 102 260.61C82.6667 279.277 58 293.944 28 304.61L0.500005 246.61C28.5 237.277 48.6667 224.277 61 207.61C73 190.944 79.3333 168.777 80 141.11L12 141.11L12 0.610339Z" />
    </svg>
  )
}

export const Quotes = forwardRef<SVGSVGElement, ComponentProps<"svg">>(Q)

export const MotionQuotes = motion.create(Quotes)
