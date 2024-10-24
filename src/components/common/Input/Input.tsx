import clsx from "clsx"
import { InputHTMLAttributes } from "react"

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        "w-full py-[24px] px-[30px] bg-white text-black rounded-[25px] text-[24px] leading-[31.66px] outline-none max-[768px]:text-[14px] max-[768px]:py-[18px] max-[768px]:px-[30px] max-[768px]:rounded-[12px] max-[768px]:leading-[131%]",
        props.className
      )}
    />
  )
}
