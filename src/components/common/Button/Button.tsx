import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: "rounded" | "default"
  severity?: "primary" | "yellow" | "bordered" | "white" | "cyan"
  size?: "small" | "default"
}

const designCn = {
  default: "font-semibold font-main w-full",
  rounded: "py-[7px] px-[25px] font-bold rounded-full",
}

const severityCn = {
  primary: "bg-primary text-white",
  yellow: "bg-yellow text-white",
  bordered: "border border-black bg-white text-black",
  white: "bg-white text-black",
  cyan: "bg-cyan text-white",
}

const sizeCn = {
  small: "text-[16px] py-[13px] px-[30px] rounded-[12px]",
  default: "text-[24px] min-w-[350px] py-[24px] px-[35px] rounded-[25px]",
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
