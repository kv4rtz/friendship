"use client"
import clsx from "clsx"
import { motion } from "framer-motion"
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react"
import { designCn, severityCn, sizeCn } from "./classes"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: "rounded" | "default"
  severity?: "primary" | "yellow" | "bordered" | "white" | "cyan" | "grey"
  size?: "small" | "default"
}

export const Btn = (
  {
    design = "default",
    severity = "primary",
    size = "default",
    children,
    ...attrs
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      {...attrs}
      className={clsx(
        designCn[design],
        severityCn[severity],
        design === "default" && sizeCn[size],
        attrs.className
      )}
      ref={ref}
    >
      {children}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(Btn)

export const MotionButton = motion.create(Button)
