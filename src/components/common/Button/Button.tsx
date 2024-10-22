import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"
import { designCn, severityCn, sizeCn } from "./classes"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: "rounded" | "default"
  severity?: "primary" | "yellow" | "bordered" | "white" | "cyan"
  size?: "small" | "default"
}

export const Button = ({
  design = "default",
  severity = "primary",
  size = "default",
  children,
  ...attrs
}: IButtonProps) => {
  return (
    <button
      {...attrs}
      className={clsx(
        designCn[design],
        severityCn[severity],
        design === "default" && sizeCn[size],
        attrs.className
      )}
    >
      {children}
    </button>
  )
}
